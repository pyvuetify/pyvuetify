import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Stepper(anywidget.AnyWidget):
    """The Stepper component.

    

    Args:
        children: The child nodes of the DOM element.
        flat: Removes the stepper's elevation.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        location: Specifies the component's location. Can combine by using a space separated string.
        position: Sets the position for the component.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        disabled: Puts all children components into a disabled state.
        max: Sets a maximum number of selections that can be made.
        multiple: Allows one to select multiple items.
        items: An array of strings or objects used for automatically generating children components.
        selected_class: Configure the active CSS class applied when an item is selected.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        mandatory: Forces at least one item to always be selected (if available).
        item_title: Property on supplied `items` that contains its title.
        item_value: Property on supplied `items` that contains its value.
        item_props: Props object that will be applied to each item component. `true` will treat the original object as raw props and pass it directly to the component.
        mobile: Forces the stepper into a mobile state, removing labels from stepper items.
        hide_actions: Hide actions bar (prev and next buttons).
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
        A VStepper widget.

    seealso:
        `https://vuetifyjs.com/api/v-stepper`__
    """

    _esm = bundled_path / "VStepper.js"
    _css = bundled_path / "VStepper-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the stepper's elevation."""

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
    """Sets the width for the component."""

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
    """Puts all children components into a disabled state."""

    max = traitlets.Float(allow_none=True).tag(sync=True)
    """Sets a maximum number of selections that can be made."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows one to select multiple items."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of strings or objects used for automatically generating children components."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

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
    """Hide actions bar (prev and next buttons)."""

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
        children=None,
        flat=False,
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
        disabled=False,
        max=None,
        multiple=False,
        items="[]",
        selected_class="v-stepper-item--selected",
        bg_color=None,
        mandatory="force",
        item_title="title",
        item_value="value",
        item_props="props",
        mobile=False,
        hide_actions=False,
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
        """Initialize a Stepper widget."""
        self.children = children
        self.flat = flat
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
        self.multiple = multiple
        self.items = items
        self.selected_class = selected_class
        self.bg_color = bg_color
        self.mandatory = mandatory
        self.item_title = item_title
        self.item_value = item_value
        self.item_props = item_props
        self.mobile = mobile
        self.hide_actions = hide_actions
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