import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ListItem(anywidget.AnyWidget):
    """The ListItem component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        title: Generates a `v-list-item-title` component with the supplied value. Note that this overrides the native [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) attribute, that must be set with `v-bind:title.attr` instead.
        replace: Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation.
        link: Designates that the component is a link. This is automatic when using the href or to prop.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        density: Adjusts the vertical height used by the component.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control when in an **active** state or **input-value** is **true** - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors),
        variant: Applies a distinct style to the component.
        disabled: Removes the ability to click or target the component.
        value: The value used for selection. Obtained from [`v-list`](/api/v-list)'s `v-model:selected` when the item is selected.
        active: Controls the **active** state of the item. This is typically used to highlight the component.
        active_color: Deprecated, use `color` instead.
        base_color: Sets the color of component when not focused.
        prepend_icon: Creates a [v-icon](/api/v-icon/) component in the **prepend** slot before default content.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        slim: Reduces horizontal spacing for badges, icons, tooltips, and avatars to create a more compact visual representation.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        href: Designates the component as anchor and applies the **href** attribute.
        exact: Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.
        to: Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.
        subtitle: Specify a subtitle text for the component.
        active_class: The class applied to the component when it matches the current route. Find more information about the [active-class prop](https://router.vuejs.org/api/#active-class) on the [vue-router](https://router.vuejs.org/) documentation.
        lines: The line declaration specifies the minimum height of the item and can also be controlled from v-list with the same prop.
        prepend_gap: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VListItem.json))
        nav: Reduces the width v-list-item takes up as well as adding a border radius.
        append_avatar: Appends a [v-avatar](/components/avatars/) component after default content in the **append** slot.
        prepend_avatar: Prepends a [v-avatar](/components/avatars/) component in the **prepend** slot before default content.

    Returns:
        A VListItem widget.

    seealso:
        `https://vuetifyjs.com/api/v-list-item`__
    """

    _esm = bundled_path / "VListItem.js"
    _css = bundled_path / "VListItem-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    title = traitlets.Any(allow_none=True).tag(sync=True)
    """Generates a `v-list-item-title` component with the supplied value. Note that this overrides the native [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) attribute, that must be set with `v-bind:title.attr` instead."""

    replace = traitlets.Bool(allow_none=True).tag(sync=True)
    """Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation."""

    link = traitlets.Bool(allow_none=True).tag(sync=True)
    """Designates that the component is a link. This is automatic when using the href or to prop."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

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

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control when in an **active** state or **input-value** is **true** - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors),"""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """The value used for selection. Obtained from [`v-list`](/api/v-list)'s `v-model:selected` when the item is selected."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Controls the **active** state of the item. This is typically used to highlight the component."""

    active_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Deprecated, use `color` instead."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of component when not focused."""

    prepend_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component in the **prepend** slot before default content."""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot."""

    slim = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reduces horizontal spacing for badges, icons, tooltips, and avatars to create a more compact visual representation."""

    ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    href = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Designates the component as anchor and applies the **href** attribute."""

    exact = traitlets.Bool(allow_none=True).tag(sync=True)
    """Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation."""

    to = traitlets.Any(allow_none=True).tag(sync=True)
    """Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation."""

    subtitle = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a subtitle text for the component."""

    active_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The class applied to the component when it matches the current route. Find more information about the [active-class prop](https://router.vuejs.org/api/#active-class) on the [vue-router](https://router.vuejs.org/) documentation."""

    lines = traitlets.Any(allow_none=True).tag(sync=True)
    """The line declaration specifies the minimum height of the item and can also be controlled from v-list with the same prop."""

    prepend_gap = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VListItem.json))"""

    nav = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reduces the width v-list-item takes up as well as adding a border radius."""

    append_avatar = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Appends a [v-avatar](/components/avatars/) component after default content in the **append** slot."""

    prepend_avatar = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Prepends a [v-avatar](/components/avatars/) component in the **prepend** slot before default content."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        title=None,
        replace=False,
        link=None,
        border=False,
        density="default",
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        elevation=None,
        rounded=None,
        tile=False,
        tag="div",
        theme=None,
        color=None,
        variant="text",
        disabled=False,
        value=None,
        active=None,
        active_color=None,
        base_color=None,
        prepend_icon=None,
        append_icon=None,
        slim=False,
        ripple=True,
        href=None,
        exact=False,
        to=None,
        subtitle=None,
        active_class=None,
        lines=False,
        prepend_gap=None,
        nav=False,
        append_avatar=None,
        prepend_avatar=None,
        **kwargs
    ):
        """Initialize a ListItem widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.title = title
        self.replace = replace
        self.link = link
        self.border = border
        self.density = density
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.variant = variant
        self.disabled = disabled
        self.value = value
        self.active = active
        self.active_color = active_color
        self.base_color = base_color
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.slim = slim
        self.ripple = ripple
        self.href = href
        self.exact = exact
        self.to = to
        self.subtitle = subtitle
        self.active_class = active_class
        self.lines = lines
        self.prepend_gap = prepend_gap
        self.nav = nav
        self.append_avatar = append_avatar
        self.prepend_avatar = prepend_avatar

        super().__init__(**kwargs)