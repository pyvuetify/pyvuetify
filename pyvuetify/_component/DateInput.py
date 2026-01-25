import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DateInput(anywidget.AnyWidget):
    """The DateInput component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        flat: Removes box shadow when using a variant with elevation.
        tag: Specify a custom tag used on the root element.
        type: Sets input type.
        reverse: Reverses the orientation.
        name: Sets the component's name attribute.
        error: Puts the input in a manual error state.
        header: Text shown when no **display-date** is set.
        label: Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.
        menu: Renders with the menu open by default.
        title: Specify a title text for the component.
        autocomplete: Helps influence browser's suggestions. Special value **suppress** manipulates fields `name` attribute while **off** relies on browser's good will to stop suggesting values. Any other value is passed to the native `autocomplete` on the underlying element.
        disabled: Removes the ability to click or target the input.
        max: Maximum allowed date/month (ISO 8601 format).
        min: Minimum allowed date/month (ISO 8601 format).
        multiple: Allow the selection of multiple dates. The **range** value selects all dates between two selections.
        placeholder: Sets the input’s placeholder text.
        width: Width of the picker.
        id: Sets the DOM id on the component.
        prefix: Displays prefix text.
        role: The role attribute applied to the input.
        autofocus: Enables autofocus.
        model_value: Represents the committed v-model value
        location: Specifies the date picker's location. Can combine by using a space separated string.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Adds a border radius to the input.
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        text: Specify content text for the component.
        variant: Applies a distinct style to the component.
        transition: The transition used when changing months into the future
        max_width: Sets the maximum width for the component.
        min_width: Sets the minimum width for the component.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        mobile: Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint
        mobile_breakpoint: Overrides the display configuration default screen size that the component should be considered in mobile.
        position: Sets the position for the component.
        base_color: Sets the color of the input when it is not focused.
        active: Controls the **active** state of the item. This is typically used to highlight the component.
        prepend_icon: Prepends an icon to the outside the component's input, uses the same syntax as `v-icon`.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        readonly: Puts input in readonly state.
        loading: Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.
        divided: Adds a divider between the header and controls.
        weekdays: An array of weekdays to display. Does not affect the order.
        first_day_of_week: Sets the first day of the week, starting with 0 for Sunday. (Note: not guaranteed to work when using custom date adapters.)
        first_day_of_year: Sets the day that determines the first week of the year, starting with 0 for Sunday. For ISO 8601 this should be 4. (Note: not guaranteed to work when using custom date adapters.)
        weekday_format: Allows you to customize the format of the weekday string that appears in the body of the calendar. Uses `'narrow'` by default. (Note: not guaranteed to work when using custom date adapters.)
        month: Sets the month.
        events: Array of dates or object defining events or colors or function returning boolean/color/array of colors.
        event_color: Sets the color for event dots. It can be string (all events will have the same color) or `object` where attribute is the event date and value is boolean/color/array of colors for specified date or `function` taking date as a parameter and returning boolean/color/array of colors for that date.
        year: Sets the year.
        show_week: Toggles visibility of the week numbers in the body of the calendar.
        hide_header: Hides the header.
        messages: Displays a list of messages or a single message if using a string.
        next_icon: Sets the icon for next month/year button.
        prev_icon: Sets the icon for previous month/year button.
        reverse_transition: The transition used when changing months into the past
        center_affix: Vertically align **appendInner**, **prependInner**, **clearIcon** and **label** in the center.
        glow: Makes prepend/append icons full opacity when the field is focused and apply color.
        icon_color: Sets the color of the prepend/append icons.
        hide_spin_buttons: Hides spin buttons on the input when type is set to `number`.
        hint: Displays hint text below the input when focused. Force this always open with the [persistent-hint](#props-persistent-hint) property.
        persistent_hint: Forces [hint](#props-hint) to always be visible.
        error_messages: Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation.
        max_errors: Control the maximum number of shown errors from validation.
        rules: Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`.
        validate_on: Change what type of event triggers validation to run.
        validation_value: The value used when applying validation rules.
        focused: Forces a focused state styling on the component.
        hide_details: Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display.
        counter: Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
        landscape: Changes the picker to landscape mode.
        hide_title: Hide the picker title.
        cancel_text: Text for the cancel button
        ok_text: Text for the ok button
        hide_actions: Hide the Cancel and OK buttons, and automatically update the value when a date is selected.
        persistent_placeholder: Forces placeholder to always be visible.
        persistent_counter: Forces counter to always be visible.
        suffix: Displays suffix text.
        append_inner_icon: Creates a [v-icon](/api/v-icon/) component in the **append-inner** slot.
        clearable: Allows for the component to be cleared.
        clear_icon: The icon used when the **clearable** prop is set to true.
        dirty: Manually apply the dirty state styling.
        persistent_clear: Always show the clearable icon when the input is dirty (By default it only shows on hover).
        prepend_inner_icon: Creates a [v-icon](/api/v-icon/) component in the **prepend-inner** slot.
        single_line: Label does not move on focus/dirty.
        counter_value: Function returns the counter display text.
        model_modifiers: **FOR INTERNAL USE ONLY**
        picker_props: Pass props through to the picker component. Intended for props that conflict with `v-text-field` (`color`, `width`, `rounded`, etc.)
        display_format: The format of the date that is displayed in the input. Can use any format [here](/features/dates/#format-options) or a custom function.
        update_on: Specifies when the text input should update the model value. If empty, the text field will go into read-only state.
        header_color: Allows you to set a different color for the header when used in conjunction with the `color` prop.
        header_date_format: Allows you to customize the format of the date selection text that appears in the header of the calendar.
        landscape_header_width: Sets header width when in landscape mode.
        control_height: Sets the height of the controls.
        control_variant: - **docked:** Separate control groups for month and year.
- **modal:** Month and year are displayed together, clicking the text opens a month picker, clicking the dropdown arrow opens a year picker. There are also arrow buttons to scroll between months.
        no_month_picker: Only applies to `controlVariant="modal"`, the month and year picker buttons are combined into one that only opens the year picker.
        mode_icon: Icon displayed next to the current month and year, toggles year selection when clicked.
        view_mode: Determines which picker in the date or month picker is being displayed. Allowed values: `'month'`, `'months'`, `'year'`.
        hide_weekdays: Hides the weekdays.
        show_adjacent_months: Toggles visibility of days from previous and next months.
        weeks_in_month: A dynamic number of weeks in a month will grow and shrink depending on how many days are in the month. A static number always shows 7 weeks.
        allowed_dates: Restricts which dates can be selected.
        allowed_months: Restricts which months can be selected.
        allowed_years: Restricts which years can be selected.
        input_format: Format for manual date input. Use yyyy, mm, dd with separators '.', '-', '/' (e.g. 'yyyy-mm-dd', 'dd/mm/yyyy').

    Returns:
        A VDateInput widget.

    seealso:
        `https://vuetifyjs.com/api/v-date-input`__
    """

    _esm = bundled_path / "VDateInput.js"
    _css = bundled_path / "VDateInput-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes box shadow when using a variant with elevation."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    type = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets input type."""

    reverse = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reverses the orientation."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the component's name attribute."""

    error = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the input in a manual error state."""

    header = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text shown when no **display-date** is set."""

    label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component."""

    menu = traitlets.Bool(allow_none=True).tag(sync=True)
    """Renders with the menu open by default."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    autocomplete = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Helps influence browser's suggestions. Special value **suppress** manipulates fields `name` attribute while **off** relies on browser's good will to stop suggesting values. Any other value is passed to the native `autocomplete` on the underlying element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the input."""

    max = traitlets.Any(allow_none=True).tag(sync=True)
    """Maximum allowed date/month (ISO 8601 format)."""

    min = traitlets.Any(allow_none=True).tag(sync=True)
    """Minimum allowed date/month (ISO 8601 format)."""

    multiple = traitlets.Any(allow_none=True).tag(sync=True)
    """Allow the selection of multiple dates. The **range** value selects all dates between two selections."""

    placeholder = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the input’s placeholder text."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Width of the picker."""

    id = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the DOM id on the component."""

    prefix = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Displays prefix text."""

    role = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The role attribute applied to the input."""

    autofocus = traitlets.Bool(allow_none=True).tag(sync=True)
    """Enables autofocus."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Represents the committed v-model value"""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the date picker's location. Can combine by using a space separated string."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Adds a border radius to the input."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    transition = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The transition used when changing months into the future"""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    mobile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint"""

    mobile_breakpoint = traitlets.Any(allow_none=True).tag(sync=True)
    """Overrides the display configuration default screen size that the component should be considered in mobile."""

    position = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the position for the component."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of the input when it is not focused."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Controls the **active** state of the item. This is typically used to highlight the component."""

    prepend_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Prepends an icon to the outside the component's input, uses the same syntax as `v-icon`."""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts input in readonly state."""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color."""

    divided = traitlets.Bool(allow_none=True).tag(sync=True)
    """Adds a divider between the header and controls."""

    weekdays = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of weekdays to display. Does not affect the order."""

    first_day_of_week = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the first day of the week, starting with 0 for Sunday. (Note: not guaranteed to work when using custom date adapters.)"""

    first_day_of_year = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the day that determines the first week of the year, starting with 0 for Sunday. For ISO 8601 this should be 4. (Note: not guaranteed to work when using custom date adapters.)"""

    weekday_format = traitlets.Any(allow_none=True).tag(sync=True)
    """Allows you to customize the format of the weekday string that appears in the body of the calendar. Uses `'narrow'` by default. (Note: not guaranteed to work when using custom date adapters.)"""

    month = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the month."""

    events = traitlets.Any(allow_none=True).tag(sync=True)
    """Array of dates or object defining events or colors or function returning boolean/color/array of colors."""

    event_color = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the color for event dots. It can be string (all events will have the same color) or `object` where attribute is the event date and value is boolean/color/array of colors for specified date or `function` taking date as a parameter and returning boolean/color/array of colors for that date."""

    year = traitlets.Float(allow_none=True).tag(sync=True)
    """Sets the year."""

    show_week = traitlets.Bool(allow_none=True).tag(sync=True)
    """Toggles visibility of the week numbers in the body of the calendar."""

    hide_header = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the header."""

    messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays a list of messages or a single message if using a string."""

    next_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the icon for next month/year button."""

    prev_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the icon for previous month/year button."""

    reverse_transition = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The transition used when changing months into the past"""

    center_affix = traitlets.Bool(allow_none=True).tag(sync=True)
    """Vertically align **appendInner**, **prependInner**, **clearIcon** and **label** in the center."""

    glow = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes prepend/append icons full opacity when the field is focused and apply color."""

    icon_color = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the color of the prepend/append icons."""

    hide_spin_buttons = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides spin buttons on the input when type is set to `number`."""

    hint = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Displays hint text below the input when focused. Force this always open with the [persistent-hint](#props-persistent-hint) property."""

    persistent_hint = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces [hint](#props-hint) to always be visible."""

    error_messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation."""

    max_errors = traitlets.Any(allow_none=True).tag(sync=True)
    """Control the maximum number of shown errors from validation."""

    rules = traitlets.Any(allow_none=True).tag(sync=True)
    """Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`."""

    validate_on = traitlets.Any(allow_none=True).tag(sync=True)
    """Change what type of event triggers validation to run."""

    validation_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The value used when applying validation rules."""

    focused = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces a focused state styling on the component."""

    hide_details = traitlets.Any(allow_none=True).tag(sync=True)
    """Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display."""

    counter = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation."""

    landscape = traitlets.Bool(allow_none=True).tag(sync=True)
    """Changes the picker to landscape mode."""

    hide_title = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the picker title."""

    cancel_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text for the cancel button"""

    ok_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text for the ok button"""

    hide_actions = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the Cancel and OK buttons, and automatically update the value when a date is selected."""

    persistent_placeholder = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces placeholder to always be visible."""

    persistent_counter = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces counter to always be visible."""

    suffix = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Displays suffix text."""

    append_inner_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component in the **append-inner** slot."""

    clearable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows for the component to be cleared."""

    clear_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The icon used when the **clearable** prop is set to true."""

    dirty = traitlets.Bool(allow_none=True).tag(sync=True)
    """Manually apply the dirty state styling."""

    persistent_clear = traitlets.Bool(allow_none=True).tag(sync=True)
    """Always show the clearable icon when the input is dirty (By default it only shows on hover)."""

    prepend_inner_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component in the **prepend-inner** slot."""

    single_line = traitlets.Bool(allow_none=True).tag(sync=True)
    """Label does not move on focus/dirty."""

    counter_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Function returns the counter display text."""

    model_modifiers = traitlets.Any(allow_none=True).tag(sync=True)
    """**FOR INTERNAL USE ONLY**"""

    picker_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Pass props through to the picker component. Intended for props that conflict with `v-text-field` (`color`, `width`, `rounded`, etc.)"""

    display_format = traitlets.Any(allow_none=True).tag(sync=True)
    """The format of the date that is displayed in the input. Can use any format [here](/features/dates/#format-options) or a custom function."""

    update_on = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies when the text input should update the model value. If empty, the text field will go into read-only state."""

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

    mode_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon displayed next to the current month and year, toggles year selection when clicked."""

    view_mode = traitlets.Any(allow_none=True).tag(sync=True)
    """Determines which picker in the date or month picker is being displayed. Allowed values: `'month'`, `'months'`, `'year'`."""

    hide_weekdays = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the weekdays."""

    show_adjacent_months = traitlets.Bool(allow_none=True).tag(sync=True)
    """Toggles visibility of days from previous and next months."""

    weeks_in_month = traitlets.Any(allow_none=True).tag(sync=True)
    """A dynamic number of weeks in a month will grow and shrink depending on how many days are in the month. A static number always shows 7 weeks."""

    allowed_dates = traitlets.Any(allow_none=True).tag(sync=True)
    """Restricts which dates can be selected."""

    allowed_months = traitlets.Any(allow_none=True).tag(sync=True)
    """Restricts which months can be selected."""

    allowed_years = traitlets.Any(allow_none=True).tag(sync=True)
    """Restricts which years can be selected."""

    input_format = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Format for manual date input. Use yyyy, mm, dd with separators '.', '-', '/' (e.g. 'yyyy-mm-dd', 'dd/mm/yyyy')."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        flat=False,
        tag="div",
        type="text",
        reverse=False,
        name=None,
        error=False,
        header="$vuetify.datePicker.header",
        label=None,
        menu=False,
        title="$vuetify.datePicker.title",
        autocomplete=None,
        disabled=None,
        max=None,
        min=None,
        multiple=False,
        placeholder=None,
        width=None,
        id=None,
        prefix=None,
        role=None,
        autofocus=False,
        model_value=None,
        location="bottom start",
        color=None,
        density="default",
        border=False,
        elevation=None,
        rounded=None,
        tile=False,
        theme=None,
        text=None,
        variant="filled",
        transition="picker-transition",
        max_width=None,
        min_width=None,
        bg_color=None,
        mobile=None,
        mobile_breakpoint=None,
        position=None,
        base_color=None,
        active=False,
        prepend_icon="$calendar",
        append_icon=None,
        readonly=None,
        loading=False,
        divided=False,
        weekdays="[0, 1, 2, 3, 4, 5, 6]",
        first_day_of_week=None,
        first_day_of_year=None,
        weekday_format=None,
        month=None,
        events=None,
        event_color=None,
        year=None,
        show_week=False,
        hide_header=True,
        messages="[]",
        next_icon="$next",
        prev_icon="$prev",
        reverse_transition="picker-reverse-transition",
        center_affix=None,
        glow=False,
        icon_color=False,
        hide_spin_buttons=False,
        hint=None,
        persistent_hint=False,
        error_messages="[]",
        max_errors="1",
        rules="[]",
        validate_on=None,
        validation_value=None,
        focused=False,
        hide_details=False,
        counter=False,
        landscape=False,
        hide_title=False,
        cancel_text="$vuetify.confirmEdit.cancel",
        ok_text="$vuetify.confirmEdit.ok",
        hide_actions=True,
        persistent_placeholder=False,
        persistent_counter=False,
        suffix=None,
        append_inner_icon=None,
        clearable=False,
        clear_icon="$clear",
        dirty=False,
        persistent_clear=False,
        prepend_inner_icon=None,
        single_line=False,
        counter_value=None,
        model_modifiers=None,
        picker_props=None,
        display_format=None,
        update_on="['blur', 'enter']",
        header_color=None,
        header_date_format="normalDateWithWeekday",
        landscape_header_width=None,
        control_height=None,
        control_variant="docked",
        no_month_picker=False,
        mode_icon="$subgroup",
        view_mode="month",
        hide_weekdays=False,
        show_adjacent_months=True,
        weeks_in_month="static",
        allowed_dates=None,
        allowed_months=None,
        allowed_years=None,
        input_format=None,
        **kwargs
    ):
        """Initialize a DateInput widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.flat = flat
        self.tag = tag
        self.type = type
        self.reverse = reverse
        self.name = name
        self.error = error
        self.header = header
        self.label = label
        self.menu = menu
        self.title = title
        self.autocomplete = autocomplete
        self.disabled = disabled
        self.max = max
        self.min = min
        self.multiple = multiple
        self.placeholder = placeholder
        self.width = width
        self.id = id
        self.prefix = prefix
        self.role = role
        self.autofocus = autofocus
        self.model_value = model_value
        self.location = location
        self.color = color
        self.density = density
        self.border = border
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.text = text
        self.variant = variant
        self.transition = transition
        self.max_width = max_width
        self.min_width = min_width
        self.bg_color = bg_color
        self.mobile = mobile
        self.mobile_breakpoint = mobile_breakpoint
        self.position = position
        self.base_color = base_color
        self.active = active
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.readonly = readonly
        self.loading = loading
        self.divided = divided
        self.weekdays = weekdays
        self.first_day_of_week = first_day_of_week
        self.first_day_of_year = first_day_of_year
        self.weekday_format = weekday_format
        self.month = month
        self.events = events
        self.event_color = event_color
        self.year = year
        self.show_week = show_week
        self.hide_header = hide_header
        self.messages = messages
        self.next_icon = next_icon
        self.prev_icon = prev_icon
        self.reverse_transition = reverse_transition
        self.center_affix = center_affix
        self.glow = glow
        self.icon_color = icon_color
        self.hide_spin_buttons = hide_spin_buttons
        self.hint = hint
        self.persistent_hint = persistent_hint
        self.error_messages = error_messages
        self.max_errors = max_errors
        self.rules = rules
        self.validate_on = validate_on
        self.validation_value = validation_value
        self.focused = focused
        self.hide_details = hide_details
        self.counter = counter
        self.landscape = landscape
        self.hide_title = hide_title
        self.cancel_text = cancel_text
        self.ok_text = ok_text
        self.hide_actions = hide_actions
        self.persistent_placeholder = persistent_placeholder
        self.persistent_counter = persistent_counter
        self.suffix = suffix
        self.append_inner_icon = append_inner_icon
        self.clearable = clearable
        self.clear_icon = clear_icon
        self.dirty = dirty
        self.persistent_clear = persistent_clear
        self.prepend_inner_icon = prepend_inner_icon
        self.single_line = single_line
        self.counter_value = counter_value
        self.model_modifiers = model_modifiers
        self.picker_props = picker_props
        self.display_format = display_format
        self.update_on = update_on
        self.header_color = header_color
        self.header_date_format = header_date_format
        self.landscape_header_width = landscape_header_width
        self.control_height = control_height
        self.control_variant = control_variant
        self.no_month_picker = no_month_picker
        self.mode_icon = mode_icon
        self.view_mode = view_mode
        self.hide_weekdays = hide_weekdays
        self.show_adjacent_months = show_adjacent_months
        self.weeks_in_month = weeks_in_month
        self.allowed_dates = allowed_dates
        self.allowed_months = allowed_months
        self.allowed_years = allowed_years
        self.input_format = input_format

        super().__init__(**kwargs)