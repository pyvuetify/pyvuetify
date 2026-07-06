"""Scrape Vuetify documentation and generate pyvuetify component docs.

Usage:
    python docs/_script/scrape.py v-alert             # single component (primary use)
    python docs/_script/scrape.py v-btn v-card        # multiple components
    python docs/_script/scrape.py --all               # all components from web-types.json
    python docs/_script/scrape.py --index             # only regenerate index.rst
    python docs/_script/scrape.py --force v-alert     # overwrite existing .rst without asking
"""

import argparse
import sys
from pathlib import Path

# Ensure the script directory is importable
sys.path.insert(0, str(Path(__file__).parent))

from _convert import vue_to_python  # noqa: E402
from _fetch import discover_components, fetch_markdown, fetch_vue_example, resolve_component_slug  # noqa: E402
from _index import write_index  # noqa: E402
from _parse import ParsedComponent, example_file_to_slug, generate_rst, parse_markdown  # noqa: E402

HERE = Path(__file__).parent
ROOT = HERE.parent.parent
DOCS_COMPONENT_DIR = ROOT / "docs" / "component"


# --- Helpers ---


def _kebab_to_camel(name: str) -> str:
    return "".join(w.capitalize() for w in name.removeprefix("v-").split("-"))


def _confirm_overwrite(path: Path) -> bool:
    answer = input(f"  {path.name} already exists. Overwrite? [y/N] ").strip().lower()
    return answer in ("y", "yes")


# --- Core processing ---


def process_component(v_name: str, force: bool = False) -> bool:
    """Fetch, parse, convert, and generate docs for one component. Returns True on success."""
    component_name = _kebab_to_camel(v_name)
    component_dir = DOCS_COMPONENT_DIR / component_name
    rst_path = DOCS_COMPONENT_DIR / f"{component_name}.rst"

    # Check existing
    if rst_path.exists() and not force:
        if not _confirm_overwrite(rst_path):
            print(f"  {component_name}: skipped")
            return True

    # Resolve slug from GitHub
    print(f"  {component_name}: resolving doc page...", end=" ", flush=True)
    slug = resolve_component_slug(v_name)
    if slug is None:
        print("FAILED (no doc page found)")
        return False
    doc_url = f"https://vuetifyjs.com/en/components/{slug}/"
    print(f"-> {slug}")

    # Fetch markdown
    print(f"  {component_name}: fetching {slug}.md ...", end=" ", flush=True)
    md_content = fetch_markdown(slug)
    if md_content is None:
        print("FAILED")
        return False
    print("OK")

    # Parse
    parsed: ParsedComponent = parse_markdown(md_content)
    print(f"  {component_name}: {len(parsed.sections)} sections found")

    # Collect example references
    all_example_files: list[str] = []
    for section in parsed.sections:
        all_example_files.extend(section.example_files)

    # Fetch and convert Vue examples
    component_dir.mkdir(parents=True, exist_ok=True)
    available_examples: set[str] = set()

    for file_ref in all_example_files:
        file_slug = example_file_to_slug(file_ref)
        vue_path = component_dir / f"{file_slug}.vue"
        py_path = component_dir / f"{file_slug}.py"

        # Fetch Vue source
        vue_content = fetch_vue_example(file_ref)
        if vue_content is None:
            continue

        vue_path.write_text(vue_content, encoding="utf-8")

        # Convert to Python
        py_content = vue_to_python(vue_content)
        py_path.write_text(py_content, encoding="utf-8")
        available_examples.add(file_slug)

    print(f"  {component_name}: {len(available_examples)}/{len(all_example_files)} examples converted")

    # Generate RST
    rst_content = generate_rst(component_name, doc_url, parsed, available_examples)
    rst_path.write_text(rst_content, encoding="utf-8")
    print(f"  {component_name}: {rst_path.name} written")

    return True


################################################################################
## Main CLI                                                                   ##
################################################################################

parser = argparse.ArgumentParser(description="Scrape Vuetify docs and generate pyvuetify component pages.")
parser.add_argument("components", nargs="*", help="Component names in v-kebab-case (e.g. v-alert v-btn)")
parser.add_argument("--all", action="store_true", help="Process all components from web-types.json (slow)")
parser.add_argument("--index", action="store_true", help="Only regenerate index.rst")
parser.add_argument("--force", action="store_true", help="Overwrite existing .rst without asking")
args = parser.parse_args()

# --index: regenerate index only
if args.index:
    write_index()
    sys.exit(0)

# Determine which components to process
if args.all:
    documented = discover_components()
    targets = [v_name for v_name, _ in documented]
elif args.components:
    targets = args.components
else:
    parser.print_help()
    sys.exit(1)

# Process
DOCS_COMPONENT_DIR.mkdir(parents=True, exist_ok=True)
success, failed = 0, 0

for v_name in targets:
    ok = process_component(v_name, force=args.force)
    success += ok
    failed += not ok

print(f"\nDone: {success} OK, {failed} failed")

# Always update index after processing
write_index()
