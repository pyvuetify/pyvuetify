import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Parallax(anywidget.AnyWidget):
    """The Parallax component.

    

    Args:
        children: The child nodes of the DOM element.
        scale: The scale of the parallax image.

    Returns:
        A VParallax widget.

    seealso:
        `https://vuetifyjs.com/api/v-parallax`__
    """

    _esm = bundled_path / "VParallax.js"
    _css = bundled_path / "VParallax-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    scale = traitlets.Any(allow_none=True).tag(sync=True)
    """The scale of the parallax image."""

    def __init__(
        self,
        children=None,
        scale="0.5",
        **kwargs
    ):
        """Initialize a Parallax widget."""
        self.children = children
        self.scale = scale

        super().__init__(**kwargs)