"""Step 2: Find which components have their own Vuetify documentation page.

Strategy:
1. Read ALL components from web-types.json (including labs)
2. For each component, derive candidate slugs for the documentation page
3. Check if the markdown source exists on GitHub at:
   https://raw.githubusercontent.com/vuetifyjs/vuetify/master/packages/docs/src/pages/en/components/{slug}.md
4. If found, the component has its own doc page — add to list
5. Write the final list to components_list.txt

Output format (one per line):
    v-alert https://vuetifyjs.com/en/components/alerts/
"""

import json
import re
import time
from pathlib import Path
from urllib.error import HTTPError
from urllib.request import Request, urlopen

ROOT = Path(__file__).parent.parent
HERE = Path(__file__).parent
OUTPUT = HERE / "components_list.txt"

# The web-types JSON is installed by npm (from vuetify package)
WEB_TYPES = ROOT / "node_modules" / "vuetify" / "dist" / "json" / "web-types.json"

# GitHub raw URL for Vuetify docs source
GITHUB_RAW_BASE = "https://raw.githubusercontent.com/vuetifyjs/vuetify/master/packages/docs/src/pages/en/components"

# Base URLs
API_BASE = "https://vuetifyjs.com/en/api/"
COMPONENTS_BASE = "https://vuetifyjs.com/en/components/"


def camel_to_kebab(name: str) -> str:
    """VAlertTitle -> v-alert-title"""
    # Insert hyphen before each uppercase letter (except the first V)
    s = re.sub(r"(?<!^)(?=[A-Z])", "-", name).lower()
    return s


def url_exists(url: str) -> bool:
    """Check if a URL exists (HTTP HEAD/GET returning 200)."""
    req = Request(url, headers={"User-Agent": "Mozilla/5.0 (pyvuetify-docs-builder)"})
    try:
        with urlopen(req, timeout=10) as resp:
            return resp.status == 200
    except HTTPError:
        return False
    except Exception:
        return False


def candidate_slugs(kebab_name: str) -> list[str]:
    """Generate candidate documentation slugs for a component name.

    For 'alert' -> try: alerts, alert
    For 'bottom-navigation' -> try: bottom-navigation, bottom-navigations
    For 'btn' -> try: btns, btn, buttons
    """
    candidates = []
    # Most common: name + 's'
    candidates.append(kebab_name + "s")
    # Direct match
    candidates.append(kebab_name)
    # name + 'es' (for words ending in consonant clusters)
    candidates.append(kebab_name + "es")
    return candidates


def find_doc_slug(kebab_without_v: str) -> str | None:
    """Try candidate slugs on GitHub to find the documentation markdown file."""
    for slug in candidate_slugs(kebab_without_v):
        url = f"{GITHUB_RAW_BASE}/{slug}.md"
        if url_exists(url):
            return slug
    return None


def main():
    # Load web-types
    if not WEB_TYPES.exists():
        raise FileNotFoundError(f"web-types.json not found at {WEB_TYPES}. Run 'npm install' first.")

    data = json.loads(WEB_TYPES.read_text(encoding="utf-8"))
    all_components = [tag["name"] for tag in data["contributions"]["html"]["tags"]]

    print(f"Found {len(all_components)} total components in web-types.json")
    print("=" * 60)

    documented = []
    skipped = []

    for i, comp_name in enumerate(sorted(all_components)):
        kebab_name = camel_to_kebab(comp_name)  # e.g. "v-alert"
        kebab_without_v = kebab_name.removeprefix("v-")  # e.g. "alert"

        print(
            f"[{i + 1}/{len(all_components)}] Checking {kebab_name}...",
            end=" ",
            flush=True,
        )

        slug = find_doc_slug(kebab_without_v)
        if slug is None:
            print("no doc page")
            skipped.append(kebab_name)
            time.sleep(0.2)
            continue

        doc_url = f"{COMPONENTS_BASE}{slug}/"
        print(f"-> {slug}")
        documented.append((kebab_name, doc_url))
        time.sleep(0.2)  # Be polite to GitHub

    # Summary
    print()
    print("=" * 60)
    print(f"Total components in web-types.json: {len(all_components)}")
    print(f"Components with documentation page: {len(documented)}")
    print(f"Skipped (no doc page found):        {len(skipped)}")
    print()

    if skipped:
        print("Components without documentation page (sub-components):")
        for name in skipped:
            print(f"  {name}")
        print()

    # Write output
    lines = [f"{kebab_name} {url}" for kebab_name, url in documented]
    OUTPUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Written {len(documented)} components to {OUTPUT}")


if __name__ == "__main__":
    main()
