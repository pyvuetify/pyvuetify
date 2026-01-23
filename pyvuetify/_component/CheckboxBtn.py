import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class CheckboxBtn(anywidget.AnyWidget):
    """The CheckboxBtn component.

    

    Args:
        children: The child nodes of the DOM element.
        type: Provides the default type for children selection controls.
        name: Sets the component's name attribute.
        error: Puts the input in a manual error state.
        label: Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.
        disabled: Removes the ability to click or target the component.
        indeterminate: Puts the control in an indeterminate state. Used with the [indeterminate-icon](#props-indeterminate-icon) property.
        multiple: Changes select to multiple. Accepts array for value.
        value: The value used when the component is selected in a group. If not provided, a unique ID will be used.
        id: Sets the DOM id on the component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        theme: Specify a theme for this component and all of its children.
        inline: Puts children inputs into a row.
        base_color: Sets the color of the input when it is not focused.
        readonly: Puts input in readonly state.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        indeterminate_icon: Icon used when the component is in an indeterminate state.
        true_value: Sets value for truthy state.
        false_value: Sets value for falsy state.
        defaults_target: The target component to provide defaults values for.
        false_icon: The icon used when inactive.
        true_icon: The icon used when active.
        value_comparator: Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop.

    Returns:
        A VCheckboxBtn widget.

    seealso:
        `https://vuetifyjs.com/api/v-checkbox-btn`__
    """

    _esm = bundled_path / "VCheckboxBtn.js"
    _css = bundled_path / "VCheckboxBtn-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    type = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Provides the default type for children selection controls."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the component's name attribute."""

    error = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the input in a manual error state."""

    label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    indeterminate = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the control in an indeterminate state. Used with the [indeterminate-icon](#props-indeterminate-icon) property."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Changes select to multiple. Accepts array for value."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """The value used when the component is selected in a group. If not provided, a unique ID will be used."""

    id = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the DOM id on the component."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    inline = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts children inputs into a row."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of the input when it is not focused."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts input in readonly state."""

    ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    indeterminate_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used when the component is in an indeterminate state."""

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

    value_comparator = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop."""

    def __init__(
        self,
        children=None,
        type=None,
        name=None,
        error=False,
        label=None,
        disabled=None,
        indeterminate=False,
        multiple=None,
        value=None,
        id=None,
        model_value=None,
        color=None,
        density="default",
        theme=None,
        inline=False,
        base_color=None,
        readonly=None,
        ripple=True,
        indeterminate_icon="$checkboxIndeterminate",
        true_value=None,
        false_value=None,
        defaults_target=None,
        false_icon="$checkboxOff",
        true_icon="$checkboxOn",
        value_comparator=None,
        **kwargs
    ):
        """Initialize a CheckboxBtn widget."""
        self.children = children
        self.type = type
        self.name = name
        self.error = error
        self.label = label
        self.disabled = disabled
        self.indeterminate = indeterminate
        self.multiple = multiple
        self.value = value
        self.id = id
        self.model_value = model_value
        self.color = color
        self.density = density
        self.theme = theme
        self.inline = inline
        self.base_color = base_color
        self.readonly = readonly
        self.ripple = ripple
        self.indeterminate_icon = indeterminate_icon
        self.true_value = true_value
        self.false_value = false_value
        self.defaults_target = defaults_target
        self.false_icon = false_icon
        self.true_icon = true_icon
        self.value_comparator = value_comparator

        super().__init__(**kwargs)