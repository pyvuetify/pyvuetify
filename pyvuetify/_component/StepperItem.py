import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class StepperItem(anywidget.AnyWidget):
    """The StepperItem component.

    

    Args:
        children: The child nodes of the DOM element.
        title: Specify a title text for the component.
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.
        error: Puts the stepper item in a manual error state.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        disabled: Removes the ability to click or target the component.
        value: The value used when the component is selected in a group. If not provided, a unique ID will be used.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        selected_class: Configure the active CSS class applied when an item is selected.
        subtitle: Specify a subtitle text for the component.
        rules: Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`.
        complete_icon: Icon to display when step is marked as completed.
        edit_icon: Icon to display when step is editable.
        editable: Marks step as editable.
        error_icon: Icon to display when step has an error.
        complete: Marks step as complete.

    Returns:
        A VStepperItem widget.

    seealso:
        `https://vuetifyjs.com/api/v-stepper-item`__
    """

    _esm = bundled_path / "VStepperItem.js"
    _css = bundled_path / "VStepperItem-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

    error = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the stepper item in a manual error state."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """The value used when the component is selected in a group. If not provided, a unique ID will be used."""

    ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    subtitle = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a subtitle text for the component."""

    rules = traitlets.Any(allow_none=True).tag(sync=True)
    """Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`."""

    complete_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon to display when step is marked as completed."""

    edit_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon to display when step is editable."""

    editable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Marks step as editable."""

    error_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon to display when step has an error."""

    complete = traitlets.Bool(allow_none=True).tag(sync=True)
    """Marks step as complete."""

    def __init__(
        self,
        children=None,
        title=None,
        icon=None,
        error=False,
        color=None,
        disabled=False,
        value=None,
        ripple=True,
        selected_class=None,
        subtitle=None,
        rules="[]",
        complete_icon="$complete",
        edit_icon="$edit",
        editable=False,
        error_icon="$error",
        complete=False,
        **kwargs
    ):
        """Initialize a StepperItem widget."""
        self.children = children
        self.title = title
        self.icon = icon
        self.error = error
        self.color = color
        self.disabled = disabled
        self.value = value
        self.ripple = ripple
        self.selected_class = selected_class
        self.subtitle = subtitle
        self.rules = rules
        self.complete_icon = complete_icon
        self.edit_icon = edit_icon
        self.editable = editable
        self.error_icon = error_icon
        self.complete = complete

        super().__init__(**kwargs)