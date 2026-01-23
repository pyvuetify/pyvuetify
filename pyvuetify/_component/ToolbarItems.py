import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ToolbarItems(anywidget.AnyWidget):
    """The ToolbarItems component.

    

    Args:
        children: The child nodes of the DOM element.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.

    Returns:
        A VToolbarItems widget.

    seealso:
        `https://vuetifyjs.com/api/v-toolbar-items`__
    """

    _esm = bundled_path / "VToolbarItems.js"
    _css = bundled_path / "VToolbarItems-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    def __init__(
        self,
        children=None,
        color=None,
        variant="text",
        **kwargs
    ):
        """Initialize a ToolbarItems widget."""
        self.children = children
        self.color = color
        self.variant = variant

        super().__init__(**kwargs)