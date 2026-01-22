import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class BannerActions(anywidget.AnyWidget):
    """The BannerActions component.

    

    Args:
        children: The child nodes of the DOM element.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.

    Returns:
        A VBannerActions widget.

    seealso:
        `https://vuetifyjs.com/api/v-banner-actions`__
    """

    _esm = bundled_path / "VBannerActions.mjs"
    _css = bundled_path / "VBannerActions.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    def __init__(
        self,
        children=None,
        color=None,
        density=None,
        **kwargs
    ):
        """Initialize a BannerActions widget."""
        self.children = children
        self.color = color
        self.density = density

        super().__init__(**kwargs)