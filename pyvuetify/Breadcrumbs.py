import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parent / "static"


class Breadcrumbs(anywidget.AnyWidget):
    """The Breadcrumbs component.

    The v-breadcrumbs component is a navigational helper for pages that shows hierarchical navigation structure. It allows users to understand their location within a site.

    Args:
        dark: Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
        divider: Specifies the dividing character between items.
        items: An array of objects for each breadcrumb.
        large: Increase the font-size of the breadcrumb item text to 16px (14px default).
        light: Applies the light theme variant to the component.

    Returns:
        A Breadcrumbs widget.
    """

    _esm = bundled_path / "Breadcrumbs.mjs"
    _css = bundled_path / "Breadcrumbs.css"

    dark = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html)."""

    divider = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the dividing character between items."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of objects for each breadcrumb."""

    large = traitlets.Any(allow_none=True).tag(sync=True)
    """Increase the font-size of the breadcrumb item text to 16px (14px default)."""

    light = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the light theme variant to the component."""

    def __init__(self, dark=None, divider=None, items=None, large=None, light=None, **kwargs):
        """Initialize a Breadcrumbs widget."""

        self.dark = dark
        self.divider = divider
        self.items = items
        self.large = large
        self.light = light

        super().__init__(**kwargs)
