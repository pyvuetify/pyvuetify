"""HTTP fetching and Vuetify URL resolution utilities."""

import json
import re
import time
from pathlib import Path
from urllib.error import HTTPError
from urllib.request import Request, urlopen

ROOT = Path(__file__).parent.parent.parent
WEB_TYPES = ROOT / "node_modules" / "vuetify" / "dist" / "json" / "web-types.json"

GITHUB_RAW = "https://raw.githubusercontent.com/vuetifyjs/vuetify/master/packages/docs/src"
PAGES_BASE = f"{GITHUB_RAW}/pages/en/components"
EXAMPLES_BASE = f"{GITHUB_RAW}/examples"
COMPONENTS_BASE = "https://vuetifyjs.com/en/components/"

_HEADERS = {"User-Agent": "Mozilla/5.0 (pyvuetify-docs-builder)"}


# --- Core HTTP ---


def fetch_text(url: str) -> str | None:
    req = Request(url, headers=_HEADERS)
    try:
        with urlopen(req, timeout=15) as resp:
            return resp.read().decode("utf-8", errors="replace")
    except HTTPError as e:
        if e.code != 404:
            print(f"  HTTP {e.code}: {url}")
        return None
    except Exception as e:
        print(f"  Error: {url} ({e})")
        return None


def url_exists(url: str) -> bool:
    req = Request(url, headers=_HEADERS)
    try:
        with urlopen(req, timeout=10) as resp:
            return resp.status == 200
    except Exception:
        return False


# --- Vuetify-specific fetching ---


def fetch_markdown(slug: str) -> str | None:
    return fetch_text(f"{PAGES_BASE}/{slug}.md")


def fetch_vue_example(file_ref: str) -> str | None:
    return fetch_text(f"{EXAMPLES_BASE}/{file_ref}.vue")


# --- Slug resolution ---


def _candidate_slugs(name: str) -> list[str]:
    return [name + "s", name, name + "es"]


def resolve_component_slug(v_name: str) -> str | None:
    """Given a v-name (e.g. v-alert), resolve the documentation page slug.

    Tries candidate slugs (alerts, alert, alertes) against GitHub.
    Returns the slug (e.g. 'alerts') or None if no doc page exists.
    """
    without_v = v_name.removeprefix("v-")
    for slug in _candidate_slugs(without_v):
        if url_exists(f"{PAGES_BASE}/{slug}.md"):
            return slug
    return None


def resolve_doc_url(v_name: str) -> str | None:
    """Resolve the full Vuetify documentation URL for a component."""
    slug = resolve_component_slug(v_name)
    return f"{COMPONENTS_BASE}{slug}/" if slug else None


# --- Component discovery (from web-types.json) ---


def _camel_to_kebab(name: str) -> str:
    return re.sub(r"(?<!^)(?=[A-Z])", "-", name).lower()


def list_all_components() -> list[str]:
    """Return all v-names from web-types.json."""
    if not WEB_TYPES.exists():
        raise FileNotFoundError(f"web-types.json not found at {WEB_TYPES}. Run 'npm install' first.")
    data = json.loads(WEB_TYPES.read_text(encoding="utf-8"))
    return sorted(_camel_to_kebab(tag["name"]) for tag in data["contributions"]["html"]["tags"])


def discover_components() -> list[tuple[str, str]]:
    """Scan web-types.json and resolve documentation URLs from GitHub.

    Returns list of (v-name, doc_url) for components that have a doc page.
    """
    all_names = list_all_components()
    print(f"Found {len(all_names)} components in web-types.json")

    documented = []
    for i, v_name in enumerate(all_names):
        print(f"  [{i + 1}/{len(all_names)}] {v_name}...", end=" ", flush=True)
        slug = resolve_component_slug(v_name)
        if slug:
            print(f"-> {slug}")
            documented.append((v_name, f"{COMPONENTS_BASE}{slug}/"))
        else:
            print("no doc page")
        time.sleep(0.2)

    print(f"Resolved {len(documented)}/{len(all_names)} components with doc pages")
    return documented

    print(f"Resolved {len(documented)}/{len(all_names)} components with doc pages")
    return documented
