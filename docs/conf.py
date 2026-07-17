"""Configuration file for the Sphinx documentation builder.

This file only contains a selection of the most common options. For a full
list see the documentation:
https://www.sphinx-doc.org/en/master/usage/configuration.html
"""

import os
import sys
from datetime import datetime
from pathlib import Path

# add . to sys to import local extensions
sys.path.append(str(Path(".").resolve()))

# -- Project information -----------------------------------------------------

project = "pyvuetify"
copyright = f"2019-{datetime.now().year}, Mario Buikhuizen"
author = "Mario Buikhuizen"
release = "1.11.3"

# -- General configuration ---------------------------------------------------

extensions = [
    "sphinx.ext.napoleon",
    "sphinx.ext.autosectionlabel",
    "sphinx.ext.todo",
    "sphinx.ext.autodoc",
    "jupyter_sphinx",
    "sphinx_design",
    "autoapi.extension",
    "sphinx_copybutton",
    "sphinx_last_updated_by_git",
    "_extension.api_admonition",
    "_extension.aknowledgement",
    "_extension.html_role",
]
templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

# Fast debug mode: set DOCS_ONLY env var to limit the build to specific components.
# Example: DOCS_ONLY=Alert or DOCS_ONLY=Alert,Btn
# This skips all other component pages and disables autoapi to speed up builds.
_docs_only = os.environ.get("DOCS_ONLY", "").strip()
if _docs_only:
    _allowed = {c.strip() for c in _docs_only.split(",")}
    _component_dir = Path(__file__).parent / "component"
    for rst in _component_dir.glob("*.rst"):
        name = rst.stem
        if name == "index":
            continue
        if name not in _allowed:
            exclude_patterns.append(f"component/{name}.rst")
            exclude_patterns.append(f"component/{name}/**")
    # Disable autoapi in debug mode to save time
    # extensions = [e for e in extensions if e != "autoapi.extension"]
    # exclude_patterns.append("autoapi/**")
    # exclude_patterns.append("start/**")
autosectionlabel_prefix_document = True
todo_include_todos = True
todo_emit_warnings = True

# jupyter_sphinx execution settings.
# store_widget_state=False: nbclient would otherwise record every comm_open AND
# comm_msg message into notebook.metadata.widgets.  For pyvuetify (anywidget)
# each instance carries ~8 MB of CSS+JS, bloating the cached notebook to
# hundreds of MB.  Widgets produce widget-view+json outputs that require a live
# kernel anyway — they cannot render in static HTML regardless.
jupyter_execute_kwargs = {"store_widget_state": False}

# -- Options for HTML output -------------------------------------------------

html_theme = "pydata_sphinx_theme"
html_static_path = ["_static"]
html_last_updated_fmt = None
html_favicon = "_static/logo.png"
html_logo = "_static/logo.png"
html_css_files = [
    "custom.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
]

# -- Theme configuration -----------------------------------------------------

html_theme_options = {
    "logo": {"text": "pyvuetify"},
    "use_edit_page_button": True,
    "show_prev_next": True,
    "navbar_start": ["navbar-logo"],
    "article_footer_items": ["last-updated"],
    "secondary_sidebar_items": ["page-toc", "edit-this-page"],
    "announcement": "https://raw.githubusercontent.com/pyvuetify/pyvuetify/refs/heads/main/docs/_static/banner.html",
    "icon_links": [
        {
            "name": "GitHub",
            "url": "https://github.com/pyvuetify/pyvuetify",
            "icon": "fa-brands fa-github",
        },
        {
            "name": "Pypi",
            "url": "https://pypi.org/project/pyvuetify/",
            "icon": "fa-brands fa-python",
        },
    ],
}
html_context = {
    "github_user": "pyvuetify",
    "github_repo": "pyvuetify",
    "github_version": "main",
    "doc_path": "docs",
}

# -- Options for autosummary/autodoc output ------------------------------------
autodoc_typehints = "description"
autoapi_dirs = ["../pyvuetify"]
autoapi_member_order = "groupwise"
autoapi_own_page_level = "class"
autoapi_template_dir = "_templates"
autoapi_keep_files = True
autoapi_options = [
    "members",
    "undoc-members",
    "show-module-summary",
    "imported-members",
]
autoapi_python_class_content = "init"


def skip_submodules(app, what, name, obj, skip, options):
    """Ignore the modules and packages that are private

    Only necessary for those that are not using a leading underscore
    """
    privates = [
        ("module", "pyvuetify.Html"),
        ("module", "pyvuetify.VuetifyTemplate"),
        ("package", "pyvuetify.generated"),
    ]

    # return `skip` when nothing is catch to keep skipping the private members
    return any([what == t and name == m for t, m in privates]) or skip


def setup(sphinx):
    if "autoapi.extension" in extensions:
        sphinx.connect("autoapi-skip-member", skip_submodules)
