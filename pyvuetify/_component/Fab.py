import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Fab(anywidget.AnyWidget):
    """The Fab component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        symbol: The [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) used to hook into group functionality for components like [v-btn-toggle](/components/btn-toggle) and [v-bottom-navigation](/components/bottom-navigations/).
        text: Specify content text for the component.
        flat: Removes the button box shadow. This is different than using the 'flat' variant.
        replace: Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        icon: Apply a specific icon using the [v-icon](/components/icons/) component. The button will become _round_.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        density: Adjusts the vertical height used by the component.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        location: The location of the fab relative to the layout. Only works when using **app**.
        position: Sets the position for the component.
        absolute: Applies **position: absolute** to the component.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.
        name: Assign a specific name for layout registration.
        disabled: Removes the ability to click or target the component.
        size: Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**.
        value: The value used when the component is selected in a group. If not provided, a unique ID will be used.
        layout: If true, will effect layout dimensions based on size and position.
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
        offset: Translates the Fab up or down, depending on if location is set to **top** or **bottom**.
        transition: Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition.
        app: If true, attaches to the closest layout and positions according to the value of **location**.
        appear: Used to control the animation of the FAB.
        extended: An alternate style for the FAB that expects text.
        order: Adjust the order of the component in relation to its registration order.

    Returns:
        A VFab widget.

    seealso:
        `https://vuetifyjs.com/api/v-fab`__
    """

    _esm = bundled_path / "VFab.js"
    _css = bundled_path / "VFab-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

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

    model_value = traitlets.Bool(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

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
    """The location of the fab relative to the layout. Only works when using **app**."""

    position = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the position for the component."""

    absolute = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies **position: absolute** to the component."""

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

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Assign a specific name for layout registration."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """The value used when the component is selected in a group. If not provided, a unique ID will be used."""

    layout = traitlets.Bool(allow_none=True).tag(sync=True)
    """If true, will effect layout dimensions based on size and position."""

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

    offset = traitlets.Bool(allow_none=True).tag(sync=True)
    """Translates the Fab up or down, depending on if location is set to **top** or **bottom**."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition."""

    app = traitlets.Bool(allow_none=True).tag(sync=True)
    """If true, attaches to the closest layout and positions according to the value of **location**."""

    appear = traitlets.Bool(allow_none=True).tag(sync=True)
    """Used to control the animation of the FAB."""

    extended = traitlets.Bool(allow_none=True).tag(sync=True)
    """An alternate style for the FAB that expects text."""

    order = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjust the order of the component in relation to its registration order."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        symbol=None,
        text=None,
        flat=False,
        replace=False,
        border=False,
        icon=False,
        model_value=True,
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
        absolute=False,
        rounded=None,
        tile=False,
        tag="button",
        theme=None,
        color=None,
        variant="elevated",
        name=None,
        disabled=False,
        size="default",
        value=None,
        layout=False,
        active=True,
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
        offset=False,
        transition="fab-transition",
        app=False,
        appear=False,
        extended=False,
        order="0",
        **kwargs
    ):
        """Initialize a Fab widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.symbol = symbol
        self.text = text
        self.flat = flat
        self.replace = replace
        self.border = border
        self.icon = icon
        self.model_value = model_value
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
        self.absolute = absolute
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.variant = variant
        self.name = name
        self.disabled = disabled
        self.size = size
        self.value = value
        self.layout = layout
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
        self.offset = offset
        self.transition = transition
        self.app = app
        self.appear = appear
        self.extended = extended
        self.order = order

        super().__init__(**kwargs)