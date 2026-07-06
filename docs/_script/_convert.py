"""Convert Vue template files to pyvuetify Python code (double-quote output)."""

import ast
import re
from html.parser import HTMLParser

# --- Constants ---

RESERVED_ATTRS = {"class", "style", "for", "open"}
SKIP_TAGS = {"br", "script", "style"}
VOID_ELEMENTS = {"br", "hr", "img", "input", "link", "meta", "area", "base", "col", "embed", "source", "track", "wbr"}


# --- Helpers ---


def _kebab_to_camel(name: str) -> str:
    return "".join(w.capitalize() for w in name.removeprefix("v-").split("-"))


def _kebab_to_snake(name: str) -> str:
    return name.replace("-", "_")


def _attr_name(name: str) -> str:
    snake = _kebab_to_snake(name)
    return snake + "_" if snake in RESERVED_ATTRS else snake


def _dquote(s: str) -> str:
    """Wrap a string in double quotes, escaping internal double quotes."""
    escaped = s.replace("\\", "\\\\").replace('"', '\\"')
    return f'"{escaped}"'


def _dquote_wrap(s: str, indent: int, prefix_len: int) -> str:
    """Wrap a string in double quotes, splitting into multiple lines if too long.

    prefix_len accounts for `kwarg_name=` or list position before the string.
    Total line length target: 120 chars.
    """
    escaped = s.replace("\\", "\\\\").replace('"', '\\"')
    single = f'"{escaped}"'
    total_indent = 4 * indent
    # Check if it fits on one line
    if total_indent + prefix_len + len(single) <= 120:
        return single

    # Split into chunks that fit within (120 - indent - 4 for continuation indent)
    max_chunk = 120 - total_indent - 4 - 2  # 2 for quotes
    if max_chunk < 20:
        max_chunk = 60  # fallback for deeply nested code
    chunks = [escaped[i : i + max_chunk] for i in range(0, len(escaped), max_chunk)]
    if len(chunks) == 1:
        return single

    # Multi-line parenthesized string
    cont_indent = "    " * indent + "    "
    parts = [f'"{chunk}"' for chunk in chunks]
    inner = f"\n{cont_indent}".join(parts)
    return f"(\n{cont_indent}{inner}\n{'    ' * indent})"


def _try_parse_value(value: str) -> str:
    """Interpret a bound (:attr) value as Python. Returns Python source string."""
    value = value.strip()
    if value == "true":
        return "True"
    if value == "false":
        return "False"
    if value in ("null", "undefined"):
        return "None"

    # Try as Python literal
    try:
        ast.literal_eval(value)
        return value
    except (ValueError, SyntaxError):
        pass

    # Try with JS boolean replacements
    converted = value.replace("true", "True").replace("false", "False").replace("null", "None")
    try:
        ast.literal_eval(converted)
        return converted
    except (ValueError, SyntaxError):
        pass

    # Cannot parse — wrap as string with JS marker comment
    return f"{_dquote(value)}  # JS expression, needs manual conversion"


# --- Template parser ---


class VueTemplateParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = None
        self.stack: list[dict] = []

    def handle_starttag(self, tag, attrs):
        node = {"tag": tag, "attrs": dict(attrs), "children": []}
        if self.stack:
            self.stack[-1]["children"].append(node)
        else:
            self.root = node
        if tag not in VOID_ELEMENTS:
            self.stack.append(node)

    def handle_endtag(self, tag):
        while self.stack and self.stack[-1]["tag"] != tag:
            self.stack.pop()
        if self.stack:
            self.stack.pop()

    def handle_startendtag(self, tag, attrs):
        node = {"tag": tag, "attrs": dict(attrs), "children": []}
        if self.stack:
            self.stack[-1]["children"].append(node)
        elif self.root is None:
            self.root = node

    def handle_data(self, data):
        text = data.strip()
        if text and self.stack:
            self.stack[-1]["children"].append(text)


# --- Code generation ---


def _node_to_python(node, indent: int = 0) -> str:
    """Recursively convert a parsed node to pyvuetify Python source."""
    if isinstance(node, str):
        text = " ".join(node.split())
        return _dquote_wrap(text, indent, 0) if text else ""

    tag = node["tag"]
    if tag in SKIP_TAGS:
        return ""

    # Determine class name
    if tag.startswith("v-"):
        class_name = f"v.{_kebab_to_camel(tag)}"
    else:
        class_name = "v.Html"

    kwargs: list[str] = []

    # Html tag= kwarg
    if not tag.startswith("v-"):
        kwargs.append(f"tag={_dquote(tag)}")

    # Process attributes
    for attr_name, attr_value in node["attrs"].items():
        # Skip event handlers
        if attr_name.startswith("@") or attr_name.startswith("v-on:"):
            continue
        # v-model
        if attr_name == "v-model" or attr_name.startswith("v-model:"):
            py_name = attr_name.replace("-", "_").replace(":", "_")
            kwargs.append(f"{py_name}={_dquote(attr_value)}")
            continue
        # Skip structural directives
        if attr_name.startswith("v-"):
            continue

        # Bound vs static attribute
        is_bound = False
        if attr_name.startswith(":"):
            attr_name = attr_name[1:]
            is_bound = True
        elif attr_name.startswith("v-bind:"):
            attr_name = attr_name[7:]
            is_bound = True

        py_name = _attr_name(attr_name)

        if is_bound:
            kwargs.append(f"{py_name}={_try_parse_value(attr_value)}")
        elif attr_value is None:
            kwargs.append(f"{py_name}=True")
        else:
            kwargs.append(f"{py_name}={_dquote_wrap(attr_value, indent + 1, len(py_name) + 1)}")

    # Process children
    child_exprs: list[str] = []
    for child in node["children"]:
        if isinstance(child, str):
            text = " ".join(child.split()).strip()
            if text:
                child_exprs.append(_dquote_wrap(text, indent + 1, 0))
        elif child["tag"] not in SKIP_TAGS:
            code = _node_to_python(child, indent + 1)
            if code:
                child_exprs.append(code)

    if child_exprs:
        if len(child_exprs) == 1 and child_exprs[0].startswith('"') and len(child_exprs[0]) < 80:
            kwargs.append(f"children=[{child_exprs[0]}]")
        else:
            inner = "    " * (indent + 1)
            items = f",\n{inner}".join(child_exprs)
            kwargs.append(f"children=[\n{inner}{items},\n{'    ' * indent}]")

    # Format output
    if not kwargs:
        return f"{class_name}()"

    base = "    " * indent
    inner = "    " * (indent + 1)

    if len(kwargs) == 1 and len(kwargs[0]) < 60 and "\n" not in kwargs[0]:
        return f"{class_name}({kwargs[0]})"

    kwargs_str = f",\n{inner}".join(kwargs)
    return f"{class_name}(\n{inner}{kwargs_str},\n{base})"


# --- Public API ---


def vue_to_python(vue_content: str) -> str:
    """Convert a .vue file to a complete pyvuetify .py file (double-quote strings)."""
    # Extract <template> content
    match = re.search(r"<template>(.*?)</template>", vue_content, re.DOTALL)
    template_html = match.group(1).strip() if match else vue_content.strip()

    # Parse
    parser = VueTemplateParser()
    try:
        parser.feed(template_html)
    except Exception as e:
        return f"import pyvuetify as v\n\n# ERROR: Could not parse template: {e}\n# v.Container()\n"

    if parser.root is None:
        return "import pyvuetify as v\n\n# ERROR: Empty template\n# v.Container()\n"

    # Generate
    root_code = _node_to_python(parser.root, indent=0)
    return f"import pyvuetify as v\n\n{root_code}\n"
