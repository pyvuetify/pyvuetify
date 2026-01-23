import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class AppBarNavIcon(anywidget.AnyWidget):
    """The AppBarNavIcon component.

    

    Args:
        children: The child nodes of the DOM element.
        symbol: The [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) used to hook into group functionality for components like [v-btn-toggle](/components/btn-toggle) and [v-bottom-navigation](/components/bottom-navigations/).
        text: Specify content text for the component.
        flat: Removes the button box shadow. This is different than using the 'flat' variant.
        replace: Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        icon: Apply a specific icon using the [v-icon](/components/icons/) component. The button will become _round_.
        density: Adjusts the vertical height used by the component.
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
        variant: Applies a distinct style to the component.
        disabled: Removes the ability to click or target the component.
        size: Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**.
        value: The value used when the component is selected in a group. If not provided, a unique ID will be used.
        active: Controls the **active** state of the item. This is typically used to highlight the component.
        active_color: The applied color when the component is in an active state.
        base_color: Sets the color of component when not focused.
        prepend_icon: Creates a [v-icon](/api/v-icon/) component in the **prepend** slot before default content.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        block: Expands the button to 100% of available space.
        readonly: Puts the button in a readonly state. Cannot be clicked or navigated to by keyboard.
        slim: Reduces padding to 0 8px.
        stacked: Displays the button as a flex-column.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        selected_class: Configure the active CSS class applied when an item is selected.
        loading: Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.
        href: Designates the component as anchor and applies the **href** attribute.
        exact: Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.
        to: Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.

    Returns:
        A VAppBarNavIcon widget.

    seealso:
        `https://vuetifyjs.com/api/v-app-bar-nav-icon`__
    """

    _esm = bundled_path / "VAppBarNavIcon.js"
    _css = bundled_path / "VAppBarNavIcon-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    symbol = traitlets.Any(allow_none=True).tag(sync=True)
    """The [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) used to hook into group functionality for components like [v-btn-toggle](/components/btn-toggle) and [v-bottom-navigation](/components/bottom-navigations/)."""

    text = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the button box shadow. This is different than using the 'flat' variant."""

    replace = traitlets.Bool(allow_none=True).tag(sync=True)
    """Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component. The button will become _round_."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

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

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """The value used when the component is selected in a group. If not provided, a unique ID will be used."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Controls the **active** state of the item. This is typically used to highlight the component."""

    active_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The applied color when the component is in an active state."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of component when not focused."""

    prepend_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component in the **prepend** slot before default content."""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot."""

    block = traitlets.Bool(allow_none=True).tag(sync=True)
    """Expands the button to 100% of available space."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the button in a readonly state. Cannot be clicked or navigated to by keyboard."""

    slim = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reduces padding to 0 8px."""

    stacked = traitlets.Bool(allow_none=True).tag(sync=True)
    """Displays the button as a flex-column."""

    ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color."""

    href = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Designates the component as anchor and applies the **href** attribute."""

    exact = traitlets.Bool(allow_none=True).tag(sync=True)
    """Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation."""

    to = traitlets.Any(allow_none=True).tag(sync=True)
    """Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation."""

    def __init__(
        self,
        children=None,
        symbol=None,
        text=None,
        flat=False,
        replace=False,
        border=False,
        icon="$menu",
        density="default",
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
        tag="button",
        theme=None,
        color=None,
        variant="text",
        disabled=False,
        size="default",
        value=None,
        active=None,
        active_color=None,
        base_color=None,
        prepend_icon=None,
        append_icon=None,
        block=False,
        readonly=False,
        slim=False,
        stacked=False,
        ripple=True,
        selected_class=None,
        loading=False,
        href=None,
        exact=False,
        to=None,
        **kwargs
    ):
        """Initialize a AppBarNavIcon widget."""
        self.children = children
        self.symbol = symbol
        self.text = text
        self.flat = flat
        self.replace = replace
        self.border = border
        self.icon = icon
        self.density = density
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
        self.variant = variant
        self.disabled = disabled
        self.size = size
        self.value = value
        self.active = active
        self.active_color = active_color
        self.base_color = base_color
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.block = block
        self.readonly = readonly
        self.slim = slim
        self.stacked = stacked
        self.ripple = ripple
        self.selected_class = selected_class
        self.loading = loading
        self.href = href
        self.exact = exact
        self.to = to

        super().__init__(**kwargs)