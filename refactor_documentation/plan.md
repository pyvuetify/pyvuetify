# Documentation Refactoring Plan

## Overview

Replace all existing component documentation with auto-generated documentation scraped from Vuetify v2, converted to RST with tabs (Vue + Python rendered via jupyter-execute).

Each step is an independent script in this folder. Run them sequentially.

---

## Step 1 — Move existing docs to legacy folder

**Script**: `1_move_existing_files.py`
**Status**: ✅ Written

Moves `docs/component/` → `docs/legacy_component/`.

---

## Step 2 — Extract list of components

**Script**: `2_find_components_to_document.py`
**Status**: ✅ Written

Parses `node_modules/vuetify/dist/json/web-types.json` (or fallback `generate/vuetify_api.json`).
Outputs `components_list.txt`: one line per component with `Name slug URL`.

---

## Step 3 — Scrape Vuetify documentation + generate RST + extract Vue examples

**Script**: `3_scrape_vuetify_docs.py`
**Status**: ✅ Written

For each component in `components_list.txt`:

- Fetches the **raw markdown** from GitHub (`vuetifyjs/vuetify` master branch):
  - MD source: `packages/docs/src/pages/en/components/{slug}.md`
  - Vue examples: `packages/docs/src/examples/{file}.vue`
- Strips out: Usage, API, Anatomy, Accessibility, "Ready for more?"
- Keeps: description, Guide sections, Additional Examples
- For each `<ExamplesExample file="..." />` reference, downloads the `.vue` file
- Applies text transformations:
  - Markdown → RST (bold, code, italic)
  - All links use anonymous `__` convention (avoids duplicate label warnings)
  - `v-xxx-yyy` mentions → `:py:class:\`~pyvuetify.XxxYyy\``
  - Links to `/components/` pages → `:doc:` internal links
  - Links to `/api/` pages → `:py:class:\`pyvuetify.ComponentName\``
- Creates:
  - `scraped/{slug}.md` — cached raw markdown
  - `docs/component/{Component}.rst` — full RST with tab-set structure (3 tabs)
  - `docs/component/{Component}/{slug}.vue` — Vue example files
  - `docs/component/{Component}/{slug}.py` — stub Python files (TODO: convert in step 4)
- Skips components whose RST file already exists (idempotent)

---

## Step 4 — Convert .vue files to .py (Vue → Python translation)

**Script**: `4_vue_to_python.py`
**Status**: ✅ Written

For each `.vue` file in `docs/component/<Component>/`, produces a `.py` equivalent.

Parses the `<template>` section using Python's `html.parser`, then recursively
converts the DOM tree to pyvuetify constructor calls.

**Conversion rules** (from https://ipyvuetify.readthedocs.io/en/latest/usage.html#summary):

| Vuetify               | pyvuetify                           |
| --------------------- | ----------------------------------- |
| `<v-list-tile .../>`  | `v.ListTile(...)`                   |
| `offset-y` (no value) | `offset_y=True`                     |
| `class="mr-3"`        | `class_='mr-3'`                     |
| `style="..."`         | `style_='...'`                      |
| `v-model="x"`         | `v_model='x'`                       |
| `:items="['a','b']"`  | `items=['a','b']`                   |
| `<v-btn>text</v-btn>` | `v.Btn(children=['text'])`          |
| `@click="fn"`         | `.on_event('click', fn)`            |
| `<div>...</div>`      | `v.Html(tag='div', children=[...])` |
| Kebab-case attrs      | snake_case attrs                    |

Output: `docs/component/<Component>/<section_slug>.py`

All files start with `import pyvuetify as v` and end with the root widget expression (no display() call needed — jupyter-execute renders the last expression).

---

## Step 5 — Regenerate index.rst

**Script**: `5_generate_index.py`
**Status**: ✅ Written

Scans `docs/component/` for available `.rst` files, then generates a categorized
`index.rst` with toctrees. Components not in any predefined category are placed under "Other".
New components from Vuetify labs are automatically included.

---

## Execution order

```
1_move_existing_files.py        # once, moves legacy docs
2_find_components_to_document.py # generates components_list.txt
3_scrape_vuetify_docs.py         # fetches MD + Vue from GitHub, generates RST + stubs
4_vue_to_python.py               # converts .vue files to .py (replaces stubs)
5_generate_index.py              # regenerates docs/component/index.rst
```

Steps are sequential. Step 3 is idempotent (skips existing files).

---

## Validation

After running all steps:

1. `nox -s docs-debug -- Alert` — check a single component builds without error
2. Check Sphinx logs for "duplicate label" warnings (should be none with `__` links)
3. Visually compare a generated page vs. the legacy version
4. Confirm jupyter-execute renders widgets (requires active kernel)

---

## Open decisions

- [x] Scraping method: GitHub raw markdown (resolved — using raw.githubusercontent.com)
- [ ] Scope: start with 3 components (Alert, Btn, Card) to validate pipeline, then scale
- [ ] How to handle components with sub-components (Card has CardTitle, CardText, etc.)
- [ ] How to handle examples that require reactive state (`v-model` bindings, event handlers)
