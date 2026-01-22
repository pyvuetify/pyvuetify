import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class AppBarTitle(anywidget.AnyWidget):
    """The AppBarTitle component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        text: Specify content text for the component.

    Returns:
        A VAppBarTitle widget.

    seealso:
        `https://vuetifyjs.com/api/v-app-bar-title`__
    """

    _esm = bundled_path / "VAppBarTitle.mjs"
    _css = bundled_path / "VAppBarTitle.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    def __init__(
        self,
        children=None,
        tag="div",
        text=None,
        **kwargs
    ):
        """Initialize a AppBarTitle widget."""
        self.children = children
        self.tag = tag
        self.text = text

        super().__init__(**kwargs)