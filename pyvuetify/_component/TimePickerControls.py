import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class TimePickerControls(anywidget.AnyWidget):
    """The TimePickerControls component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        disabled: Removes the ability to click or target the component.
        value: The current value of the timepicker.
        readonly: Makes the timepicker readonly.
        view_mode: The current view mode of the timepicker. Can be either `hour`, `minute`, or `second`.
        ampm: Enables AM/PM mode.
        hour: The current hour value.
        minute: The current minute value.
        second: The current second value.
        period: The current period value. either `am` or `pm`.
        use_seconds: Enables the display and selection of seconds in the timepicker.

    Returns:
        A VTimePickerControls widget.

    seealso:
        `https://vuetifyjs.com/api/v-time-picker-controls`__
    """

    _esm = bundled_path / "VTimePickerControls.js"
    _css = bundled_path / "VTimePickerControls-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    value = traitlets.Float(allow_none=True).tag(sync=True)
    """The current value of the timepicker."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes the timepicker readonly."""

    view_mode = traitlets.Any(allow_none=True).tag(sync=True)
    """The current view mode of the timepicker. Can be either `hour`, `minute`, or `second`."""

    ampm = traitlets.Bool(allow_none=True).tag(sync=True)
    """Enables AM/PM mode."""

    hour = traitlets.Any(allow_none=True).tag(sync=True)
    """The current hour value."""

    minute = traitlets.Any(allow_none=True).tag(sync=True)
    """The current minute value."""

    second = traitlets.Any(allow_none=True).tag(sync=True)
    """The current second value."""

    period = traitlets.Any(allow_none=True).tag(sync=True)
    """The current period value. either `am` or `pm`."""

    use_seconds = traitlets.Bool(allow_none=True).tag(sync=True)
    """Enables the display and selection of seconds in the timepicker."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        color=None,
        disabled=False,
        value=None,
        readonly=False,
        view_mode=None,
        ampm=False,
        hour=None,
        minute=None,
        second=None,
        period=None,
        use_seconds=False,
        **kwargs
    ):
        """Initialize a TimePickerControls widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.color = color
        self.disabled = disabled
        self.value = value
        self.readonly = readonly
        self.view_mode = view_mode
        self.ampm = ampm
        self.hour = hour
        self.minute = minute
        self.second = second
        self.period = period
        self.use_seconds = use_seconds

        super().__init__(**kwargs)