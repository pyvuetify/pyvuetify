"""A Sphinx role to insert inline raw HTML."""

from __future__ import annotations

from docutils import nodes
from sphinx.application import Sphinx


def html_role(name, rawtext, text, lineno, inliner, options=None, content=None):
    """Role that renders its content as raw inline HTML."""
    node = nodes.raw("", text, format="html")
    return [node], []


def setup(app: Sphinx) -> dict:
    app.add_role("html", html_role)
    return {
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
