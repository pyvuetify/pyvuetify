"""A directive to generate an alert admonition."""
from __future__ import annotations

from typing import ClassVar

from docutils import nodes
from docutils.nodes import Node
from sphinx import addnodes
from sphinx.application import Sphinx
from sphinx.util import logging
from sphinx.util.docutils import SphinxDirective
from sphinx.util.typing import OptionSpec
from sphinx.writers.html5 import HTML5Translator

logger = logging.getLogger(__name__)


class alert_node(nodes.Admonition, nodes.Element):
    pass


def visit_aknowledgement_node(self: HTML5Translator, node: alert_node) -> None:
    self.visit_admonition(node)


def depart_aknowledgement_node(self: HTML5Translator, node: alert_node) -> None:
    self.depart_admonition(node)


class AknowledgementDirective(SphinxDirective):
    """Directive to reference the original source of the documentation."""

    has_content = True
    required_arguments = 0
    optional_arguments = 0
    final_argument_whitespace = True
    option_spec: ClassVar[OptionSpec] = {}

    def run(self) -> list[Node]:
        node = addnodes.versionmodified()
        node.document = self.state.document
        self.set_source_info(node)
        node["type"] = "versionchanged"
        node["version"] = ""
        text = "Aknowledgement"
        messages = []
        if self.content:
            node += self.parse_content_to_nodes()
        classes = ["versionmodified", "changed"]
        if len(node) > 0 and isinstance(node[0], nodes.paragraph):
            # the contents start with a paragraph
            if node[0].rawsource:
                # make the first paragraph translatable
                content = nodes.inline(node[0].rawsource, translatable=True)
                content.source = node[0].source
                content.line = node[0].line
                content += node[0].children
                node[0].replace_self(nodes.paragraph("", "", content, translatable=False))
            para = node[0]
            para.insert(0, nodes.inline("", "%s: " % text, classes=classes))
        elif len(node) > 0:
            # the contents do not starts with a paragraph
            para = nodes.paragraph(
                "",
                "",
                nodes.inline("", "%s: " % text, classes=classes),
                translatable=False,
            )
            node.insert(0, para)
        else:
            # the contents are empty
            para = nodes.paragraph(
                "",
                "",
                nodes.inline("", "%s." % text, classes=classes),
                translatable=False,
            )
            node.append(para)

        domain = self.env.domains.changeset_domain
        domain.note_changeset(node)

        ret: list[Node] = [node]
        ret += messages
        return ret


def setup(app: Sphinx) -> dict[str, object]:
    """Add custom configuration to sphinx app.

    Args:
        app: the Sphinx application

    Returns:
        the 2 parallel parameters set to ``True``.
    """
    app.add_directive("aknowledgement", AknowledgementDirective)
    app.add_node(alert_node, html=(visit_aknowledgement_node, depart_aknowledgement_node))

    return {
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
