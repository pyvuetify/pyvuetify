import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DatePicker(anywidget.AnyWidget):
    """The DatePicker component.

    

    Args:
        children: The child nodes of the DOM element.
        title: Specify a title text for the component.
        text: Specify content text for the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Width of the picker.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        location: Specifies the component's location. Can combine by using a space separated string.
        position: Sets the position for the component.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        disabled: Removes the ability to click or target the component.
        max: Maximum allowed date/month (ISO 8601 format).
        min: Minimum allowed date/month (ISO 8601 format).
        multiple: Allow the selection of multiple dates. The **range** value selects all dates between two selections.
        header: Text shown when no **display-date** is set.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        transition: The transition used when changing months into the future
        divided: Adds a divider between the header and controls.
        landscape: Changes the picker to landscape mode.
        hide_header: Hides the header.
        hide_title: Hide the picker title.
        year: Sets the year.
        month: Sets the month.
        header_color: Allows you to set a different color for the header when used in conjunction with the `color` prop.
        header_date_format: Allows you to customize the format of the date selection text that appears in the header of the calendar.
        landscape_header_width: Sets header width when in landscape mode.
        control_height: Sets the height of the controls.
        control_variant: - **docked:** Separate control groups for month and year.
- **modal:** Month and year are displayed together, clicking the text opens a month picker, clicking the dropdown arrow opens a year picker. There are also arrow buttons to scroll between months.
        no_month_picker: Only applies to `controlVariant="modal"`, the month and year picker buttons are combined into one that only opens the year picker.
        next_icon: Sets the icon for next month/year button.
        prev_icon: Sets the icon for previous month/year button.
        mode_icon: Icon displayed next to the current month and year, toggles year selection when clicked.
        view_mode: Determines which picker in the date or month picker is being displayed. Allowed values: `'month'`, `'months'`, `'year'`.
        hide_weekdays: Hides the weekdays.
        show_week: Toggles visibility of the week numbers in the body of the calendar.
        reverse_transition: The transition used when changing months into the past
        events: Array of dates or object defining events or colors or function returning boolean/color/array of colors.
        event_color: Sets the color for event dots. It can be string (all events will have the same color) or `object` where attribute is the event date and value is boolean/color/array of colors for specified date or `function` taking date as a parameter and returning boolean/color/array of colors for that date.
        show_adjacent_months: Toggles visibility of days from previous and next months.
        weekdays: An array of weekdays to display. Does not affect the order.
        weeks_in_month: A dynamic number of weeks in a month will grow and shrink depending on how many days are in the month. A static number always shows 7 weeks.
        first_day_of_week: Sets the first day of the week, starting with 0 for Sunday. (Note: not guaranteed to work when using custom date adapters.)
        first_day_of_year: Sets the day that determines the first week of the year, starting with 0 for Sunday. For ISO 8601 this should be 4. (Note: not guaranteed to work when using custom date adapters.)
        allowed_dates: Restricts which dates can be selected.
        weekday_format: Allows you to customize the format of the weekday string that appears in the body of the calendar. Uses `'narrow'` by default. (Note: not guaranteed to work when using custom date adapters.)
        allowed_months: Restricts which months can be selected.
        allowed_years: Restricts which years can be selected.

    Returns:
        A VDatePicker widget.

    seealso:
        `https://vuetifyjs.com/api/v-date-picker`__
    """

    _esm = bundled_path / "VDatePicker.js"
    _css = bundled_path / "VDatePicker-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Width of the picker."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the component's location. Can combine by using a space separated string."""

    position = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the position for the component."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    max = traitlets.Any(allow_none=True).tag(sync=True)
    """Maximum allowed date/month (ISO 8601 format)."""

    min = traitlets.Any(allow_none=True).tag(sync=True)
    """Minimum allowed date/month (ISO 8601 format)."""

    multiple = traitlets.Any(allow_none=True).tag(sync=True)
    """Allow the selection of multiple dates. The **range** value selects all dates between two selections."""

    header = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text shown when no **display-date** is set."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    transition = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The transition used when changing months into the future"""

    divided = traitlets.Bool(allow_none=True).tag(sync=True)
    """Adds a divider between the header and controls."""

    landscape = traitlets.Bool(allow_none=True).tag(sync=True)
    """Changes the picker to landscape mode."""

    hide_header = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the header."""

    hide_title = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the picker title."""

    year = traitlets.Float(allow_none=True).tag(sync=True)
    """Sets the year."""

    month = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the month."""

    header_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Allows you to set a different color for the header when used in conjunction with the `color` prop."""

    header_date_format = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Allows you to customize the format of the date selection text that appears in the header of the calendar."""

    landscape_header_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets header width when in landscape mode."""

    control_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height of the controls."""

    control_variant = traitlets.Any(allow_none=True).tag(sync=True)
    """- **docked:** Separate control groups for month and year.
- **modal:** Month and year are displayed together, clicking the text opens a month picker, clicking the dropdown arrow opens a year picker. There are also arrow buttons to scroll between months."""

    no_month_picker = traitlets.Bool(allow_none=True).tag(sync=True)
    """Only applies to `controlVariant="modal"`, the month and year picker buttons are combined into one that only opens the year picker."""

    next_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the icon for next month/year button."""

    prev_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the icon for previous month/year button."""

    mode_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon displayed next to the current month and year, toggles year selection when clicked."""

    view_mode = traitlets.Any(allow_none=True).tag(sync=True)
    """Determines which picker in the date or month picker is being displayed. Allowed values: `'month'`, `'months'`, `'year'`."""

    hide_weekdays = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the weekdays."""

    show_week = traitlets.Bool(allow_none=True).tag(sync=True)
    """Toggles visibility of the week numbers in the body of the calendar."""

    reverse_transition = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The transition used when changing months into the past"""

    events = traitlets.Any(allow_none=True).tag(sync=True)
    """Array of dates or object defining events or colors or function returning boolean/color/array of colors."""

    event_color = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the color for event dots. It can be string (all events will have the same color) or `object` where attribute is the event date and value is boolean/color/array of colors for specified date or `function` taking date as a parameter and returning boolean/color/array of colors for that date."""

    show_adjacent_months = traitlets.Bool(allow_none=True).tag(sync=True)
    """Toggles visibility of days from previous and next months."""

    weekdays = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of weekdays to display. Does not affect the order."""

    weeks_in_month = traitlets.Any(allow_none=True).tag(sync=True)
    """A dynamic number of weeks in a month will grow and shrink depending on how many days are in the month. A static number always shows 7 weeks."""

    first_day_of_week = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the first day of the week, starting with 0 for Sunday. (Note: not guaranteed to work when using custom date adapters.)"""

    first_day_of_year = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the day that determines the first week of the year, starting with 0 for Sunday. For ISO 8601 this should be 4. (Note: not guaranteed to work when using custom date adapters.)"""

    allowed_dates = traitlets.Any(allow_none=True).tag(sync=True)
    """Restricts which dates can be selected."""

    weekday_format = traitlets.Any(allow_none=True).tag(sync=True)
    """Allows you to customize the format of the weekday string that appears in the body of the calendar. Uses `'narrow'` by default. (Note: not guaranteed to work when using custom date adapters.)"""

    allowed_months = traitlets.Any(allow_none=True).tag(sync=True)
    """Restricts which months can be selected."""

    allowed_years = traitlets.Any(allow_none=True).tag(sync=True)
    """Restricts which years can be selected."""

    def __init__(
        self,
        children=None,
        title="$vuetify.datePicker.title",
        text=None,
        border=False,
        model_value=None,
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        elevation=None,
        location=None,
        position=None,
        rounded=None,
        tile=False,
        tag="div",
        theme=None,
        color=None,
        disabled=None,
        max=None,
        min=None,
        multiple=False,
        header="$vuetify.datePicker.header",
        bg_color=None,
        transition="picker-transition",
        divided=False,
        landscape=False,
        hide_header=False,
        hide_title=False,
        year=None,
        month=None,
        header_color=None,
        header_date_format="normalDateWithWeekday",
        landscape_header_width=None,
        control_height=None,
        control_variant="docked",
        no_month_picker=False,
        next_icon="$next",
        prev_icon="$prev",
        mode_icon="$subgroup",
        view_mode="month",
        hide_weekdays=False,
        show_week=False,
        reverse_transition="picker-reverse-transition",
        events=None,
        event_color=None,
        show_adjacent_months=False,
        weekdays="[0, 1, 2, 3, 4, 5, 6]",
        weeks_in_month="static",
        first_day_of_week=None,
        first_day_of_year=None,
        allowed_dates=None,
        weekday_format=None,
        allowed_months=None,
        allowed_years=None,
        **kwargs
    ):
        """Initialize a DatePicker widget."""
        self.children = children
        self.title = title
        self.text = text
        self.border = border
        self.model_value = model_value
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.elevation = elevation
        self.location = location
        self.position = position
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.disabled = disabled
        self.max = max
        self.min = min
        self.multiple = multiple
        self.header = header
        self.bg_color = bg_color
        self.transition = transition
        self.divided = divided
        self.landscape = landscape
        self.hide_header = hide_header
        self.hide_title = hide_title
        self.year = year
        self.month = month
        self.header_color = header_color
        self.header_date_format = header_date_format
        self.landscape_header_width = landscape_header_width
        self.control_height = control_height
        self.control_variant = control_variant
        self.no_month_picker = no_month_picker
        self.next_icon = next_icon
        self.prev_icon = prev_icon
        self.mode_icon = mode_icon
        self.view_mode = view_mode
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
        self.allowed_months = allowed_months
        self.allowed_years = allowed_years

        super().__init__(**kwargs)