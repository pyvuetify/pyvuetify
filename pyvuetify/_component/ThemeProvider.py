import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ThemeProvider(anywidget.AnyWidget):
    """The ThemeProvider component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        with_background: Wraps its children in an element and applies the current theme's background color to it.

    Returns:
        A VThemeProvider widget.

    seealso:
        `https://vuetifyjs.com/api/v-theme-provider`__
    """

    _esm = bundled_path / "VThemeProvider.js"
    _css = bundled_path / "VThemeProvider-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    with_background = traitlets.Bool(allow_none=True).tag(sync=True)
    """Wraps its children in an element and applies the current theme's background color to it."""

    def __init__(
        self,
        children=None,
        tag="div",
        theme=None,
        with_background=False,
        **kwargs
    ):
        """Initialize a ThemeProvider widget."""
        self.children = children
        self.tag = tag
        self.theme = theme
        self.with_background = with_background

        super().__init__(**kwargs)