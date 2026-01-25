import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Calendar(anywidget.AnyWidget):
    """The Calendar component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        type: A string which is one of `month`, `week`, `day`, `4day`, `custom-weekly`, `custom-daily`, and `category`. The custom types look at the `start` and `end` dates passed to the component as opposed to the `value`.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        start: The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.
        end: The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.
        category_days: The number of days to render in the `category` view.
        categories: Specifies what categories to display in the `category` view. This controls the order of the categories as well. If the calendar uses events any categories specified in those events not specified in this value are dynamically rendered in the view unless `category-hide-dynamic` is true.
        category_text: If categories is a list of objects, you can use this to determine what property to print out as the category text on the calendar. You can provide a function to do some logic or just define the prop name. It's similar to item-text on v-select
        max_days: The maximum number of days to display in the custom calendar if an `end` day is not set.
        category_hide_dynamic: Sets whether categories specified in an event should be hidden if it's not defined in `categories`.
        category_show_all: Set whether the `category` view should show all defined `categories` even if there are no events for a category.
        category_for_invalid: The category to place events in that have invalid categories. A category is invalid when it is not a string. By default events without a category are not displayed until this value is specified.
        weekdays: An array of weekdays to display. Does not affect the order.
        first_day_of_week: Sets the first day of the week, starting with 0 for Sunday. (Note: not guaranteed to work when using custom date adapters.)
        first_day_of_year: Sets the day that determines the first week of the year, starting with 0 for Sunday. For ISO 8601 this should be 4. (Note: not guaranteed to work when using custom date adapters.)
        weekday_format: Formats day of the week string that appears in the header to specified locale
        day_format: Formats day of the month string that appears in a day to a specified locale
        locale: The locale of the calendar.
        now: Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now.
        events: An array of event objects with a property for a start timestamp and optionally a name and end timestamp. If an end timestamp is not given, the value of start will be used. If no name is given, you must provide an implementation for the `event` slot.
        event_start: Set property of *event*'s start timestamp.
        event_end: Set property of *event*'s end timestamp.
        event_timed: If Dates or milliseconds are used as the start or end timestamp of an event, this prop can be a string to a property on the event that is truthy if the event is a timed event or a function which takes the event and returns a truthy value if the event is a timed event.
        event_category: Set property of *event*'s category. Instead of a property a function can be given which takes an event and returns the category.
        event_height: The height of an event in pixels in the `month` view and at the top of the `day` views.
        event_color: A background color for all events or a function which accepts an event object passed to the calendar to return a color.
        event_text_color: A text color for all events or a function which accepts an event object passed to the calendar to return a color.
        event_name: Set property of *event*'s displayed name, or a function which accepts an event object passed to the calendar as the first argument and a flag signalling whether the name is for a timed event (true) or an event over a day.
        event_overlap_threshold: A value in minutes that's used to determine whether two timed events should be placed in column beside each other or should be treated as slightly overlapping events.
        event_overlap_mode: One of `stack`, `column`, or a custom render function
        event_more: Whether the more 'button' is displayed on a calendar with too many events in a given day. It will say something like '5 more' and when clicked generates a `click:more` event.
        event_more_text: The text to display in the more 'button' given the number of hidden events.
        event_ripple: Applies the `v-ripple` directive.
        event_margin_bottom: Margin bottom for event

    Returns:
        A VCalendar widget.

    seealso:
        `https://vuetifyjs.com/api/v-calendar`__
    """

    _esm = bundled_path / "VCalendar.js"
    _css = bundled_path / "VCalendar-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    type = traitlets.Any(allow_none=True).tag(sync=True)
    """A string which is one of `month`, `week`, `day`, `4day`, `custom-weekly`, `custom-daily`, and `category`. The custom types look at the `start` and `end` dates passed to the component as opposed to the `value`."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    start = traitlets.Any(allow_none=True).tag(sync=True)
    """The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar."""

    end = traitlets.Any(allow_none=True).tag(sync=True)
    """The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar."""

    category_days = traitlets.Any(allow_none=True).tag(sync=True)
    """The number of days to render in the `category` view."""

    categories = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies what categories to display in the `category` view. This controls the order of the categories as well. If the calendar uses events any categories specified in those events not specified in this value are dynamically rendered in the view unless `category-hide-dynamic` is true."""

    category_text = traitlets.Any(allow_none=True).tag(sync=True)
    """If categories is a list of objects, you can use this to determine what property to print out as the category text on the calendar. You can provide a function to do some logic or just define the prop name. It's similar to item-text on v-select"""

    max_days = traitlets.Float(allow_none=True).tag(sync=True)
    """The maximum number of days to display in the custom calendar if an `end` day is not set."""

    category_hide_dynamic = traitlets.Bool(allow_none=True).tag(sync=True)
    """Sets whether categories specified in an event should be hidden if it's not defined in `categories`."""

    category_show_all = traitlets.Bool(allow_none=True).tag(sync=True)
    """Set whether the `category` view should show all defined `categories` even if there are no events for a category."""

    category_for_invalid = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The category to place events in that have invalid categories. A category is invalid when it is not a string. By default events without a category are not displayed until this value is specified."""

    weekdays = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of weekdays to display. Does not affect the order."""

    first_day_of_week = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the first day of the week, starting with 0 for Sunday. (Note: not guaranteed to work when using custom date adapters.)"""

    first_day_of_year = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the day that determines the first week of the year, starting with 0 for Sunday. For ISO 8601 this should be 4. (Note: not guaranteed to work when using custom date adapters.)"""

    weekday_format = traitlets.Any(allow_none=True).tag(sync=True)
    """Formats day of the week string that appears in the header to specified locale"""

    day_format = traitlets.Any(allow_none=True).tag(sync=True)
    """Formats day of the month string that appears in a day to a specified locale"""

    locale = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The locale of the calendar."""

    now = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now."""

    events = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of event objects with a property for a start timestamp and optionally a name and end timestamp. If an end timestamp is not given, the value of start will be used. If no name is given, you must provide an implementation for the `event` slot."""

    event_start = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Set property of *event*'s start timestamp."""

    event_end = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Set property of *event*'s end timestamp."""

    event_timed = traitlets.Any(allow_none=True).tag(sync=True)
    """If Dates or milliseconds are used as the start or end timestamp of an event, this prop can be a string to a property on the event that is truthy if the event is a timed event or a function which takes the event and returns a truthy value if the event is a timed event."""

    event_category = traitlets.Any(allow_none=True).tag(sync=True)
    """Set property of *event*'s category. Instead of a property a function can be given which takes an event and returns the category."""

    event_height = traitlets.Float(allow_none=True).tag(sync=True)
    """The height of an event in pixels in the `month` view and at the top of the `day` views."""

    event_color = traitlets.Any(allow_none=True).tag(sync=True)
    """A background color for all events or a function which accepts an event object passed to the calendar to return a color."""

    event_text_color = traitlets.Any(allow_none=True).tag(sync=True)
    """A text color for all events or a function which accepts an event object passed to the calendar to return a color."""

    event_name = traitlets.Any(allow_none=True).tag(sync=True)
    """Set property of *event*'s displayed name, or a function which accepts an event object passed to the calendar as the first argument and a flag signalling whether the name is for a timed event (true) or an event over a day."""

    event_overlap_threshold = traitlets.Any(allow_none=True).tag(sync=True)
    """A value in minutes that's used to determine whether two timed events should be placed in column beside each other or should be treated as slightly overlapping events."""

    event_overlap_mode = traitlets.Any(allow_none=True).tag(sync=True)
    """One of `stack`, `column`, or a custom render function"""

    event_more = traitlets.Bool(allow_none=True).tag(sync=True)
    """Whether the more 'button' is displayed on a calendar with too many events in a given day. It will say something like '5 more' and when clicked generates a `click:more` event."""

    event_more_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The text to display in the more 'button' given the number of hidden events."""

    event_ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the `v-ripple` directive."""

    event_margin_bottom = traitlets.Float(allow_none=True).tag(sync=True)
    """Margin bottom for event"""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        type="month",
        model_value=None,
        start="2026-01-20",
        end=None,
        category_days="1",
        categories="",
        category_text=None,
        max_days="7",
        category_hide_dynamic=False,
        category_show_all=False,
        category_for_invalid="",
        weekdays="[0, 1, 2, 3, 4, 5, 6]",
        first_day_of_week=None,
        first_day_of_year=None,
        weekday_format=None,
        day_format=None,
        locale=None,
        now=None,
        events="[]",
        event_start="start",
        event_end="end",
        event_timed="timed",
        event_category="category",
        event_height="20",
        event_color="primary",
        event_text_color=None,
        event_name="name",
        event_overlap_threshold="60",
        event_overlap_mode="stack",
        event_more=True,
        event_more_text="$vuetify.calendar.moreEvents",
        event_ripple=None,
        event_margin_bottom="1",
        **kwargs
    ):
        """Initialize a Calendar widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.type = type
        self.model_value = model_value
        self.start = start
        self.end = end
        self.category_days = category_days
        self.categories = categories
        self.category_text = category_text
        self.max_days = max_days
        self.category_hide_dynamic = category_hide_dynamic
        self.category_show_all = category_show_all
        self.category_for_invalid = category_for_invalid
        self.weekdays = weekdays
        self.first_day_of_week = first_day_of_week
        self.first_day_of_year = first_day_of_year
        self.weekday_format = weekday_format
        self.day_format = day_format
        self.locale = locale
        self.now = now
        self.events = events
        self.event_start = event_start
        self.event_end = event_end
        self.event_timed = event_timed
        self.event_category = event_category
        self.event_height = event_height
        self.event_color = event_color
        self.event_text_color = event_text_color
        self.event_name = event_name
        self.event_overlap_threshold = event_overlap_threshold
        self.event_overlap_mode = event_overlap_mode
        self.event_more = event_more
        self.event_more_text = event_more_text
        self.event_ripple = event_ripple
        self.event_margin_bottom = event_margin_bottom

        super().__init__(**kwargs)