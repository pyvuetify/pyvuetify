"""Step 4: Convert .vue template files to .py pyvuetify equivalents.

For each .vue file in docs/component/<Component>/:
1. Parse the <template> section
2. Convert Vue/HTML elements to pyvuetify Python calls
3. Write the .py file (replacing the stub from step 3)

Conversion rules (from ipyvuetify usage docs):
- <v-xxx-yyy .../> -> v.XxxYyy(...)
- kebab-case attrs -> snake_case
- boolean attrs (no value) -> attr=True
- class="..." -> class_="..."  (also: style, for, open)
- :attr="expr" -> attr=<eval expr>
- v-model="x" -> v_model="x"
- @event="fn" -> # comment (events need manual handling)
- <div>...</div> -> v.Html(tag='div', children=[...])
- text content -> children=["text"]
- nested elements -> children=[v.Xxx(...)]
"""

import ast
import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).parent.parent
DOCS_COMPONENT_DIR = ROOT / "docs" / "component"

# Attributes that conflict with Python/ipywidgets keywords
RESERVED_ATTRS = {"class", "style", "for", "open"}

# Tags to skip entirely (they don't render meaningful content)
SKIP_TAGS = {"br", "script", "style"}

# Self-closing void elements
VOID_ELEMENTS = {
    "br",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "area",
    "base",
    "col",
    "embed",
    "source",
    "track",
    "wbr",
}


def kebab_to_camel(name: str) -> str:
    """v-alert-title -> AlertTitle, v-btn -> Btn"""
    return "".join(w.capitalize() for w in name.removeprefix("v-").split("-"))


def kebab_to_snake(name: str) -> str:
    """offset-y -> offset_y, append-icon -> append_icon"""
    return name.replace("-", "_")


def attr_to_python_name(name: str) -> str:
    """Convert an attribute name to its Python equivalent."""
    snake = kebab_to_snake(name)
    if snake in RESERVED_ATTRS:
        return snake + "_"
    return snake


def try_parse_value(value: str) -> str:
    """Try to interpret a bound (:attr) value as a Python literal."""
    # Common JS -> Python mappings
    value = value.strip()
    if value == "true":
        return "True"
    if value == "false":
        return "False"
    if value == "null" or value == "undefined":
        return "None"

    # Try to parse as Python literal directly
    try:
        ast.literal_eval(value)
        return value
    except (ValueError, SyntaxError):
        pass

    # JS array/object notation is often valid Python already
    # Replace JS booleans in arrays/objects
    converted = value.replace("true", "True").replace("false", "False").replace("null", "None")
    try:
        ast.literal_eval(converted)
        return converted
    except (ValueError, SyntaxError):
        pass

    # Can't parse — return as string with comment
    return f"'{value}'  # JS expression, needs manual conversion"


class VueTemplateParser(HTMLParser):
    """Parse a Vue template and build a tree of elements."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = None
        self.stack = []  # stack of current parent nodes
        self.current = None

    def handle_starttag(self, tag, attrs):
        node = {"tag": tag, "attrs": dict(attrs), "children": []}
        if self.stack:
            self.stack[-1]["children"].append(node)
        else:
            self.root = node
        if tag not in VOID_ELEMENTS:
            self.stack.append(node)

    def handle_endtag(self, tag):
        # Pop until we find the matching tag (handles some malformed HTML)
        while self.stack and self.stack[-1]["tag"] != tag:
            self.stack.pop()
        if self.stack:
            self.stack.pop()

    def handle_startendtag(self, tag, attrs):
        """Handle self-closing tags like <br/> or <v-icon />"""
        node = {"tag": tag, "attrs": dict(attrs), "children": []}
        if self.stack:
            self.stack[-1]["children"].append(node)
        elif self.root is None:
            self.root = node

    def handle_data(self, data):
        text = data.strip()
        if text and self.stack:
            self.stack[-1]["children"].append(text)


def extract_template(vue_content: str) -> str:
    """Extract content between <template> and </template> tags."""
    match = re.search(r"<template>(.*?)</template>", vue_content, re.DOTALL)
    if match:
        return match.group(1).strip()
    return vue_content.strip()


def node_to_python(node, indent=0) -> str:
    """Convert a parsed node tree to pyvuetify Python code."""
    if isinstance(node, str):
        # Text node
        text = " ".join(node.split())  # normalize whitespace
        if not text:
            return ""
        return repr(text)

    tag = node["tag"]
    attrs = node["attrs"]
    children = node["children"]

    # Skip certain tags
    if tag in SKIP_TAGS:
        return ""

    # Determine widget class
    if tag.startswith("v-"):
        class_name = f"v.{kebab_to_camel(tag)}"
    else:
        class_name = "v.Html"

    # Build kwargs
    kwargs = []

    # For Html widget, add the tag
    if not tag.startswith("v-"):
        kwargs.append(f"tag='{tag}'")

    # Process attributes
    for attr_name, attr_value in attrs.items():
        # Skip event handlers (@ prefix) — add as comment
        if attr_name.startswith("@") or attr_name.startswith("v-on:"):
            continue

        # Handle v-model
        if attr_name == "v-model" or attr_name.startswith("v-model:"):
            py_name = attr_name.replace("-", "_").replace(":", "_")
            kwargs.append(f"{py_name}='{attr_value}'")
            continue

        # Handle v-if, v-show, v-for etc. — skip (too complex for auto-conversion)
        if attr_name.startswith("v-"):
            continue

        # Handle bound attributes (:attr or v-bind:attr)
        is_bound = False
        if attr_name.startswith(":"):
            attr_name = attr_name[1:]
            is_bound = True
        elif attr_name.startswith("v-bind:"):
            attr_name = attr_name[7:]
            is_bound = True

        py_name = attr_to_python_name(attr_name)

        if is_bound:
            py_value = try_parse_value(attr_value)
            kwargs.append(f"{py_name}={py_value}")
        elif attr_value is None:
            # Boolean attribute (no value)
            kwargs.append(f"{py_name}=True")
        else:
            # String attribute
            # Use repr to properly escape quotes
            kwargs.append(f"{py_name}={repr(attr_value)}")

    # Process children
    child_exprs = []
    for child in children:
        if isinstance(child, str):
            text = " ".join(child.split()).strip()
            if text:
                child_exprs.append(repr(text))
        elif child["tag"] not in SKIP_TAGS:
            child_code = node_to_python(child, indent + 1)
            if child_code:
                child_exprs.append(child_code)

    if child_exprs:
        if len(child_exprs) == 1 and child_exprs[0].startswith("'") and len(child_exprs[0]) < 80:
            # Single short text child — inline
            kwargs.append(f"children=[{child_exprs[0]}]")
        else:
            # Multi-line children
            children_indent = "    " * (indent + 1)
            children_items = f",\n{children_indent}".join(child_exprs)
            kwargs.append(f"children=[\n{children_indent}{children_items},\n{'    ' * indent}]")

    # Format the constructor call
    if not kwargs:
        return f"{class_name}()"

    base_indent = "    " * indent
    inner_indent = "    " * (indent + 1)

    if len(kwargs) == 1 and len(kwargs[0]) < 60 and "\n" not in kwargs[0]:
        return f"{class_name}({kwargs[0]})"

    kwargs_str = f",\n{inner_indent}".join(kwargs)
    return f"{class_name}(\n{inner_indent}{kwargs_str},\n{base_indent})"


def vue_to_python(vue_content: str) -> str:
    """Convert a .vue file content to pyvuetify Python code."""
    template_html = extract_template(vue_content)

    # Parse the template
    parser = VueTemplateParser()
    try:
        parser.feed(template_html)
    except Exception as e:
        return f"import pyvuetify as v\n\n# ERROR: Could not parse template: {e}\n# v.Container()\n"

    if parser.root is None:
        return "import pyvuetify as v\n\n# ERROR: Empty template\n# v.Container()\n"

    # Generate Python code
    root_code = node_to_python(parser.root, indent=0)

    return f"import pyvuetify as v\n\n{root_code}\n"


def process_file(vue_path: Path) -> bool:
    """Convert a single .vue file to .py. Returns True if successful."""
    py_path = vue_path.with_suffix(".py")

    vue_content = vue_path.read_text(encoding="utf-8")
    py_content = vue_to_python(vue_content)

    py_path.write_text(py_content, encoding="utf-8")
    return "ERROR" not in py_content


def main():
    if not DOCS_COMPONENT_DIR.exists():
        raise FileNotFoundError(f"Component docs directory not found at {DOCS_COMPONENT_DIR}. Run step 3 first.")

    # Find all .vue files in component subdirectories
    vue_files = sorted(DOCS_COMPONENT_DIR.glob("*/*.vue"))

    if not vue_files:
        print("No .vue files found. Run step 3 first.")
        return

    print(f"Converting {len(vue_files)} .vue files to .py")
    print("=" * 60)

    success = 0
    errors = 0

    for vue_path in vue_files:
        rel = vue_path.relative_to(DOCS_COMPONENT_DIR)
        print(f"  {rel}", end=" ")

        ok = process_file(vue_path)
        if ok:
            print("✓")
            success += 1
        else:
            print("⚠ (parse error, needs manual fix)")
            errors += 1

    print()
    print("=" * 60)
    print(f"Done! Converted: {success}, Errors: {errors}")
    if errors:
        print("Files with errors need manual conversion (search for '# ERROR' in .py files)")


if __name__ == "__main__":
    main()
