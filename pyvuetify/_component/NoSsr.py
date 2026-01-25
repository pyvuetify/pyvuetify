import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class NoSsr(anywidget.AnyWidget):
    """The NoSsr component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.

    Returns:
        A VNoSsr widget.

    seealso:
        `https://vuetifyjs.com/api/v-no-ssr`__
    """

    _esm = bundled_path / "VNoSsr.js"
    _css = bundled_path / "VNoSsr-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        **kwargs
    ):
        """Initialize a NoSsr widget."""
        self.v_model = v_model
        self.children = children
        self.style = style

        super().__init__(**kwargs)