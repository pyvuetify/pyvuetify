import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class StepperHeader(anywidget.AnyWidget):
    """The StepperHeader component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.

    Returns:
        A VStepperHeader widget.

    seealso:
        `https://vuetifyjs.com/api/v-stepper-header`__
    """

    _esm = bundled_path / "VStepperHeader.js"
    _css = bundled_path / "VStepperHeader-pyvuetify.css"

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
        """Initialize a StepperHeader widget."""
        self.children = children
        self.tag = tag

        super().__init__(**kwargs)