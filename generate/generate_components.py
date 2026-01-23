import json
import logging
import re
from pathlib import Path

from jinja2 import Environment, FileSystemLoader

from extension import TypeMapperExtension

# Setup logging
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

# create constant Path variables
HERE = Path(__file__).parent
ROOT = HERE.parent
API_JSON = ROOT / "node_modules" / "vuetify" / "dist" / "json" / "web-types.json"
OUTPUT_JS_DIR = ROOT / "js" / "component"
OUTPUT_PYTHON_DIR = ROOT / "pyvuetify" / "_component"


# compiled regex pattern for snake_case conversion
pattern = re.compile(r"(?<!^)(?=[A-Z])")

# Setup Jinja2 environment
jinja_env = Environment(
    loader=FileSystemLoader(HERE),
    extensions=["jinja2_strcase.StrcaseExtension", TypeMapperExtension],
)

# limit for deugging
limit = None

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

    # Read the JSON file for the complete API description
    # add the missing case adaptation of the names that will be used in the files
    if not API_JSON.exists():
        msg = f"API JSON file not found at {API_JSON}, please run 'npm install' first to install Vuetify."
        raise FileNotFoundError(msg)
    api_data = json.loads(API_JSON.read_text(encoding="utf-8"))["contributions"]["html"]["tags"]

    # Process each component
    for i, v_component in enumerate(api_data):

        # add the case adapted names to the api_data

        # create the vue component file from template
        vue_file = OUTPUT_JS_DIR / f"{v_component['name']}.vue"
        vue_template = jinja_env.get_template("vue_component.vue.jinja")
        vue_content = vue_template.render(v_component=v_component)
        vue_file.write_text(vue_content, encoding="utf-8")
        logger.info(f"Created: {v_component['name']}.vue")

        # create the js component file from template
        js_file = OUTPUT_JS_DIR / f"{v_component['name']}.js"
        js_template = jinja_env.get_template("js_component.js.jinja")
        js_content = js_template.render(v_component=v_component)
        js_file.write_text(js_content, encoding="utf-8")
        logger.info(f"Created: {v_component['name']}.js")

        # Generate Python file from template
        python_file = OUTPUT_PYTHON_DIR / f"{v_component['name'].removeprefix('V')}.py"
        python_template = jinja_env.get_template("python_component.py.jinja")
        python_content = python_template.render(v_component=v_component)
        python_file.write_text(python_content, encoding="utf-8")
        logger.info(f"Created: {v_component['name'].removeprefix('V')}.py")

        if i == limit:
            break

    # create an init file for each component of the package
    init_file = OUTPUT_PYTHON_DIR / "__init__.py"
    module_names = []
    for i, v_component in enumerate(api_data):
        module_names.append(v_component["name"].removeprefix("V"))
        if i == limit:
            break
    init_template = jinja_env.get_template("python_init.py.jinja")
    init_content = init_template.render(module_names=module_names)
    init_file.write_text(init_content, encoding="utf-8")
    logger.info(f"Created: __init__.py")

generate_component_files()
logger.info("\nComponent files generation completed!")
