import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class FieldLabel(anywidget.AnyWidget):
    """The FieldLabel component.

    

    Args:
        children: The child nodes of the DOM element.
        floating: Elevates the label above the slotted content.

    Returns:
        A VFieldLabel widget.

    seealso:
        `https://vuetifyjs.com/api/v-field-label`__
    """

    _esm = bundled_path / "VFieldLabel.js"
    _css = bundled_path / "VFieldLabel-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    floating = traitlets.Bool(allow_none=True).tag(sync=True)
    """Elevates the label above the slotted content."""

    def __init__(
        self,
        children=None,
        floating=False,
        **kwargs
    ):
        """Initialize a FieldLabel widget."""
        self.children = children
        self.floating = floating

        super().__init__(**kwargs)