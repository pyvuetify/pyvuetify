import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ExpansionPanelText(anywidget.AnyWidget):
    """The ExpansionPanelText component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        eager: Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.

    Returns:
        A VExpansionPanelText widget.

    seealso:
        `https://vuetifyjs.com/api/v-expansion-panel-text`__
    """

    _esm = bundled_path / "VExpansionPanelText.js"
    _css = bundled_path / "VExpansionPanelText-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    eager = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        eager=False,
        **kwargs
    ):
        """Initialize a ExpansionPanelText widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.eager = eager

        super().__init__(**kwargs)