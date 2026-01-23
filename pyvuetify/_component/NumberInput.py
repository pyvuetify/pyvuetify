import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class NumberInput(anywidget.AnyWidget):
    """The NumberInput component.

    

    Args:
        children: The child nodes of the DOM element.
        flat: Removes box shadow when using a variant with elevation.
        type: **IGNORED** underlying input is always of type 'text'
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        error: Puts the input in a manual error state.
        reverse: Reverses the orientation.
        density: Adjusts the vertical height used by the component.
        max_width: Sets the maximum width for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        rounded: Adds a border radius to the input.
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.
        name: Sets the component's name attribute.
        autocomplete: Helps influence browser's suggestions. Special value **suppress** manipulates fields `name` attribute while **off** relies on browser's good will to stop suggesting values. Any other value is passed to the native `autocomplete` on the underlying element.
        disabled: Removes the ability to click or target the input.
        max: Specifies the maximum allowable value for the input.
        min: Specifies the minimum allowable value for the input.
        placeholder: Sets the input’s placeholder text.
        step: Defines the interval between allowed values when the user increments or decrements the input
        id: Sets the DOM id on the component.
        prefix: Displays prefix text.
        role: The role attribute applied to the input.
        autofocus: Enables autofocus.
        active: Controls the **active** state of the item. This is typically used to highlight the component.
        base_color: Sets the color of the input when it is not focused.
        prepend_icon: Prepends an icon to the outside the component's input, uses the same syntax as `v-icon`.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        readonly: Puts input in readonly state.
        loading: Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.
        label: Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        counter: Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
        persistent_placeholder: Forces placeholder to always be visible.
        persistent_counter: Forces counter to always be visible.
        suffix: Displays suffix text.
        center_affix: Vertically align **appendInner**, **prependInner**, **clearIcon** and **label** in the center.
        glow: Makes prepend/append icons full opacity when the field is focused and apply color.
        icon_color: Sets the color of the prepend/append icons.
        hide_spin_buttons: Hides spin buttons on the input when type is set to `number`.
        hint: Displays hint text below the input when focused. Force this always open with the [persistent-hint](#props-persistent-hint) property.
        persistent_hint: Forces [hint](#props-hint) to always be visible.
        messages: Displays a list of messages or a single message if using a string.
        error_messages: Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation.
        max_errors: Control the maximum number of shown errors from validation.
        rules: Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`.
        validate_on: Change what type of event triggers validation to run.
        focused: Forces a focused state styling on the component.
        hide_details: Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display.
        append_inner_icon: Creates a [v-icon](/api/v-icon/) component in the **append-inner** slot.
        clearable: Allows for the component to be cleared.
        clear_icon: The icon used when the **clearable** prop is set to true.
        dirty: Manually apply the dirty state styling.
        persistent_clear: Always show the clearable icon when the input is dirty (By default it only shows on hover).
        prepend_inner_icon: Creates a [v-icon](/api/v-icon/) component in the **prepend-inner** slot.
        single_line: Label does not move on focus/dirty.
        counter_value: Function returns the counter display text.
        model_modifiers: **FOR INTERNAL USE ONLY**
        control_variant: The color of the control. It defaults to the value of `variant` prop.
        inset: Applies an indentation to the dividers used in the stepper buttons.
        hide_input: Hide the input field.
        precision: Enforces strict precision. It is expected to be an integer value in range between `0` and `15`, or null for unrestricted.
        min_fraction_digits: Specifies the minimum fraction digits to be displayed (capped to `precision`). Defaults to `precision` when not explicitly set.
        decimal_separator: Expects single character to be used as decimal separator.

    Returns:
        A VNumberInput widget.

    seealso:
        `https://vuetifyjs.com/api/v-number-input`__
    """

    _esm = bundled_path / "VNumberInput.js"
    _css = bundled_path / "VNumberInput-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes box shadow when using a variant with elevation."""

    type = traitlets.Unicode(allow_none=True).tag(sync=True)
    """**IGNORED** underlying input is always of type 'text'"""

    model_value = traitlets.Float(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    error = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the input in a manual error state."""

    reverse = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reverses the orientation."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Adds a border radius to the input."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the component's name attribute."""

    autocomplete = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Helps influence browser's suggestions. Special value **suppress** manipulates fields `name` attribute while **off** relies on browser's good will to stop suggesting values. Any other value is passed to the native `autocomplete` on the underlying element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the input."""

    max = traitlets.Float(allow_none=True).tag(sync=True)
    """Specifies the maximum allowable value for the input."""

    min = traitlets.Float(allow_none=True).tag(sync=True)
    """Specifies the minimum allowable value for the input."""

    placeholder = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the input’s placeholder text."""

    step = traitlets.Float(allow_none=True).tag(sync=True)
    """Defines the interval between allowed values when the user increments or decrements the input"""

    id = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the DOM id on the component."""

    prefix = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Displays prefix text."""

    role = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The role attribute applied to the input."""

    autofocus = traitlets.Bool(allow_none=True).tag(sync=True)
    """Enables autofocus."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Controls the **active** state of the item. This is typically used to highlight the component."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of the input when it is not focused."""

    prepend_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Prepends an icon to the outside the component's input, uses the same syntax as `v-icon`."""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts input in readonly state."""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color."""

    label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    counter = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation."""

    persistent_placeholder = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces placeholder to always be visible."""

    persistent_counter = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces counter to always be visible."""

    suffix = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Displays suffix text."""

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

    messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays a list of messages or a single message if using a string."""

    error_messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation."""

    max_errors = traitlets.Any(allow_none=True).tag(sync=True)
    """Control the maximum number of shown errors from validation."""

    rules = traitlets.Any(allow_none=True).tag(sync=True)
    """Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`."""

    validate_on = traitlets.Any(allow_none=True).tag(sync=True)
    """Change what type of event triggers validation to run."""

    focused = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces a focused state styling on the component."""

    hide_details = traitlets.Any(allow_none=True).tag(sync=True)
    """Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display."""

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

    control_variant = traitlets.Any(allow_none=True).tag(sync=True)
    """The color of the control. It defaults to the value of `variant` prop."""

    inset = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies an indentation to the dividers used in the stepper buttons."""

    hide_input = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the input field."""

    precision = traitlets.Float(allow_none=True).tag(sync=True)
    """Enforces strict precision. It is expected to be an integer value in range between `0` and `15`, or null for unrestricted."""

    min_fraction_digits = traitlets.Float(allow_none=True).tag(sync=True)
    """Specifies the minimum fraction digits to be displayed (capped to `precision`). Defaults to `precision` when not explicitly set."""

    decimal_separator = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Expects single character to be used as decimal separator."""

    def __init__(
        self,
        children=None,
        flat=False,
        type="text",
        model_value=None,
        error=False,
        reverse=False,
        density="default",
        max_width=None,
        min_width=None,
        width=None,
        rounded=None,
        tile=False,
        theme=None,
        color=None,
        variant="filled",
        name=None,
        autocomplete=None,
        disabled=None,
        max="9007199254740991",
        min="-9007199254740991",
        placeholder=None,
        step="1",
        id=None,
        prefix=None,
        role=None,
        autofocus=False,
        active=False,
        base_color=None,
        prepend_icon=None,
        append_icon=None,
        readonly=None,
        loading=False,
        label=None,
        bg_color=None,
        counter=False,
        persistent_placeholder=False,
        persistent_counter=False,
        suffix=None,
        center_affix=None,
        glow=False,
        icon_color=False,
        hide_spin_buttons=False,
        hint=None,
        persistent_hint=False,
        messages="[]",
        error_messages="[]",
        max_errors="1",
        rules="[]",
        validate_on=None,
        focused=False,
        hide_details=False,
        append_inner_icon=None,
        clearable=False,
        clear_icon="$clear",
        dirty=False,
        persistent_clear=False,
        prepend_inner_icon=None,
        single_line=False,
        counter_value=None,
        model_modifiers=None,
        control_variant="default",
        inset=False,
        hide_input=False,
        precision="0",
        min_fraction_digits=None,
        decimal_separator=None,
        **kwargs
    ):
        """Initialize a NumberInput widget."""
        self.children = children
        self.flat = flat
        self.type = type
        self.model_value = model_value
        self.error = error
        self.reverse = reverse
        self.density = density
        self.max_width = max_width
        self.min_width = min_width
        self.width = width
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.color = color
        self.variant = variant
        self.name = name
        self.autocomplete = autocomplete
        self.disabled = disabled
        self.max = max
        self.min = min
        self.placeholder = placeholder
        self.step = step
        self.id = id
        self.prefix = prefix
        self.role = role
        self.autofocus = autofocus
        self.active = active
        self.base_color = base_color
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.readonly = readonly
        self.loading = loading
        self.label = label
        self.bg_color = bg_color
        self.counter = counter
        self.persistent_placeholder = persistent_placeholder
        self.persistent_counter = persistent_counter
        self.suffix = suffix
        self.center_affix = center_affix
        self.glow = glow
        self.icon_color = icon_color
        self.hide_spin_buttons = hide_spin_buttons
        self.hint = hint
        self.persistent_hint = persistent_hint
        self.messages = messages
        self.error_messages = error_messages
        self.max_errors = max_errors
        self.rules = rules
        self.validate_on = validate_on
        self.focused = focused
        self.hide_details = hide_details
        self.append_inner_icon = append_inner_icon
        self.clearable = clearable
        self.clear_icon = clear_icon
        self.dirty = dirty
        self.persistent_clear = persistent_clear
        self.prepend_inner_icon = prepend_inner_icon
        self.single_line = single_line
        self.counter_value = counter_value
        self.model_modifiers = model_modifiers
        self.control_variant = control_variant
        self.inset = inset
        self.hide_input = hide_input
        self.precision = precision
        self.min_fraction_digits = min_fraction_digits
        self.decimal_separator = decimal_separator

        super().__init__(**kwargs)