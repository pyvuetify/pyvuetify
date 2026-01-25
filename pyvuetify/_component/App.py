import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class App(anywidget.AnyWidget):
    """The App component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        theme: Specify a theme for this component and all of its children.
        overlaps: **FOR INTERNAL USE ONLY**

    Returns:
        A VApp widget.

    seealso:
        `https://vuetifyjs.com/api/v-app`__
    """

    _esm = bundled_path / "VApp.js"
    _css = bundled_path / "VApp-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    overlaps = traitlets.Any(allow_none=True).tag(sync=True)
    """**FOR INTERNAL USE ONLY**"""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        theme=None,
        overlaps="[]",
        **kwargs
    ):
        """Initialize a App widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.theme = theme
        self.overlaps = overlaps

        super().__init__(**kwargs)