"""Configuration file for the Sphinx documentation builder.

This file only contains a selection of the most common options. For a full
list see the documentation:
https://www.sphinx-doc.org/en/master/usage/configuration.html
"""
import sys
from datetime import datetime
from pathlib import Path

# add . to sys to import local extensions
sys.path.append(str(Path(".").resolve()))

# -- Project information -----------------------------------------------------

project = "ipyvuetify"
copyright = f"2019-{datetime.now().year}, Mario Buikhuizen"
author = "Mario Buikhuizen"
release = "1.11.3"

# -- General configuration ---------------------------------------------------

extensions = [
    "sphinx.ext.napoleon",
    "sphinx.ext.autosectionlabel",
    "sphinx.ext.todo",
    "jupyter_sphinx",
    "sphinx_design",
    "autoapi.extension",
    "sphinx_copybutton",
    "sphinx_last_updated_by_git",
    "_extension.api_admonition",
    "_extension.aknowledgement",
]
templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]
autosectionlabel_prefix_document = True

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
    "logo": {"text": "IPYVUETIFY"},
    "use_edit_page_button": True,
    "show_prev_next": True,
    "navbar_start": ["navbar-logo"],
    "article_footer_items": ["last-updated"],
    "icon_links": [
        {
            "name": "GitHub",
            "url": "https://github.com/widgetti/ipyvuetify",
            "icon": "fa-brands fa-github",
        },
        {
            "name": "Pypi",
            "url": "https://pypi.org/project/ipyvuetify/",
            "icon": "fa-brands fa-python",
        },
    ],
}
html_context = {
    "github_user": "widgetti",
    "github_repo": "ipyvuetify",
    "github_version": "master",
    "doc_path": "docs",
}

# -- Options for autosummary/autodoc output ------------------------------------
autodoc_typehints = "description"
autoapi_dirs = ["../ipyvuetify"]
autoapi_member_order = "groupwise"
autoapi_own_page_level = "method"
autoapi_keep_files = True
autoapi_options = [
    "members",
    "undoc-members",
    # "show-inheritance",
    "show-module-summary",
    "imported-members",
]
autoapi_python_class_content = "init"


def skip_submodules(app, what, name, obj, skip, options):
    """Ignore the modules and packages that are private

    Only necessary for those that are not using a leading underscore
    """
    privates = [
        ("module", "ipyvuetify.Html"),
        ("module", "ipyvuetify.VuetifyTemplate"),
        ("package", "ipyvuetify.generated"),
    ]

    # return `skip` when nothing is catch to keep skipping the private members
    return any([what == t and name == m for t, m in privates]) or skip


def setup(sphinx):
    sphinx.connect("autoapi-skip-member", skip_submodules)
