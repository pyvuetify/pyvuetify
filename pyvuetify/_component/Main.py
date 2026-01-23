import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Main(anywidget.AnyWidget):
    """The Main component.

    

    Args:
        children: The child nodes of the DOM element.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        tag: Specify a custom tag used on the root element.
        scrollable: Specify a custom scrollable function.

    Returns:
        A VMain widget.

    seealso:
        `https://vuetifyjs.com/api/v-main`__
    """

    _esm = bundled_path / "VMain.js"
    _css = bundled_path / "VMain-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    scrollable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Specify a custom scrollable function."""

    def __init__(
        self,
        children=None,
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        tag="main",
        scrollable=False,
        **kwargs
    ):
        """Initialize a Main widget."""
        self.children = children
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.tag = tag
        self.scrollable = scrollable

        super().__init__(**kwargs)