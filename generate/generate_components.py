import json
import logging
import re
from pathlib import Path

from jinja2 import Environment, FileSystemLoader

# Setup logging
logger = logging.getLogger(__name__)

# create constant Path variables
HERE = Path(__file__).parent
API_JSON = HERE / "vuetify_api.json"
OUTPUT_JS_DIR = HERE.parent / "js" / "component"
OUTPUT_PYTHON_DIR = HERE.parent / "pyvuetify"

# compiled regex pattern for snake_case conversion
pattern = re.compile(r"(?<!^)(?=[A-Z])")

# Setup Jinja2 environment
jinja_env = Environment(loader=FileSystemLoader(HERE))


def to_camel_case(s: str) -> str:
    """Convert a component name from kebab-case to CamelCase."""
    return "".join(w.capitalize() for w in s.removeprefix("v-").split("-"))


def to_snake_case(s: str) -> str:
    """Convert a string from camelCase to snake_case."""
    return "".join(["_" + c.lower() if c.isupper() else c for c in s]).lstrip("_")


def generate_component_files():
    """Generate the source files for all the vuetify components."""

    # Ensure output directory exists
    OUTPUT_JS_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_PYTHON_DIR.mkdir(parents=True, exist_ok=True)

    # Read the JSON file
    api_data = json.loads(API_JSON.read_text(encoding="utf-8"))

    # Process each component
    for i, (component_name, component_data) in enumerate(api_data.items()):

        # create the files
        camel_case_name = to_camel_case(component_name)
        vue_file = OUTPUT_JS_DIR / f"{camel_case_name}.vue"
        vue_file.write_text("", encoding="utf-8")
        logger.info(f"Created: {camel_case_name}.vue")

        js_file = OUTPUT_JS_DIR / f"{camel_case_name}.js"
        js_file.write_text("", encoding="utf-8")
        logger.info(f"Created: {camel_case_name}.js")

        # Generate Python file from template
        python_file = OUTPUT_PYTHON_DIR / f"{camel_case_name}.py"
        python_template = jinja_env.get_template("python_component.py.jinja")
        props = component_data.get("props", [])
        props = [{"name": to_snake_case(p["name"]), "doc": p.get("doc", "")} for p in props]
        python_content = python_template.render(
            class_name=camel_case_name,
            esm_filename=f"{camel_case_name}.mjs",
            css_filename=f"{camel_case_name}.css",
            props=props,
            doc=component_data.get("doc", ""),
        )
        python_file.write_text(python_content, encoding="utf-8")
        logger.info(f"Created: {camel_case_name}.py")

        if i == 10:
            break  # Limit to first 10 components for demonstration


if __name__ == "__main__":
    generate_component_files()
    print("\nComponent files generation completed!")
