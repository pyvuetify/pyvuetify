import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Parallax(anywidget.AnyWidget):
    """The Parallax component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        scale: The scale of the parallax image.

    Returns:
        A VParallax widget.

    seealso:
        `https://vuetifyjs.com/api/v-parallax`__
    """

    _esm = bundled_path / "VParallax.js"
    _css = bundled_path / "VParallax-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    scale = traitlets.Any(allow_none=True).tag(sync=True)
    """The scale of the parallax image."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        scale="0.5",
        **kwargs
    ):
        """Initialize a Parallax widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.scale = scale

        super().__init__(**kwargs)