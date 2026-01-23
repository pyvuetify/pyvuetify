import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class TimePickerClock(anywidget.AnyWidget):
    """The TimePickerClock component.

    

    Args:
        children: The child nodes of the DOM element.
        disabled: Removes the ability to click or target the component.
        max: Defines the maximum time value that can be selected.
        min: Defines the minimum time value that can be selected.
        step: Defines the increments between selectable times, such as a step of 1 for every minute or a larger step for every 5 or 15 minutes.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        scrollable: Allows the time selection to be scrollable, enhancing user experience for devices with scroll inputs.
        readonly: When true, the picker is in a read-only state, and users cannot modify the selected time.
        rotate: Controls rotation, specifying the degree of rotation for the clock hands.
        ampm: Displays time in a 12-hour format.
        displayed_value: Used to display a custom value on the clock.
        double: If set, this probably indicates a double rotation or a mode where more than one set of values (like hours and minutes) is displayed on the clock at the same time.
        format: Specifies the format of the displayed time, either 12-hour or 24-hour, depending on the component's setup.
        allowed_values: Restricts which hours can be selected.

    Returns:
        A VTimePickerClock widget.

    seealso:
        `https://vuetifyjs.com/api/v-time-picker-clock`__
    """

    _esm = bundled_path / "VTimePickerClock.js"
    _css = bundled_path / "VTimePickerClock-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    max = traitlets.Float(allow_none=True).tag(sync=True)
    """Defines the maximum time value that can be selected."""

    min = traitlets.Float(allow_none=True).tag(sync=True)
    """Defines the minimum time value that can be selected."""

    step = traitlets.Float(allow_none=True).tag(sync=True)
    """Defines the increments between selectable times, such as a step of 1 for every minute or a larger step for every 5 or 15 minutes."""

    model_value = traitlets.Float(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    scrollable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows the time selection to be scrollable, enhancing user experience for devices with scroll inputs."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """When true, the picker is in a read-only state, and users cannot modify the selected time."""

    rotate = traitlets.Float(allow_none=True).tag(sync=True)
    """Controls rotation, specifying the degree of rotation for the clock hands."""

    ampm = traitlets.Bool(allow_none=True).tag(sync=True)
    """Displays time in a 12-hour format."""

    displayed_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Used to display a custom value on the clock."""

    double = traitlets.Bool(allow_none=True).tag(sync=True)
    """If set, this probably indicates a double rotation or a mode where more than one set of values (like hours and minutes) is displayed on the clock at the same time."""

    format = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the format of the displayed time, either 12-hour or 24-hour, depending on the component's setup."""

    allowed_values = traitlets.Any(allow_none=True).tag(sync=True)
    """Restricts which hours can be selected."""

    def __init__(
        self,
        children=None,
        disabled=False,
        max=None,
        min=None,
        step="1",
        model_value=None,
        color=None,
        scrollable=False,
        readonly=False,
        rotate="0",
        ampm=False,
        displayed_value=None,
        double=False,
        format=None,
        allowed_values=None,
        **kwargs
    ):
        """Initialize a TimePickerClock widget."""
        self.children = children
        self.disabled = disabled
        self.max = max
        self.min = min
        self.step = step
        self.model_value = model_value
        self.color = color
        self.scrollable = scrollable
        self.readonly = readonly
        self.rotate = rotate
        self.ampm = ampm
        self.displayed_value = displayed_value
        self.double = double
        self.format = format
        self.allowed_values = allowed_values

        super().__init__(**kwargs)