import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class FieldLabel(anywidget.AnyWidget):
    """The FieldLabel component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        floating: Elevates the label above the slotted content.

    Returns:
        A VFieldLabel widget.

    seealso:
        `https://vuetifyjs.com/api/v-field-label`__
    """

    _esm = bundled_path / "VFieldLabel.js"
    _css = bundled_path / "VFieldLabel-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    floating = traitlets.Bool(allow_none=True).tag(sync=True)
    """Elevates the label above the slotted content."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        floating=False,
        **kwargs
    ):
        """Initialize a FieldLabel widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.floating = floating

        super().__init__(**kwargs)