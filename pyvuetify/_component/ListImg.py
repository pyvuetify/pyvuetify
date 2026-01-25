import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ListImg(anywidget.AnyWidget):
    """The ListImg component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        tag: Specify a custom tag used on the root element.

    Returns:
        A VListImg widget.

    seealso:
        `https://vuetifyjs.com/api/v-list-img`__
    """

    _esm = bundled_path / "VListImg.js"
    _css = bundled_path / "VListImg-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    tag = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        tag="div",
        **kwargs
    ):
        """Initialize a ListImg widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.tag = tag

        super().__init__(**kwargs)