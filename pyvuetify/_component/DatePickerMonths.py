import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DatePickerMonths(anywidget.AnyWidget):
    """The DatePickerMonths component.

    

    Args:
        children: The child nodes of the DOM element.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        height: Sets the height for the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        max: Sets the maximum selectable date. Months after this date will be disabled.
        min: Sets the minimum selectable date. Months before this date will be disabled.
        year: Sets the year for the given months.
        allowed_months: Restricts which months can be selected.

    Returns:
        A VDatePickerMonths widget.

    seealso:
        `https://vuetifyjs.com/api/v-date-picker-months`__
    """

    _esm = bundled_path / "VDatePickerMonths.js"
    _css = bundled_path / "VDatePickerMonths-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    model_value = traitlets.Float(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    max = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum selectable date. Months after this date will be disabled."""

    min = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum selectable date. Months before this date will be disabled."""

    year = traitlets.Float(allow_none=True).tag(sync=True)
    """Sets the year for the given months."""

    allowed_months = traitlets.Any(allow_none=True).tag(sync=True)
    """Restricts which months can be selected."""

    def __init__(
        self,
        children=None,
        model_value=None,
        height=None,
        color=None,
        max=None,
        min=None,
        year=None,
        allowed_months=None,
        **kwargs
    ):
        """Initialize a DatePickerMonths widget."""
        self.children = children
        self.model_value = model_value
        self.height = height
        self.color = color
        self.max = max
        self.min = min
        self.year = year
        self.allowed_months = allowed_months

        super().__init__(**kwargs)