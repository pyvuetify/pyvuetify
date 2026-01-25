import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class SelectionControlGroup(anywidget.AnyWidget):
    """The SelectionControlGroup component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        type: Provides the default type for children selection controls.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        error: Puts the input in a manual error state.
        density: Adjusts the vertical height used by the component.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        name: Sets the component's name attribute.
        disabled: Removes the ability to click or target the component.
        multiple: Changes select to multiple. Accepts array for value.
        id: Sets the DOM id on the component.
        readonly: Puts input in readonly state.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        value_comparator: Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop.
        inline: Puts children inputs into a row.
        defaults_target: The target component to provide defaults values for.
        false_icon: The icon used when inactive.
        true_icon: The icon used when active.

    Returns:
        A VSelectionControlGroup widget.

    seealso:
        `https://vuetifyjs.com/api/v-selection-control-group`__
    """

    _esm = bundled_path / "VSelectionControlGroup.js"
    _css = bundled_path / "VSelectionControlGroup-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    type = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Provides the default type for children selection controls."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    error = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the input in a manual error state."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the component's name attribute."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Changes select to multiple. Accepts array for value."""

    id = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the DOM id on the component."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts input in readonly state."""

    ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    value_comparator = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop."""

    inline = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts children inputs into a row."""

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
        type=None,
        model_value=None,
        error=False,
        density="default",
        theme=None,
        color=None,
        name=None,
        disabled=None,
        multiple=None,
        id=None,
        readonly=None,
        ripple=True,
        value_comparator=None,
        inline=False,
        defaults_target="VSelectionControl",
        false_icon=None,
        true_icon=None,
        **kwargs
    ):
        """Initialize a SelectionControlGroup widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.type = type
        self.model_value = model_value
        self.error = error
        self.density = density
        self.theme = theme
        self.color = color
        self.name = name
        self.disabled = disabled
        self.multiple = multiple
        self.id = id
        self.readonly = readonly
        self.ripple = ripple
        self.value_comparator = value_comparator
        self.inline = inline
        self.defaults_target = defaults_target
        self.false_icon = false_icon
        self.true_icon = true_icon

        super().__init__(**kwargs)