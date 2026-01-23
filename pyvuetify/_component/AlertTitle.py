import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class AlertTitle(anywidget.AnyWidget):
    """The AlertTitle component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.

    Returns:
        A VAlertTitle widget.

    seealso:
        `https://vuetifyjs.com/api/v-alert-title`__
    """

    _esm = bundled_path / "VAlertTitle.js"
    _css = bundled_path / "VAlertTitle-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    def __init__(
        self,
        children=None,
        tag="div",
        **kwargs
    ):
        """Initialize a AlertTitle widget."""
        self.children = children
        self.tag = tag

        super().__init__(**kwargs)