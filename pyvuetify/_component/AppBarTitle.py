import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class AppBarTitle(anywidget.AnyWidget):
    """The AppBarTitle component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        tag: Specify a custom tag used on the root element.
        text: Specify content text for the component.

    Returns:
        A VAppBarTitle widget.

    seealso:
        `https://vuetifyjs.com/api/v-app-bar-title`__
    """

    _esm = bundled_path / "VAppBarTitle.js"
    _css = bundled_path / "VAppBarTitle-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        tag="div",
        text=None,
        **kwargs
    ):
        """Initialize a AppBarTitle widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.tag = tag
        self.text = text

        super().__init__(**kwargs)