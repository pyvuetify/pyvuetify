"""Markdown parsing and RST generation for Vuetify component documentation."""

import re
from dataclasses import dataclass, field

# --- Regex patterns for markdown parsing ---

EXAMPLE_TAG_RE = re.compile(r'<ExamplesExample\s+file="([^"]+)"\s*/?\s*>')
SECTION_HEADING_RE = re.compile(r"^(#{2,4})\s+(.+)$", re.MULTILINE)
FRONTMATTER_RE = re.compile(r"^---\s*\n.*?\n---\s*\n", re.DOTALL)
INFO_BLOCK_RE = re.compile(r"^:::.*?^:::", re.MULTILINE | re.DOTALL)
INLINE_COMPONENT_RE = re.compile(r"<(?:ExamplesUsage|PromotedEntry|PageFeatures|ApiInline)[^>]*/?>")

# --- RST conversion patterns ---

VUETIFY_COMPONENT_LINK_RE = re.compile(r"https?://vuetifyjs\.com(?:/en)?/components/([\w-]+)/?|/components/([\w-]+)/?")
VUETIFY_API_LINK_RE = re.compile(r"https?://vuetifyjs\.com(?:/en)?/api/v-([\w-]+)/?|/api/v-([\w-]+)/?")
VUE_DIRECTIVES = {"model", "if", "else", "show", "for", "bind", "on", "slot", "html", "text", "pre", "cloak", "once"}

SKIP_H2_SECTIONS = {"Usage", "API", "Anatomy", "Accessibility", "Ready for more?"}


# --- Data structures ---


@dataclass
class ParsedSection:
    title: str
    category: str
    description: str
    example_files: list[str] = field(default_factory=list)


@dataclass
class ParsedComponent:
    description: str
    sections: list[ParsedSection] = field(default_factory=list)


# --- Helpers ---


def _kebab_to_camel(kebab: str) -> str:
    return "".join(w.capitalize() for w in kebab.split("-"))


def example_file_to_slug(file_ref: str) -> str:
    """v-alert/prop-border-color -> border_color"""
    name = file_ref.split("/")[-1]
    for prefix in ("prop-", "misc-", "event-", "slot-"):
        if name.startswith(prefix):
            name = name[len(prefix) :]
            break
    return name.replace("-", "_")


# --- Markdown parsing ---


def parse_markdown(md_content: str) -> ParsedComponent:
    """Parse Vuetify markdown into structured sections with example references."""
    # Strip frontmatter and inline Vue components
    md_content = FRONTMATTER_RE.sub("", md_content)
    md_content = INLINE_COMPONENT_RE.sub("", md_content)

    lines = md_content.split("\n")
    result = ParsedComponent(description="")

    current_h2 = None
    current_h3 = None
    current_h4 = None
    text_lines: list[str] = []

    def flush():
        nonlocal text_lines
        title = current_h4 or current_h3
        if not title:
            text_lines = []
            return

        text = "\n".join(text_lines).strip()
        examples = EXAMPLE_TAG_RE.findall(text)
        desc = INFO_BLOCK_RE.sub("", EXAMPLE_TAG_RE.sub("", text)).strip()

        if examples or desc:
            result.sections.append(
                ParsedSection(
                    title=title,
                    category=current_h2 or "",
                    description=desc,
                    example_files=examples,
                )
            )
        text_lines = []

    for line in lines:
        m = SECTION_HEADING_RE.match(line)
        if not m:
            if current_h2 and current_h2 not in SKIP_H2_SECTIONS:
                text_lines.append(line)
            continue

        level, title = len(m.group(1)), m.group(2).strip()
        if level == 1:
            continue
        elif level == 2:
            flush()
            if current_h2 is None and not result.description:
                result.description = "\n".join(text_lines).strip()
            current_h2, current_h3, current_h4 = title, None, None
            text_lines = []
        elif level == 3:
            flush()
            current_h3, current_h4 = title, None
            text_lines = []
        elif level == 4:
            flush()
            current_h4 = title
            text_lines = []

    flush()

    # Fallback: extract description from text before first ## heading
    if not result.description:
        first_h2 = md_content.find("\n## ")
        if first_h2 > 0:
            title_end = md_content.find("\n", md_content.find("# "))
            result.description = md_content[title_end:first_h2].strip()

    return result


# --- Markdown to RST text conversion ---


def md_to_rst(text: str) -> str:
    """Convert markdown text to RST with pyvuetify-specific link transformations."""
    # Remove HTML tags
    text = re.sub(r"<[^>]+>", "", text)

    # Markdown links -> RST links (component/API aware)
    def _fix_link(m):
        label, url = m.group(1), m.group(2)
        if url.startswith("/"):
            url = f"https://vuetifyjs.com{url}"

        comp_match = VUETIFY_COMPONENT_LINK_RE.search(url)
        if comp_match:
            slug = comp_match.group(1) or comp_match.group(2)
            camel = _kebab_to_camel(slug.rstrip("s"))
            return f":doc:`{camel} <{camel}>`"

        api_match = VUETIFY_API_LINK_RE.search(url)
        if api_match:
            kebab = api_match.group(1) or api_match.group(2)
            return f":py:class:`pyvuetify.{_kebab_to_camel(kebab)}`"

        return f"`{label} <{url}>`__"

    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", _fix_link, text)

    # `v-component` -> :py:class: role
    text = re.sub(r"`v-([a-z]+(?:-[a-z]+)*)`", lambda m: f":py:class:`pyvuetify.{_kebab_to_camel(m.group(1))}`", text)

    # Protect existing RST roles and anonymous links from backtick conversion
    placeholders: dict[str, str] = {}
    counter = [0]

    def _protect(m):
        key = f"\x00PH{counter[0]}\x00"
        placeholders[key] = m.group(0)
        counter[0] += 1
        return key

    text = re.sub(r":[a-z:]+:`[^`]*`", _protect, text)
    text = re.sub(r"`[^`]+`__", _protect, text)

    # Remaining `code` -> ``code``
    text = re.sub(r"(?<!`)(`)((?!`)[^`]+)\1(?!`)", r"``\2``", text)

    # Restore protected content
    for key, value in placeholders.items():
        text = text.replace(key, value)

    # Bare v-component -> ``CamelCase``
    def _replace_bare(m):
        return m.group(0) if m.group(1) in VUE_DIRECTIVES else f"``{_kebab_to_camel(m.group(1))}``"

    text = re.sub(r"(?<![`\w])v-([a-z]+(?:-[a-z]+)*)(?![`\w])", _replace_bare, text)

    # Italic: _text_ -> *text*
    text = re.sub(r"(?<=\s)_([^_\s][^_]*)_(?=[\s.,;:])", r"*\1*", text)

    return text


# --- RST generation ---


SHARED_KERNEL_ID = "pyvuetify-docs"


def generate_rst(component_name: str, doc_url: str, parsed: ParsedComponent, available_examples: set[str]) -> str:
    """Generate full RST page content for a component."""
    title_underline = "=" * len(component_name)
    lines = [
        component_name,
        title_underline,
        "",
        # Shared kernel: all component pages run in the same kernel session,
        # avoiding one kernel startup per page during the documentation build.
        ".. jupyter-kernel:: python3",
        f"    :id: {SHARED_KERNEL_ID}",
        "",
        "",
        ".. aknowledgement::",
        f"    This page is a Python adaptation of the `official Vuetify documentation <{doc_url}>`__.",
        "    All examples have been converted to pyvuetify syntax.",
        "",
    ]

    # Description
    if parsed.description:
        lines.append(md_to_rst(parsed.description))
        lines.append("")

    # API reference
    lines.extend([".. api::", "", f"    :py:class:`pyvuetify.{component_name}`", ""])

    # Content sections
    for section in parsed.sections:
        if section.title.endswith("reference"):
            continue

        lines.extend([section.title, "-" * len(section.title), ""])

        if section.description:
            lines.append(md_to_rst(section.description))
            lines.append("")

        for example_file in section.example_files:
            slug = example_file_to_slug(example_file)
            if slug not in available_examples:
                continue
            lines.extend(
                [
                    ".. tab-set::",
                    "",
                    "    .. tab-item:: :fas:`eye` Rendered",
                    "",
                    f"        .. jupyter-execute:: {component_name}/{slug}.py",
                    "            :raises:",
                    "            :hide-code:",
                    "",
                    "    .. tab-item:: :fab:`python` Python",
                    "",
                    f"        .. literalinclude:: {component_name}/{slug}.py",
                    "",
                    "    .. tab-item:: :fab:`vuejs` Vue template",
                    "",
                    f"        .. literalinclude:: {component_name}/{slug}.vue",
                    "",
                ]
            )

        lines.append("")

    return "\n".join(lines)
