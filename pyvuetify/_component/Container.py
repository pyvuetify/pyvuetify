import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Container(anywidget.AnyWidget):
    """The Container component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        tag: Specify a custom tag used on the root element.
        height: Sets the height for the component.
        width: Sets the width for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        fluid: Removes viewport maximum-width size breakpoints.

    Returns:
        A VContainer widget.

    seealso:
        `https://vuetifyjs.com/api/v-container`__
    """

    _esm = bundled_path / "VContainer.js"
    _css = bundled_path / "VContainer-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    fluid = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes viewport maximum-width size breakpoints."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        tag="div",
        height=None,
        width=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        fluid=False,
        **kwargs
    ):
        """Initialize a Container widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.tag = tag
        self.height = height
        self.width = width
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.fluid = fluid

        super().__init__(**kwargs)