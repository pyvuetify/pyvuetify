import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class StepperVerticalActions(anywidget.AnyWidget):
    """The StepperVerticalActions component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        disabled: Removes the ability to click or target the component.
        prev_text: The text used for the Prev button.
        next_text: The text used for the Next button.

    Returns:
        A VStepperVerticalActions widget.

    seealso:
        `https://vuetifyjs.com/api/v-stepper-vertical-actions`__
    """

    _esm = bundled_path / "VStepperVerticalActions.js"
    _css = bundled_path / "VStepperVerticalActions-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

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
        v_model=None,
        children=None,
        style=None,
        color=None,
        disabled=False,
        prev_text="$vuetify.stepper.prev",
        next_text="$vuetify.stepper.next",
        **kwargs
    ):
        """Initialize a StepperVerticalActions widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.color = color
        self.disabled = disabled
        self.prev_text = prev_text
        self.next_text = next_text

        super().__init__(**kwargs)