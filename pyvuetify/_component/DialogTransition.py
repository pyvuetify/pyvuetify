import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DialogTransition(anywidget.AnyWidget):
    """The DialogTransition component.

    

    Args:
        children: The child nodes of the DOM element.
        target: Sets the target element for the transition.

    Returns:
        A VDialogTransition widget.

    seealso:
        `https://vuetifyjs.com/api/v-dialog-transition`__
    """

    _esm = bundled_path / "VDialogTransition.js"
    _css = bundled_path / "VDialogTransition-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    target = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the target element for the transition."""

    def __init__(
        self,
        children=None,
        target=None,
        **kwargs
    ):
        """Initialize a DialogTransition widget."""
        self.children = children
        self.target = target

        super().__init__(**kwargs)