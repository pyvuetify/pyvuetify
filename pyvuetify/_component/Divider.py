import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Divider(anywidget.AnyWidget):
    """The Divider component.

    

    Args:
        children: The child nodes of the DOM element.
        length: Sets the dividers length. Default unit is px.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies `border-style`.
        opacity: Sets the component's opacity value
        vertical: Displays dividers vertically.
        gradient: Adds fading effect for both sides.
        inset: Adds indentation (72px) for **normal** dividers, reduces max height for **vertical**.
        thickness: Sets the dividers thickness. Default unit is px.
        content_offset: Increases content spacing from the lines. When passed as an array, the second value shifts slot content down (or right in vertical mode).

    Returns:
        A VDivider widget.

    seealso:
        `https://vuetifyjs.com/api/v-divider`__
    """

    _esm = bundled_path / "VDivider.js"
    _css = bundled_path / "VDivider-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    length = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the dividers length. Default unit is px."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies `border-style`."""

    opacity = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component's opacity value"""

    vertical = traitlets.Bool(allow_none=True).tag(sync=True)
    """Displays dividers vertically."""

    gradient = traitlets.Bool(allow_none=True).tag(sync=True)
    """Adds fading effect for both sides."""

    inset = traitlets.Bool(allow_none=True).tag(sync=True)
    """Adds indentation (72px) for **normal** dividers, reduces max height for **vertical**."""

    thickness = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the dividers thickness. Default unit is px."""

    content_offset = traitlets.Any(allow_none=True).tag(sync=True)
    """Increases content spacing from the lines. When passed as an array, the second value shifts slot content down (or right in vertical mode)."""

    def __init__(
        self,
        children=None,
        length=None,
        theme=None,
        color=None,
        variant="solid",
        opacity=None,
        vertical=False,
        gradient=False,
        inset=False,
        thickness=None,
        content_offset=None,
        **kwargs
    ):
        """Initialize a Divider widget."""
        self.children = children
        self.length = length
        self.theme = theme
        self.color = color
        self.variant = variant
        self.opacity = opacity
        self.vertical = vertical
        self.gradient = gradient
        self.inset = inset
        self.thickness = thickness
        self.content_offset = content_offset

        super().__init__(**kwargs)