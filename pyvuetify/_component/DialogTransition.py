import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DialogTransition(anywidget.AnyWidget):
    """The DialogTransition component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        target: Sets the target element for the transition.

    Returns:
        A VDialogTransition widget.

    seealso:
        `https://vuetifyjs.com/api/v-dialog-transition`__
    """

    _esm = bundled_path / "VDialogTransition.js"
    _css = bundled_path / "VDialogTransition-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    target = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the target element for the transition."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        target=None,
        **kwargs
    ):
        """Initialize a DialogTransition widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.target = target

        super().__init__(**kwargs)