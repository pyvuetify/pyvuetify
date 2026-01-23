import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class NoSsr(anywidget.AnyWidget):
    """The NoSsr component.

    

    Args:
        children: The child nodes of the DOM element.

    Returns:
        A VNoSsr widget.

    seealso:
        `https://vuetifyjs.com/api/v-no-ssr`__
    """

    _esm = bundled_path / "VNoSsr.js"
    _css = bundled_path / "VNoSsr-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    def __init__(
        self,
        children=None,
        **kwargs
    ):
        """Initialize a NoSsr widget."""
        self.children = children

        super().__init__(**kwargs)