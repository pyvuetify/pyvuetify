import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Slider(anywidget.AnyWidget):
    """The Slider component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        error: Puts the input in a manual error state.
        reverse: Reverses the slider direction.
        density: Adjusts the vertical height used by the component.
        max_width: Sets the maximum width for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        name: Sets the component's name attribute.
        disabled: Removes the ability to click or target the component.
        max: Sets the maximum allowed value.
        min: Sets the minimum allowed value.
        step: If greater than 0, sets step interval for ticks.
        id: Sets the DOM id on the component.
        base_color: Sets the color of the input when it is not focused.
        prepend_icon: Prepends an icon to the component, uses the same syntax as `v-icon`.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        readonly: Puts input in readonly state.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        label: Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.
        center_affix: Vertically align **appendInner**, **prependInner**, **clearIcon** and **label** in the center.
        glow: Makes prepend/append icons full opacity when the input is focused and apply color.
        icon_color: Sets the color of the prepend/append icons.
        hide_spin_buttons: Hides spin buttons on the input when type is set to `number`.
        hint: Displays hint text below the input when focused. Force this always open with the [persistent-hint](#props-persistent-hint) property.
        persistent_hint: Forces [hint](#props-hint) to always be visible.
        messages: Displays a list of messages or a single message if using a string.
        direction: Changes the direction of the input.
        error_messages: Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation.
        max_errors: Control the maximum number of shown errors from validation.
        rules: Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`.
        validate_on: Change what type of event triggers validation to run.
        validation_value: The value used when applying validation rules.
        focused: Forces a focused state styling on the component.
        hide_details: Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display.
        thumb_color: Sets the thumb and thumb label color.
        thumb_label: Show thumb label. If `true` it shows label when using slider. If set to `'always'` it always shows label.
        thumb_size: Controls the size of the thumb label.
        show_ticks: Show track ticks. If `true` it shows ticks when using slider. If set to `'always'` it always shows ticks.
        ticks: Show track ticks. If `true` it shows ticks when using slider. If set to `'always'` it always shows ticks.
        tick_size: Controls the size of **ticks**
        track_color: Sets the track's color
        track_fill_color: Sets the track's fill color
        track_size: Sets the track's size (height).
        no_keyboard: **FOR INTERNAL USE ONLY** Ignore keyboard events.

    Returns:
        A VSlider widget.

    seealso:
        `https://vuetifyjs.com/api/v-slider`__
    """

    _esm = bundled_path / "VSlider.js"
    _css = bundled_path / "VSlider-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    error = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the input in a manual error state."""

    reverse = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reverses the slider direction."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the component's name attribute."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    max = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum allowed value."""

    min = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum allowed value."""

    step = traitlets.Any(allow_none=True).tag(sync=True)
    """If greater than 0, sets step interval for ticks."""

    id = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the DOM id on the component."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of the input when it is not focused."""

    prepend_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Prepends an icon to the component, uses the same syntax as `v-icon`."""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts input in readonly state."""

    ripple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component."""

    center_affix = traitlets.Bool(allow_none=True).tag(sync=True)
    """Vertically align **appendInner**, **prependInner**, **clearIcon** and **label** in the center."""

    glow = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes prepend/append icons full opacity when the input is focused and apply color."""

    icon_color = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the color of the prepend/append icons."""

    hide_spin_buttons = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides spin buttons on the input when type is set to `number`."""

    hint = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Displays hint text below the input when focused. Force this always open with the [persistent-hint](#props-persistent-hint) property."""

    persistent_hint = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces [hint](#props-hint) to always be visible."""

    messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays a list of messages or a single message if using a string."""

    direction = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the direction of the input."""

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

    thumb_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the thumb and thumb label color."""

    thumb_label = traitlets.Any(allow_none=True).tag(sync=True)
    """Show thumb label. If `true` it shows label when using slider. If set to `'always'` it always shows label."""

    thumb_size = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls the size of the thumb label."""

    show_ticks = traitlets.Any(allow_none=True).tag(sync=True)
    """Show track ticks. If `true` it shows ticks when using slider. If set to `'always'` it always shows ticks."""

    ticks = traitlets.Any(allow_none=True).tag(sync=True)
    """Show track ticks. If `true` it shows ticks when using slider. If set to `'always'` it always shows ticks."""

    tick_size = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls the size of **ticks**"""

    track_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the track's color"""

    track_fill_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the track's fill color"""

    track_size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the track's size (height)."""

    no_keyboard = traitlets.Bool(allow_none=True).tag(sync=True)
    """**FOR INTERNAL USE ONLY** Ignore keyboard events."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        model_value="0",
        error=False,
        reverse=False,
        density="default",
        max_width=None,
        min_width=None,
        width=None,
        elevation="2",
        rounded=None,
        tile=False,
        theme=None,
        color=None,
        name=None,
        disabled=None,
        max="100",
        min="0",
        step="0",
        id=None,
        base_color=None,
        prepend_icon=None,
        append_icon=None,
        readonly=None,
        ripple=True,
        label=None,
        center_affix=True,
        glow=False,
        icon_color=False,
        hide_spin_buttons=False,
        hint=None,
        persistent_hint=False,
        messages="[]",
        direction="horizontal",
        error_messages="[]",
        max_errors="1",
        rules="[]",
        validate_on=None,
        validation_value=None,
        focused=False,
        hide_details=False,
        thumb_color=None,
        thumb_label=None,
        thumb_size="20",
        show_ticks=False,
        ticks=None,
        tick_size="2",
        track_color=None,
        track_fill_color=None,
        track_size="4",
        no_keyboard=False,
        **kwargs
    ):
        """Initialize a Slider widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.model_value = model_value
        self.error = error
        self.reverse = reverse
        self.density = density
        self.max_width = max_width
        self.min_width = min_width
        self.width = width
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.color = color
        self.name = name
        self.disabled = disabled
        self.max = max
        self.min = min
        self.step = step
        self.id = id
        self.base_color = base_color
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.readonly = readonly
        self.ripple = ripple
        self.label = label
        self.center_affix = center_affix
        self.glow = glow
        self.icon_color = icon_color
        self.hide_spin_buttons = hide_spin_buttons
        self.hint = hint
        self.persistent_hint = persistent_hint
        self.messages = messages
        self.direction = direction
        self.error_messages = error_messages
        self.max_errors = max_errors
        self.rules = rules
        self.validate_on = validate_on
        self.validation_value = validation_value
        self.focused = focused
        self.hide_details = hide_details
        self.thumb_color = thumb_color
        self.thumb_label = thumb_label
        self.thumb_size = thumb_size
        self.show_ticks = show_ticks
        self.ticks = ticks
        self.tick_size = tick_size
        self.track_color = track_color
        self.track_fill_color = track_fill_color
        self.track_size = track_size
        self.no_keyboard = no_keyboard

        super().__init__(**kwargs)