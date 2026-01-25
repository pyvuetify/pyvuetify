import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class StepperVertical(anywidget.AnyWidget):
    """The StepperVertical component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        flat: Removes the expansion-panel's elevation and borders.
        model_value: Controls expanded panel(s). Defaults to an empty array when using **multiple** prop. It is recommended to set unique `value` prop for the panels inside, otherwise index is used instead.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes the border-radius.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.
        disabled: Puts all children components into a disabled state.
        max: Sets a maximum number of selections that can be made.
        multiple: Allows one to select multiple items.
        items: An array of strings or objects used for automatically generating children components.
        readonly: Makes the entire expansion panel read only.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        selected_class: Configure the active CSS class applied when an item is selected.
        eager: Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        expand_icon: Icon used when the expansion panel is in a expandable state.
        collapse_icon: Icon used when the expansion panel is in a collapsable state.
        mandatory: Forces at least one item to always be selected (if available).
        item_title: Property on supplied `items` that contains its title.
        item_value: Property on supplied `items` that contains its value.
        item_props: Props object that will be applied to each item component. `true` will treat the original object as raw props and pass it directly to the component.
        mobile: Forces the stepper into a mobile state, removing labels from stepper items.
        hide_actions: Hide the expand icon in the content title.
        focusable: Makes the expansion-panel headers focusable.
        mobile_breakpoint: Overrides the display configuration default screen size that the component should be considered in mobile.
        alt_labels: Places the labels beneath the step.
        complete_icon: Icon to display when step is marked as completed.
        edit_icon: Icon to display when step is editable.
        editable: Marks step as editable.
        error_icon: Icon to display when step has an error.
        non_linear: Allow user to jump to any step.
        prev_text: The text used for the Prev button.
        next_text: The text used for the Next button.

    Returns:
        A VStepperVertical widget.

    seealso:
        `https://vuetifyjs.com/api/v-stepper-vertical`__
    """

    _esm = bundled_path / "VStepperVertical.js"
    _css = bundled_path / "VStepperVertical-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the expansion-panel's elevation and borders."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls expanded panel(s). Defaults to an empty array when using **multiple** prop. It is recommended to set unique `value` prop for the panels inside, otherwise index is used instead."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the border-radius."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts all children components into a disabled state."""

    max = traitlets.Float(allow_none=True).tag(sync=True)
    """Sets a maximum number of selections that can be made."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows one to select multiple items."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of strings or objects used for automatically generating children components."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes the entire expansion panel read only."""

    ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    eager = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    expand_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used when the expansion panel is in a expandable state."""

    collapse_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used when the expansion panel is in a collapsable state."""

    mandatory = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces at least one item to always be selected (if available)."""

    item_title = traitlets.Any(allow_none=True).tag(sync=True)
    """Property on supplied `items` that contains its title."""

    item_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Property on supplied `items` that contains its value."""

    item_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Props object that will be applied to each item component. `true` will treat the original object as raw props and pass it directly to the component."""

    mobile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the stepper into a mobile state, removing labels from stepper items."""

    hide_actions = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the expand icon in the content title."""

    focusable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes the expansion-panel headers focusable."""

    mobile_breakpoint = traitlets.Any(allow_none=True).tag(sync=True)
    """Overrides the display configuration default screen size that the component should be considered in mobile."""

    alt_labels = traitlets.Bool(allow_none=True).tag(sync=True)
    """Places the labels beneath the step."""

    complete_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon to display when step is marked as completed."""

    edit_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon to display when step is editable."""

    editable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Marks step as editable."""

    error_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon to display when step has an error."""

    non_linear = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allow user to jump to any step."""

    prev_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The text used for the Prev button."""

    next_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The text used for the Next button."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        flat=False,
        model_value=None,
        elevation=None,
        rounded=None,
        tile=False,
        tag="div",
        theme=None,
        color=None,
        variant="accordion",
        disabled=False,
        max=None,
        multiple=False,
        items="[]",
        readonly=False,
        ripple=False,
        selected_class=None,
        eager=False,
        bg_color=None,
        expand_icon="$expand",
        collapse_icon="$collapse",
        mandatory="force",
        item_title="title",
        item_value="value",
        item_props="props",
        mobile=False,
        hide_actions=False,
        focusable=False,
        mobile_breakpoint=None,
        alt_labels=False,
        complete_icon=None,
        edit_icon=None,
        editable=False,
        error_icon=None,
        non_linear=False,
        prev_text="$vuetify.stepper.prev",
        next_text="$vuetify.stepper.next",
        **kwargs
    ):
        """Initialize a StepperVertical widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.flat = flat
        self.model_value = model_value
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.variant = variant
        self.disabled = disabled
        self.max = max
        self.multiple = multiple
        self.items = items
        self.readonly = readonly
        self.ripple = ripple
        self.selected_class = selected_class
        self.eager = eager
        self.bg_color = bg_color
        self.expand_icon = expand_icon
        self.collapse_icon = collapse_icon
        self.mandatory = mandatory
        self.item_title = item_title
        self.item_value = item_value
        self.item_props = item_props
        self.mobile = mobile
        self.hide_actions = hide_actions
        self.focusable = focusable
        self.mobile_breakpoint = mobile_breakpoint
        self.alt_labels = alt_labels
        self.complete_icon = complete_icon
        self.edit_icon = edit_icon
        self.editable = editable
        self.error_icon = error_icon
        self.non_linear = non_linear
        self.prev_text = prev_text
        self.next_text = next_text

        super().__init__(**kwargs)