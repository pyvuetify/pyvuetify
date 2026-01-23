import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ExpansionPanelText(anywidget.AnyWidget):
    """The ExpansionPanelText component.

    

    Args:
        children: The child nodes of the DOM element.
        eager: Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.

    Returns:
        A VExpansionPanelText widget.

    seealso:
        `https://vuetifyjs.com/api/v-expansion-panel-text`__
    """

    _esm = bundled_path / "VExpansionPanelText.js"
    _css = bundled_path / "VExpansionPanelText-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    eager = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."""

    def __init__(
        self,
        children=None,
        eager=False,
        **kwargs
    ):
        """Initialize a ExpansionPanelText widget."""
        self.children = children
        self.eager = eager

        super().__init__(**kwargs)