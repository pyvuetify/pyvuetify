import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class StepperActions(anywidget.AnyWidget):
    """The StepperActions component.

    

    Args:
        children: The child nodes of the DOM element.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        disabled: Removes the ability to click or target the component.
        prev_text: The text used for the Prev button.
        next_text: The text used for the Next button.

    Returns:
        A VStepperActions widget.

    seealso:
        `https://vuetifyjs.com/api/v-stepper-actions`__
    """

    _esm = bundled_path / "VStepperActions.js"
    _css = bundled_path / "VStepperActions-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    disabled = traitlets.Any(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    prev_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The text used for the Prev button."""

    next_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The text used for the Next button."""

    def __init__(
        self,
        children=None,
        color=None,
        disabled=False,
        prev_text="$vuetify.stepper.prev",
        next_text="$vuetify.stepper.next",
        **kwargs
    ):
        """Initialize a StepperActions widget."""
        self.children = children
        self.color = color
        self.disabled = disabled
        self.prev_text = prev_text
        self.next_text = next_text

        super().__init__(**kwargs)