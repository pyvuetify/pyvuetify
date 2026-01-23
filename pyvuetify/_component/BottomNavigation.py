import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class BottomNavigation(anywidget.AnyWidget):
    """The BottomNavigation component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        name: Assign a specific name for layout registration.
        mode: Changes the orientation and active state styling of the component.
        disabled: Puts all children components into a disabled state.
        height: Sets the height for the component.
        max: Sets a maximum number of selections that can be made.
        multiple: Allows one to select multiple items.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        absolute: Applies **position: absolute** to the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        order: Adjust the order of the component in relation to its registration order.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        base_color: Sets the color of component when not focused.
        grow: Force all [v-btn](/components/buttons) children to take up all available horizontal space.
        active: Controls the **active** state of the item. This is typically used to highlight the component.
        selected_class: Configure the active CSS class applied when an item is selected.
        mandatory: Forces at least one item to always be selected (if available).

    Returns:
        A VBottomNavigation widget.

    seealso:
        `https://vuetifyjs.com/api/v-bottom-navigation`__
    """

    _esm = bundled_path / "VBottomNavigation.js"
    _css = bundled_path / "VBottomNavigation-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Assign a specific name for layout registration."""

    mode = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Changes the orientation and active state styling of the component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts all children components into a disabled state."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    max = traitlets.Float(allow_none=True).tag(sync=True)
    """Sets a maximum number of selections that can be made."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows one to select multiple items."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    absolute = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies **position: absolute** to the component."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    order = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjust the order of the component in relation to its registration order."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of component when not focused."""

    grow = traitlets.Bool(allow_none=True).tag(sync=True)
    """Force all [v-btn](/components/buttons) children to take up all available horizontal space."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Controls the **active** state of the item. This is typically used to highlight the component."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    mandatory = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces at least one item to always be selected (if available)."""

    def __init__(
        self,
        children=None,
        tag="header",
        name="bottom-navigation",
        mode=None,
        disabled=False,
        height="56",
        max=None,
        multiple=False,
        model_value=None,
        absolute=False,
        color=None,
        density="default",
        border=False,
        elevation=None,
        rounded=None,
        tile=False,
        theme=None,
        order="0",
        bg_color=None,
        base_color=None,
        grow=False,
        active=True,
        selected_class="v-btn--selected",
        mandatory=False,
        **kwargs
    ):
        """Initialize a BottomNavigation widget."""
        self.children = children
        self.tag = tag
        self.name = name
        self.mode = mode
        self.disabled = disabled
        self.height = height
        self.max = max
        self.multiple = multiple
        self.model_value = model_value
        self.absolute = absolute
        self.color = color
        self.density = density
        self.border = border
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.order = order
        self.bg_color = bg_color
        self.base_color = base_color
        self.grow = grow
        self.active = active
        self.selected_class = selected_class
        self.mandatory = mandatory

        super().__init__(**kwargs)