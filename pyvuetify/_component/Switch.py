import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Switch(anywidget.AnyWidget):
    """The Switch component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        flat: Display component without elevation. Default elevation for thumb is 4dp, `flat` resets it.
        type: Provides the default type for children selection controls.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        error: Puts the input in a manual error state.
        density: Adjusts the vertical height used by the component.
        max_width: Sets the maximum width for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        name: Sets the component's name attribute.
        disabled: Removes the ability to click or target the component.
        indeterminate: Sets an indeterminate state for the switch.
        multiple: Changes expected model to an array.
        value: The value used when the component is selected in a group. If not provided, a unique ID will be used.
        id: Sets the DOM id on the component.
        base_color: Sets the color of the input when it is not focused.
        prepend_icon: Prepends an icon to the component, uses the same syntax as `v-icon`.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        readonly: Puts input in readonly state.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        loading: Displays circular progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it's supported by the component) or the primary color.
        label: Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.
        value_comparator: Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop.
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
        inset: Enlarge the `v-switch` track to encompass the thumb.
        inline: Puts children inputs into a row.
        true_value: Sets value for truthy state.
        false_value: Sets value for falsy state.
        defaults_target: The target component to provide defaults values for.
        false_icon: The icon used when inactive.
        true_icon: The icon used when active.

    Returns:
        A VSwitch widget.

    seealso:
        `https://vuetifyjs.com/api/v-switch`__
    """

    _esm = bundled_path / "VSwitch.js"
    _css = bundled_path / "VSwitch-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Display component without elevation. Default elevation for thumb is 4dp, `flat` resets it."""

    type = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Provides the default type for children selection controls."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    error = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the input in a manual error state."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the component's name attribute."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    indeterminate = traitlets.Bool(allow_none=True).tag(sync=True)
    """Sets an indeterminate state for the switch."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Changes expected model to an array."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """The value used when the component is selected in a group. If not provided, a unique ID will be used."""

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

    ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays circular progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it's supported by the component) or the primary color."""

    label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component."""

    value_comparator = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop."""

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

    inset = traitlets.Bool(allow_none=True).tag(sync=True)
    """Enlarge the `v-switch` track to encompass the thumb."""

    inline = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts children inputs into a row."""

    true_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets value for truthy state."""

    false_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets value for falsy state."""

    defaults_target = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The target component to provide defaults values for."""

    false_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The icon used when inactive."""

    true_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The icon used when active."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        flat=False,
        type=None,
        model_value=None,
        error=False,
        density="default",
        max_width=None,
        min_width=None,
        width=None,
        theme=None,
        color=None,
        name=None,
        disabled=None,
        indeterminate=False,
        multiple=None,
        value=None,
        id=None,
        base_color=None,
        prepend_icon=None,
        append_icon=None,
        readonly=None,
        ripple=True,
        loading=False,
        label=None,
        value_comparator=None,
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
        inset=False,
        inline=False,
        true_value=None,
        false_value=None,
        defaults_target=None,
        false_icon=None,
        true_icon=None,
        **kwargs
    ):
        """Initialize a Switch widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.flat = flat
        self.type = type
        self.model_value = model_value
        self.error = error
        self.density = density
        self.max_width = max_width
        self.min_width = min_width
        self.width = width
        self.theme = theme
        self.color = color
        self.name = name
        self.disabled = disabled
        self.indeterminate = indeterminate
        self.multiple = multiple
        self.value = value
        self.id = id
        self.base_color = base_color
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.readonly = readonly
        self.ripple = ripple
        self.loading = loading
        self.label = label
        self.value_comparator = value_comparator
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
        self.inset = inset
        self.inline = inline
        self.true_value = true_value
        self.false_value = false_value
        self.defaults_target = defaults_target
        self.false_icon = false_icon
        self.true_icon = true_icon

        super().__init__(**kwargs)