import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Label(anywidget.AnyWidget):
    """The Label component.

    

    Args:
        children: The child nodes of the DOM element.
        theme: Specify a theme for this component and all of its children.
        text: Specify content text for the component.

    Returns:
        A VLabel widget.

    seealso:
        `https://vuetifyjs.com/api/v-label`__
    """

    _esm = bundled_path / "VLabel.js"
    _css = bundled_path / "VLabel-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    def __init__(
        self,
        children=None,
        theme=None,
        text=None,
        **kwargs
    ):
        """Initialize a Label widget."""
        self.children = children
        self.theme = theme
        self.text = text

        super().__init__(**kwargs)