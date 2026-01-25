import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DatePickerMonth(anywidget.AnyWidget):
    """The DatePickerMonth component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        disabled: Removes the ability to click or target the component.
        max: Sets the maximum date of the month.
        min: Sets the minimum date of the month.
        multiple: Sets the multiple of the month.
        transition: The transition used when changing months into the future
        year: Sets the year.
        month: Sets the month.
        hide_weekdays: Hide the days of the week letters.
        show_week: Show the week number.
        reverse_transition: The transition used when changing months into the past
        events: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDatePickerMonth.json))
        event_color: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDatePickerMonth.json))
        show_adjacent_months: Show adjacent months.
        weekdays: An array of weekdays to display. Does not affect the order.
        weeks_in_month: A dynamic number of weeks in a month will grow and shrink depending on how many days are in the month. A static number always shows 7 weeks.
        first_day_of_week: Sets the first day of the week, starting with 0 for Sunday. (Note: not guaranteed to work when using custom date adapters.)
        first_day_of_year: Sets the day that determines the first week of the year, starting with 0 for Sunday. For ISO 8601 this should be 4. (Note: not guaranteed to work when using custom date adapters.)
        allowed_dates: Sets the allowed dates of the month.
        weekday_format: Allows you to customize the format of the weekday string that appears in the body of the calendar. Uses `'narrow'` by default. (Note: not guaranteed to work when using custom date adapters.)

    Returns:
        A VDatePickerMonth widget.

    seealso:
        `https://vuetifyjs.com/api/v-date-picker-month`__
    """

    _esm = bundled_path / "VDatePickerMonth.js"
    _css = bundled_path / "VDatePickerMonth-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    max = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum date of the month."""

    min = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum date of the month."""

    multiple = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the multiple of the month."""

    transition = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The transition used when changing months into the future"""

    year = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the year."""

    month = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the month."""

    hide_weekdays = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the days of the week letters."""

    show_week = traitlets.Bool(allow_none=True).tag(sync=True)
    """Show the week number."""

    reverse_transition = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The transition used when changing months into the past"""

    events = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDatePickerMonth.json))"""

    event_color = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDatePickerMonth.json))"""

    show_adjacent_months = traitlets.Bool(allow_none=True).tag(sync=True)
    """Show adjacent months."""

    weekdays = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of weekdays to display. Does not affect the order."""

    weeks_in_month = traitlets.Any(allow_none=True).tag(sync=True)
    """A dynamic number of weeks in a month will grow and shrink depending on how many days are in the month. A static number always shows 7 weeks."""

    first_day_of_week = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the first day of the week, starting with 0 for Sunday. (Note: not guaranteed to work when using custom date adapters.)"""

    first_day_of_year = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the day that determines the first week of the year, starting with 0 for Sunday. For ISO 8601 this should be 4. (Note: not guaranteed to work when using custom date adapters.)"""

    allowed_dates = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the allowed dates of the month."""

    weekday_format = traitlets.Any(allow_none=True).tag(sync=True)
    """Allows you to customize the format of the weekday string that appears in the body of the calendar. Uses `'narrow'` by default. (Note: not guaranteed to work when using custom date adapters.)"""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        model_value=None,
        color=None,
        disabled=None,
        max=None,
        min=None,
        multiple=False,
        transition="picker-transition",
        year=None,
        month=None,
        hide_weekdays=False,
        show_week=False,
        reverse_transition="picker-reverse-transition",
        events=None,
        event_color=None,
        show_adjacent_months=False,
        weekdays="[0, 1, 2, 3, 4, 5, 6]",
        weeks_in_month="dynamic",
        first_day_of_week=None,
        first_day_of_year=None,
        allowed_dates=None,
        weekday_format=None,
        **kwargs
    ):
        """Initialize a DatePickerMonth widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.model_value = model_value
        self.color = color
        self.disabled = disabled
        self.max = max
        self.min = min
        self.multiple = multiple
        self.transition = transition
        self.year = year
        self.month = month
        self.hide_weekdays = hide_weekdays
        self.show_week = show_week
        self.reverse_transition = reverse_transition
        self.events = events
        self.event_color = event_color
        self.show_adjacent_months = show_adjacent_months
        self.weekdays = weekdays
        self.weeks_in_month = weeks_in_month
        self.first_day_of_week = first_day_of_week
        self.first_day_of_year = first_day_of_year
        self.allowed_dates = allowed_dates
        self.weekday_format = weekday_format

        super().__init__(**kwargs)