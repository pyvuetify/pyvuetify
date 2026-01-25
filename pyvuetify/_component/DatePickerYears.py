import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DatePickerYears(anywidget.AnyWidget):
    """The DatePickerYears component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        height: Sets the height for the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        max: Sets the maximum date of the month.
        min: Sets the minimum date of the month.
        allowed_years: Restricts which years can be selected.

    Returns:
        A VDatePickerYears widget.

    seealso:
        `https://vuetifyjs.com/api/v-date-picker-years`__
    """

    _esm = bundled_path / "VDatePickerYears.js"
    _css = bundled_path / "VDatePickerYears-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    model_value = traitlets.Float(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    max = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum date of the month."""

    min = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum date of the month."""

    allowed_years = traitlets.Any(allow_none=True).tag(sync=True)
    """Restricts which years can be selected."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        model_value=None,
        height=None,
        color=None,
        max=None,
        min=None,
        allowed_years=None,
        **kwargs
    ):
        """Initialize a DatePickerYears widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.model_value = model_value
        self.height = height
        self.color = color
        self.max = max
        self.min = min
        self.allowed_years = allowed_years

        super().__init__(**kwargs)