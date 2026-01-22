import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parent / "static"


class App(anywidget.AnyWidget):
    """The App component.

    The v-app component is REQUIRED for all Vuetify applications. This is the mount point for many of Vuetify's components and functionality and ensures proper cross-browser support for custom properties.

    Args:
        dark: Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
        id: Sets the DOM id on the component
        light: Applies the light theme variant to the component.

    Returns:
        A App widget.
    """

    _esm = bundled_path / "App.mjs"
    _css = bundled_path / "App.css"

    dark = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html)."""

    id = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the DOM id on the component"""

    light = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the light theme variant to the component."""

    def __init__(self, dark=None, id=None, light=None, **kwargs):
        """Initialize a App widget."""

        self.dark = dark
        self.id = id
        self.light = light

        super().__init__(**kwargs)
