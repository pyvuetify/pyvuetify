import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ToolbarItems(anywidget.AnyWidget):
    """The ToolbarItems component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.

    Returns:
        A VToolbarItems widget.

    seealso:
        `https://vuetifyjs.com/api/v-toolbar-items`__
    """

    _esm = bundled_path / "VToolbarItems.js"
    _css = bundled_path / "VToolbarItems-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        color=None,
        variant="text",
        **kwargs
    ):
        """Initialize a ToolbarItems widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.color = color
        self.variant = variant

        super().__init__(**kwargs)