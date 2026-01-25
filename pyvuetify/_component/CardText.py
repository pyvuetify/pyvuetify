import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class CardText(anywidget.AnyWidget):
    """The CardText component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        tag: Specify a custom tag used on the root element.
        opacity: Sets the component's opacity value

    Returns:
        A VCardText widget.

    seealso:
        `https://vuetifyjs.com/api/v-card-text`__
    """

    _esm = bundled_path / "VCardText.js"
    _css = bundled_path / "VCardText-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    opacity = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component's opacity value"""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        tag="div",
        opacity=None,
        **kwargs
    ):
        """Initialize a CardText widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.tag = tag
        self.opacity = opacity

        super().__init__(**kwargs)