"""Step 3: Scrape Vuetify documentation from GitHub source.

For each component in components_list.txt:
1. Fetch the markdown source from GitHub (vuetifyjs/vuetify master branch)
2. Parse out: Guide sections + Additional Examples (skip Usage, Accessibility, Ready for more)
3. Download the Vue example files referenced by <ExamplesExample file="..." />
4. Generate an RST file with tab-set structure (Rendered / Python / Vue)
5. Save .vue files and create stub .py files

Skips components whose output RST file already exists.

Source locations:
    MD:  https://raw.githubusercontent.com/vuetifyjs/vuetify/master/packages/docs/src/pages/en/components/{slug}.md
    Vue: https://raw.githubusercontent.com/vuetifyjs/vuetify/master/packages/docs/src/examples/{file}.vue
"""

import re
import time
from pathlib import Path
from urllib.error import HTTPError
from urllib.request import Request, urlopen

HERE = Path(__file__).parent
ROOT = HERE.parent
COMPONENTS_LIST = HERE / "components_list.txt"
SCRAPED_DIR = HERE / "scraped"
DOCS_COMPONENT_DIR = ROOT / "docs" / "component"

GITHUB_RAW = "https://raw.githubusercontent.com/vuetifyjs/vuetify/master/packages/docs/src"
PAGES_BASE = f"{GITHUB_RAW}/pages/en/components"
EXAMPLES_BASE = f"{GITHUB_RAW}/examples"

# Regex patterns
EXAMPLE_TAG_RE = re.compile(r'<ExamplesExample\s+file="([^"]+)"\s*/?\s*>')
SECTION_HEADING_RE = re.compile(r"^(#{2,4})\s+(.+)$", re.MULTILINE)
FRONTMATTER_RE = re.compile(r"^---\s*\n.*?\n---\s*\n", re.DOTALL)
INFO_BLOCK_RE = re.compile(r"^:::.*?^:::", re.MULTILINE | re.DOTALL)
INLINE_COMPONENT_RE = re.compile(r"<(?:ExamplesUsage|PromotedEntry|PageFeatures|ApiInline)[^>]*/?>")


def fetch_text(url: str) -> str | None:
    """Fetch a URL and return text content, or None on error."""
    req = Request(url, headers={"User-Agent": "Mozilla/5.0 (pyvuetify-docs-builder)"})
    try:
        with urlopen(req, timeout=15) as resp:
            return resp.read().decode("utf-8", errors="replace")
    except HTTPError as e:
        if e.code == 404:
            return None
        print(f"  HTTP {e.code} for {url}")
        return None
    except Exception as e:
        print(f"  Error fetching {url}: {e}")
        return None


def slug_from_url(url: str) -> str:
    """Extract slug from component URL: https://vuetifyjs.com/en/components/alerts/ -> alerts"""
    return url.rstrip("/").split("/")[-1]


def kebab_to_camel(name: str) -> str:
    """v-alert -> Alert, v-bottom-navigation -> BottomNavigation"""
    return "".join(w.capitalize() for w in name.removeprefix("v-").split("-"))


def example_file_to_slug(file_ref: str) -> str:
    """Convert example file reference to a snake_case slug.

    v-alert/prop-density -> density
    v-alert/prop-border-color -> border_color
    v-alert/misc-closable -> closable
    """
    # Take the last part after /
    name = file_ref.split("/")[-1]
    # Remove common prefixes
    for prefix in ("prop-", "misc-", "event-", "slot-"):
        if name.startswith(prefix):
            name = name[len(prefix) :]
            break
    # Convert kebab-case to snake_case
    return name.replace("-", "_")


def parse_markdown_sections(md_content: str) -> dict:
    """Parse the markdown into structured sections.

    Returns dict with:
        - description: str (intro text)
        - guide_intro: str (Guide section intro)
        - sections: list of {title, level, description, example_file}
    """
    # Remove frontmatter
    md_content = FRONTMATTER_RE.sub("", md_content)

    # Remove Vue custom components we don't need
    md_content = INLINE_COMPONENT_RE.sub("", md_content)

    # Split by headings
    lines = md_content.split("\n")

    result = {
        "description": "",
        "guide_intro": "",
        "sections": [],
    }

    # Track current position in the document
    current_h2 = None
    current_h3 = None
    current_h4 = None
    current_text_lines = []
    skip_sections = {"Usage", "API", "Anatomy", "Accessibility", "Ready for more?"}

    def flush_section():
        """Save accumulated text as a section."""
        nonlocal current_text_lines
        if not current_h4 and not current_h3:
            current_text_lines = []
            return

        title = current_h4 or current_h3
        if not title:
            current_text_lines = []
            return

        text = "\n".join(current_text_lines).strip()
        # Find example references in this section's text
        examples = EXAMPLE_TAG_RE.findall(text)
        # Remove example tags from description
        desc = EXAMPLE_TAG_RE.sub("", text).strip()
        # Remove info blocks
        desc = INFO_BLOCK_RE.sub("", desc).strip()

        if examples or desc:
            result["sections"].append(
                {
                    "title": title,
                    "category": current_h2 or "",
                    "description": desc,
                    "example_files": examples,
                }
            )
        current_text_lines = []

    for line in lines:
        heading_match = SECTION_HEADING_RE.match(line)
        if heading_match:
            level = len(heading_match.group(1))
            title = heading_match.group(2).strip()

            if level == 1:
                # Top-level title, skip
                continue
            elif level == 2:
                flush_section()
                if current_h2 is None and not result["description"]:
                    result["description"] = "\n".join(current_text_lines).strip()
                    current_text_lines = []
                current_h2 = title
                current_h3 = None
                current_h4 = None
                current_text_lines = []
            elif level == 3:
                flush_section()
                current_h3 = title
                current_h4 = None
                current_text_lines = []
            elif level == 4:
                flush_section()
                current_h4 = title
                current_text_lines = []
        else:
            # Only accumulate text for sections we care about
            if current_h2 and current_h2 not in skip_sections:
                current_text_lines.append(line)

    # Flush last section
    flush_section()

    # Extract description if not yet set (text before first h2)
    if not result["description"]:
        # Find text between # Title and first ##
        first_h2 = md_content.find("\n## ")
        if first_h2 > 0:
            title_end = md_content.find("\n", md_content.find("# "))
            result["description"] = md_content[title_end:first_h2].strip()

    return result


# Regex for v-component references in text (e.g. `v-alert`, v-list-item)
# Uses negative lookbehind to avoid matching inside RST roles (preceded by backtick)
V_COMPONENT_RE = re.compile(r"(?<!`)(`v-([a-z]+(?:-[a-z]+)*)`|(?<!\w)v-([a-z]+(?:-[a-z]+)*)(?!\w))")

# Regex for vuetify component page links: /components/alerts/ or https://vuetifyjs.com/en/components/alerts/
VUETIFY_COMPONENT_LINK_RE = re.compile(r"https?://vuetifyjs\.com(?:/en)?/components/([\w-]+)/?|/components/([\w-]+)/?")

# Regex for vuetify API links: /api/v-alert/ or https://vuetifyjs.com/en/api/v-alert/
VUETIFY_API_LINK_RE = re.compile(r"https?://vuetifyjs\.com(?:/en)?/api/v-([\w-]+)/?|/api/v-([\w-]+)/?")


def _kebab_to_camel(kebab: str) -> str:
    """alert-title -> AlertTitle"""
    return "".join(w.capitalize() for w in kebab.split("-"))


def md_to_rst_text(text: str) -> str:
    """Convert markdown text to RST with pyvuetify-specific transformations.

    Order of operations matters:
    1. Remove HTML tags (before they interfere with RST angle brackets)
    2. Convert markdown links to RST (creates <Target> in :doc: roles)
    3. Convert backtick-wrapped `v-component` to :py:class: roles
    4. Convert remaining `code` backticks to ``code``
    5. Convert bare v-component mentions to ``ComponentName``
    6. Italic conversion
    """
    # 1. Remove HTML-like tags early (Vue components, markdown artifacts)
    text = re.sub(r"<[^>]+>", "", text)

    # 2. Links: [text](url) -> convert based on target
    def fix_link(m):
        label, url = m.group(1), m.group(2)
        if url.startswith("/"):
            url = f"https://vuetifyjs.com{url}"

        # Check if it's a link to a Vuetify component page
        comp_match = VUETIFY_COMPONENT_LINK_RE.search(url)
        if comp_match:
            slug = comp_match.group(1) or comp_match.group(2)
            # Use the component CamelCase name as both label and target
            camel = _kebab_to_camel(slug.rstrip("s"))
            return f":doc:`{camel} <{camel}>`"

        # Check if it's a link to a Vuetify API page
        api_match = VUETIFY_API_LINK_RE.search(url)
        if api_match:
            kebab = api_match.group(1) or api_match.group(2)
            camel = _kebab_to_camel(kebab)
            return f":py:class:`pyvuetify.{camel}`"

        # Regular external link with anonymous reference
        return f"`{label} <{url}>`__"

    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", fix_link, text)

    # 3. Convert backtick-wrapped v-component names to :py:class: roles
    # Must run BEFORE generic inline code conversion
    def replace_backtick_v_component(m):
        kebab = m.group(1)
        camel = _kebab_to_camel(kebab)
        return f":py:class:`pyvuetify.{camel}`"

    text = re.sub(r"`v-([a-z]+(?:-[a-z]+)*)`", replace_backtick_v_component, text)

    # 4. Inline code: `code` -> ``code`` (remaining backtick pairs)
    # First, protect existing RST roles from being mangled by the inline code regex
    # RST roles look like :rolename:`content` or :domain:role:`content`
    _placeholders = {}
    _ph_counter = [0]

    def _protect_role(m):
        key = f"\x00ROLE{_ph_counter[0]}\x00"
        _placeholders[key] = m.group(0)
        _ph_counter[0] += 1
        return key

    text = re.sub(r":[a-z:]+:`[^`]*`", _protect_role, text)

    # Also protect anonymous links: `text <url>`__
    text = re.sub(r"`[^`]+`__", _protect_role, text)

    # Now safely convert remaining markdown inline code
    text = re.sub(r"(?<!`)(`)((?!`)[^`]+)\1(?!`)", r"``\2``", text)

    # Restore protected roles
    for key, value in _placeholders.items():
        text = text.replace(key, value)

    # 5. Replace bare v-component mentions (not inside roles/backticks)
    # Exclude Vue directives (v-model, v-if, v-for, etc.)
    VUE_DIRECTIVES = {
        "model",
        "if",
        "else",
        "show",
        "for",
        "bind",
        "on",
        "slot",
        "html",
        "text",
        "pre",
        "cloak",
        "once",
        "memo",
    }

    def replace_bare_v_component(m):
        kebab = m.group(1)
        if kebab in VUE_DIRECTIVES:
            return m.group(0)  # Keep as-is
        camel = _kebab_to_camel(kebab)
        return f"``{camel}``"

    text = re.sub(r"(?<![`\w])v-([a-z]+(?:-[a-z]+)*)(?![`\w])", replace_bare_v_component, text)

    # 6. Bold: **text** stays the same in RST
    # Italic: _text_ -> *text* (but be careful with snake_case)
    text = re.sub(r"(?<=\s)_([^_\s][^_]*)_(?=[\s.,;:])", r"*\1*", text)

    return text


def generate_rst(component_name: str, doc_url: str, parsed: dict, examples_available: dict) -> str:
    """Generate the RST content for a component page."""
    title = component_name
    title_underline = "=" * len(title)

    rst_lines = [
        title,
        title_underline,
        "",
        "",
        ".. aknowledgement::",
        f"    This page is a Python adaptation of the `official Vuetify documentation <{doc_url}>`__.",
        "    All examples have been converted to pyvuetify syntax.",
        "",
    ]

    # Description
    if parsed["description"]:
        desc = md_to_rst_text(parsed["description"])
        rst_lines.append(desc)
        rst_lines.append("")

    # API reference
    rst_lines.extend(
        [
            ".. api::",
            "",
            f"    :py:class:`pyvuetify.{component_name}`",
            "",
        ]
    )

    # Sections
    for section in parsed["sections"]:
        # Skip sections with sub-heading markers (like "Type reference" tables)
        if section["title"].endswith("reference"):
            continue

        title = section["title"]
        underline = "-" * len(title)

        rst_lines.extend([title, underline, ""])

        # Description
        if section["description"]:
            desc = md_to_rst_text(section["description"])
            rst_lines.append(desc)
            rst_lines.append("")

        # Tab set for each example
        for example_file in section["example_files"]:
            slug = example_file_to_slug(example_file)
            if slug not in examples_available:
                continue

            rst_lines.extend(
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

        rst_lines.append("")

    return "\n".join(rst_lines)


def generate_stub_py(component_name: str, slug: str) -> str:
    """Generate a placeholder Python file for a component example."""
    return f"""import pyvuetify as v

# TODO: Convert from {component_name}/{slug}.vue
# v.{component_name}()
"""


def process_component(v_name: str, doc_url: str) -> bool:
    """Process a single component. Returns True if successful."""
    component_name = kebab_to_camel(v_name)
    slug = slug_from_url(doc_url)

    # Check if already done
    rst_path = DOCS_COMPONENT_DIR / f"{component_name}.rst"
    if rst_path.exists():
        print(f"  Already exists: {rst_path.name}, skipping")
        return True

    # Fetch markdown source from GitHub
    md_url = f"{PAGES_BASE}/{slug}.md"
    print(f"  Fetching markdown: {slug}.md")
    md_content = fetch_text(md_url)
    if md_content is None:
        print(f"  WARNING: Could not fetch {md_url}")
        return False

    # Save raw markdown as cache
    SCRAPED_DIR.mkdir(parents=True, exist_ok=True)
    (SCRAPED_DIR / f"{slug}.md").write_text(md_content, encoding="utf-8")

    # Parse the markdown
    parsed = parse_markdown_sections(md_content)
    print(f"  Found {len(parsed['sections'])} sections")

    # Collect all example file references
    all_example_files = []
    for section in parsed["sections"]:
        all_example_files.extend(section["example_files"])

    # Download Vue example files
    component_dir = DOCS_COMPONENT_DIR / component_name
    component_dir.mkdir(parents=True, exist_ok=True)

    examples_available = {}
    for example_file in all_example_files:
        file_slug = example_file_to_slug(example_file)
        vue_path = component_dir / f"{file_slug}.vue"

        if vue_path.exists():
            examples_available[file_slug] = True
            continue

        vue_url = f"{EXAMPLES_BASE}/{example_file}.vue"
        vue_content = fetch_text(vue_url)
        time.sleep(0.2)

        if vue_content is None:
            print(f"  WARNING: Could not fetch example {example_file}.vue")
            continue

        vue_path.write_text(vue_content, encoding="utf-8")
        examples_available[file_slug] = True

        # Create stub .py file
        py_path = component_dir / f"{file_slug}.py"
        if not py_path.exists():
            py_path.write_text(generate_stub_py(component_name, file_slug), encoding="utf-8")

    print(f"  Downloaded {len(examples_available)}/{len(all_example_files)} example files")

    # Generate RST
    rst_content = generate_rst(component_name, doc_url, parsed, examples_available)
    rst_path.write_text(rst_content, encoding="utf-8")
    print(f"  Created: {rst_path.name}")

    return True


def main():
    if not COMPONENTS_LIST.exists():
        raise FileNotFoundError(f"Components list not found at {COMPONENTS_LIST}. Run step 2 first.")

    # Ensure output directories exist
    DOCS_COMPONENT_DIR.mkdir(parents=True, exist_ok=True)

    # Parse components list (format: "v-alert https://vuetifyjs.com/en/components/alerts/")
    lines = COMPONENTS_LIST.read_text(encoding="utf-8").strip().split("\n")
    components = []
    for line in lines:
        parts = line.strip().split(maxsplit=1)
        if len(parts) == 2:
            components.append((parts[0], parts[1]))

    print(f"Processing {len(components)} components")
    print("=" * 60)

    success = 0
    failed = 0
    skipped = 0

    for i, (v_name, doc_url) in enumerate(components):
        component_name = kebab_to_camel(v_name)
        print(f"[{i + 1}/{len(components)}] {v_name} ({component_name})")

        rst_path = DOCS_COMPONENT_DIR / f"{component_name}.rst"
        if rst_path.exists():
            print("  Already exists, skipping")
            skipped += 1
            continue

        ok = process_component(v_name, doc_url)
        if ok:
            success += 1
        else:
            failed += 1

        time.sleep(0.5)  # Be polite to GitHub

    print()
    print("=" * 60)
    print(f"Done! Success: {success}, Failed: {failed}, Skipped: {skipped}")
    print(f"Total documentation pages: {success + skipped}")


if __name__ == "__main__":
    main()
