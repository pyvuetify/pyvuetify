import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Btn(anywidget.AnyWidget):
    """The Btn component.

    

    Args:
        children: The child nodes of the DOM element.
        symbol: The [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) used to hook into group functionality for components like [v-btn-toggle](/components/btn-toggle) and [v-bottom-navigation](/components/bottom-navigations/).
        flat: Removes the button box shadow. This is different than using the 'flat' variant.
        replace: Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation.
        tag: Specify a custom tag used on the root element.
        disabled: Removes the ability to click or target the component.
        height: Sets the height for the component.
        size: Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**.
        value: The value used when the component is selected in a group. If not provided, a unique ID will be used.
        width: Sets the width for the component.
        location: Specifies the component's location. Can combine by using a space separated string.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        text: Specify content text for the component.
        icon: Apply a specific icon using the [v-icon](/components/icons/) component. The button will become _round_.
        variant: Applies a distinct style to the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        stacked: Displays the button as a flex-column.
        position: Sets the position for the component.
        base_color: Sets the color of component when not focused.
        active: Controls the **active** state of the item. This is typically used to highlight the component.
        selected_class: Configure the active CSS class applied when an item is selected.
        block: Expands the button to 100% of available space.
        active_color: The applied color when the component is in an active state.
        href: Designates the component as anchor and applies the **href** attribute.
        to: Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.
        exact: Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.
        prepend_icon: Creates a [v-icon](/api/v-icon/) component in the **prepend** slot before default content.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        readonly: Puts the button in a readonly state. Cannot be clicked or navigated to by keyboard.
        slim: Reduces padding to 0 8px.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        loading: Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.
        spaced: Extends content to the edges to move main content from prepend and append slots.

    Returns:
        A VBtn widget.

    seealso:
        `https://vuetifyjs.com/api/v-btn`__
    """

    _esm = bundled_path / "VBtn.js"
    _css = bundled_path / "VBtn-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    symbol = traitlets.Any(allow_none=True).tag(sync=True)
    """The [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) used to hook into group functionality for components like [v-btn-toggle](/components/btn-toggle) and [v-bottom-navigation](/components/bottom-navigations/)."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the button box shadow. This is different than using the 'flat' variant."""

    replace = traitlets.Bool(allow_none=True).tag(sync=True)
    """Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """The value used when the component is selected in a group. If not provided, a unique ID will be used."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the component's location. Can combine by using a space separated string."""

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

    text = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component. The button will become _round_."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    stacked = traitlets.Bool(allow_none=True).tag(sync=True)
    """Displays the button as a flex-column."""

    position = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the position for the component."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of component when not focused."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Controls the **active** state of the item. This is typically used to highlight the component."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    block = traitlets.Bool(allow_none=True).tag(sync=True)
    """Expands the button to 100% of available space."""

    active_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The applied color when the component is in an active state."""

    href = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Designates the component as anchor and applies the **href** attribute."""

    to = traitlets.Any(allow_none=True).tag(sync=True)
    """Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation."""

    exact = traitlets.Bool(allow_none=True).tag(sync=True)
    """Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation."""

    prepend_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component in the **prepend** slot before default content."""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the button in a readonly state. Cannot be clicked or navigated to by keyboard."""

    slim = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reduces padding to 0 8px."""

    ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color."""

    spaced = traitlets.Any(allow_none=True).tag(sync=True)
    """Extends content to the edges to move main content from prepend and append slots."""

    def __init__(
        self,
        children=None,
        symbol=None,
        flat=False,
        replace=False,
        tag="button",
        disabled=False,
        height=None,
        size="default",
        value=None,
        width=None,
        location=None,
        color=None,
        density="default",
        border=False,
        elevation=None,
        rounded=None,
        tile=False,
        theme=None,
        text=None,
        icon=False,
        variant="elevated",
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        stacked=False,
        position=None,
        base_color=None,
        active=None,
        selected_class=None,
        block=False,
        active_color=None,
        href=None,
        to=None,
        exact=False,
        prepend_icon=None,
        append_icon=None,
        readonly=False,
        slim=False,
        ripple=True,
        loading=False,
        spaced=None,
        **kwargs
    ):
        """Initialize a Btn widget."""
        self.children = children
        self.symbol = symbol
        self.flat = flat
        self.replace = replace
        self.tag = tag
        self.disabled = disabled
        self.height = height
        self.size = size
        self.value = value
        self.width = width
        self.location = location
        self.color = color
        self.density = density
        self.border = border
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.text = text
        self.icon = icon
        self.variant = variant
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.stacked = stacked
        self.position = position
        self.base_color = base_color
        self.active = active
        self.selected_class = selected_class
        self.block = block
        self.active_color = active_color
        self.href = href
        self.to = to
        self.exact = exact
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.readonly = readonly
        self.slim = slim
        self.ripple = ripple
        self.loading = loading
        self.spaced = spaced

        super().__init__(**kwargs)