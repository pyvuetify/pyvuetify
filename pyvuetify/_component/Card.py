import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Card(anywidget.AnyWidget):
    """The Card component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        flat: Removes the card's elevation.
        replace: Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation.
        link: Designates that the component is a link. This is automatic when using the href or to prop.
        tag: Specify a custom tag used on the root element.
        title: Specify a title text for the component.
        disabled: Removes the ability to click or target the component.
        height: Sets the height for the component.
        width: Sets the width for the component.
        image: Apply a specific background image to the component.
        location: Specifies the component's location. Can combine by using a space separated string.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        text: Specify content text for the component.
        variant: Applies a distinct style to the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        position: Sets the position for the component.
        href: Designates the component as anchor and applies the **href** attribute.
        to: Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.
        exact: Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.
        prepend_icon: Prepends a [v-icon](/components/icons/) component to the header.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        loading: Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.
        subtitle: Specify a subtitle text for the component.
        append_avatar: Appends a [v-avatar](/components/avatars/) component after default content in the **append** slot.
        hover: Applies **4dp** of elevation when hovered (default 2dp). You can find more information on the [elevation page](/styles/elevation).
        prepend_avatar: Prepends a [v-avatar](/components/avatars/) component in the **prepend** slot before default content.

    Returns:
        A VCard widget.

    seealso:
        `https://vuetifyjs.com/api/v-card`__
    """

    _esm = bundled_path / "VCard.js"
    _css = bundled_path / "VCard-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the card's elevation."""

    replace = traitlets.Bool(allow_none=True).tag(sync=True)
    """Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation."""

    link = traitlets.Bool(allow_none=True).tag(sync=True)
    """Designates that the component is a link. This is automatic when using the href or to prop."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    title = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    image = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Apply a specific background image to the component."""

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

    position = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the position for the component."""

    href = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Designates the component as anchor and applies the **href** attribute."""

    to = traitlets.Any(allow_none=True).tag(sync=True)
    """Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation."""

    exact = traitlets.Bool(allow_none=True).tag(sync=True)
    """Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation."""

    prepend_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Prepends a [v-icon](/components/icons/) component to the header."""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot."""

    ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color."""

    subtitle = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a subtitle text for the component."""

    append_avatar = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Appends a [v-avatar](/components/avatars/) component after default content in the **append** slot."""

    hover = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies **4dp** of elevation when hovered (default 2dp). You can find more information on the [elevation page](/styles/elevation)."""

    prepend_avatar = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Prepends a [v-avatar](/components/avatars/) component in the **prepend** slot before default content."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        flat=False,
        replace=False,
        link=None,
        tag="div",
        title=None,
        disabled=False,
        height=None,
        width=None,
        image=None,
        location=None,
        color=None,
        density="default",
        border=False,
        elevation=None,
        rounded=None,
        tile=False,
        theme=None,
        text=None,
        variant="elevated",
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        position=None,
        href=None,
        to=None,
        exact=False,
        prepend_icon=None,
        append_icon=None,
        ripple=True,
        loading=False,
        subtitle=None,
        append_avatar=None,
        hover=False,
        prepend_avatar=None,
        **kwargs
    ):
        """Initialize a Card widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.flat = flat
        self.replace = replace
        self.link = link
        self.tag = tag
        self.title = title
        self.disabled = disabled
        self.height = height
        self.width = width
        self.image = image
        self.location = location
        self.color = color
        self.density = density
        self.border = border
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.text = text
        self.variant = variant
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.position = position
        self.href = href
        self.to = to
        self.exact = exact
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.ripple = ripple
        self.loading = loading
        self.subtitle = subtitle
        self.append_avatar = append_avatar
        self.hover = hover
        self.prepend_avatar = prepend_avatar

        super().__init__(**kwargs)