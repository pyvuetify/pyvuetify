import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Code(anywidget.AnyWidget):
    """The Code component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.

    Returns:
        A VCode widget.

    seealso:
        `https://vuetifyjs.com/api/v-code`__
    """

    _esm = bundled_path / "VCode.js"
    _css = bundled_path / "VCode-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    def __init__(
        self,
        children=None,
        tag="code",
        **kwargs
    ):
        """Initialize a Code widget."""
        self.children = children
        self.tag = tag

        super().__init__(**kwargs)