import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Textarea(anywidget.AnyWidget):
    """The Textarea component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        flat: Removes box shadow when using a variant with elevation.
        reverse: Reverses the orientation.
        name: Sets the component's name attribute.
        error: Puts the input in a manual error state.
        label: Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.
        autocomplete: Helps influence browser's suggestions. Special value **suppress** manipulates fields `name` attribute while **off** relies on browser's good will to stop suggesting values. Any other value is passed to the native `autocomplete` on the underlying element.
        disabled: Removes the ability to click or target the input.
        placeholder: Sets the input's placeholder text.
        width: Sets the width for the component.
        id: Sets the DOM id on the component.
        prefix: Displays prefix text.
        autofocus: The element should be focused as soon as the page loads.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        variant: Applies a distinct style to the component.
        max_height: Alternative for **max-rows**. Specifies the maximum height in pixels (including the field padding) for **auto-grow**.
        max_width: Sets the maximum width for the component.
        min_width: Sets the minimum width for the component.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        base_color: Sets the color of the input when it is not focused.
        active: Controls the **active** state of the item. This is typically used to highlight the component.
        prepend_icon: Prepends an icon to the component, uses the same syntax as `v-icon`.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        readonly: Puts input in readonly state.
        loading: Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.
        messages: Displays a list of messages or a single message if using a string.
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
        counter_value: Display the input length but do not provide any validation.
        model_modifiers: **FOR INTERNAL USE ONLY**
        auto_grow: Automatically grow the textarea depending on amount of text.
        no_resize: Remove resize handle.
        rows: Default row count.
        max_rows: Specifies the maximum number of rows for **auto-grow**.

    Returns:
        A VTextarea widget.

    seealso:
        `https://vuetifyjs.com/api/v-textarea`__
    """

    _esm = bundled_path / "VTextarea.js"
    _css = bundled_path / "VTextarea-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes box shadow when using a variant with elevation."""

    reverse = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reverses the orientation."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the component's name attribute."""

    error = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the input in a manual error state."""

    label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component."""

    autocomplete = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Helps influence browser's suggestions. Special value **suppress** manipulates fields `name` attribute while **off** relies on browser's good will to stop suggesting values. Any other value is passed to the native `autocomplete` on the underlying element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the input."""

    placeholder = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the input's placeholder text."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    id = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the DOM id on the component."""

    prefix = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Displays prefix text."""

    autofocus = traitlets.Bool(allow_none=True).tag(sync=True)
    """The element should be focused as soon as the page loads."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Alternative for **max-rows**. Specifies the maximum height in pixels (including the field padding) for **auto-grow**."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of the input when it is not focused."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Controls the **active** state of the item. This is typically used to highlight the component."""

    prepend_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Prepends an icon to the component, uses the same syntax as `v-icon`."""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts input in readonly state."""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color."""

    messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays a list of messages or a single message if using a string."""

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
    """Display the input length but do not provide any validation."""

    model_modifiers = traitlets.Any(allow_none=True).tag(sync=True)
    """**FOR INTERNAL USE ONLY**"""

    auto_grow = traitlets.Bool(allow_none=True).tag(sync=True)
    """Automatically grow the textarea depending on amount of text."""

    no_resize = traitlets.Bool(allow_none=True).tag(sync=True)
    """Remove resize handle."""

    rows = traitlets.Any(allow_none=True).tag(sync=True)
    """Default row count."""

    max_rows = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the maximum number of rows for **auto-grow**."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        flat=False,
        reverse=False,
        name=None,
        error=False,
        label=None,
        autocomplete=None,
        disabled=None,
        placeholder=None,
        width=None,
        id=None,
        prefix=None,
        autofocus=False,
        model_value=None,
        color=None,
        density="default",
        rounded=None,
        tile=False,
        theme=None,
        variant="filled",
        max_height=None,
        max_width=None,
        min_width=None,
        bg_color=None,
        base_color=None,
        active=False,
        prepend_icon=None,
        append_icon=None,
        readonly=None,
        loading=False,
        messages="[]",
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
        auto_grow=False,
        no_resize=False,
        rows="5",
        max_rows=None,
        **kwargs
    ):
        """Initialize a Textarea widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.flat = flat
        self.reverse = reverse
        self.name = name
        self.error = error
        self.label = label
        self.autocomplete = autocomplete
        self.disabled = disabled
        self.placeholder = placeholder
        self.width = width
        self.id = id
        self.prefix = prefix
        self.autofocus = autofocus
        self.model_value = model_value
        self.color = color
        self.density = density
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.variant = variant
        self.max_height = max_height
        self.max_width = max_width
        self.min_width = min_width
        self.bg_color = bg_color
        self.base_color = base_color
        self.active = active
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.readonly = readonly
        self.loading = loading
        self.messages = messages
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
        self.auto_grow = auto_grow
        self.no_resize = no_resize
        self.rows = rows
        self.max_rows = max_rows

        super().__init__(**kwargs)