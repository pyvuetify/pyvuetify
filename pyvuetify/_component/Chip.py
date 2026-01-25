import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Chip(anywidget.AnyWidget):
    """The Chip component.



    Args:
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        filter: Displays a selection icon when selected.
        replace: Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation.
        link: Designates that the component is a link. This is automatic when using the href or to prop.
        tag: Specify a custom tag used on the root element.
        label: Applies a medium size border radius.
        disabled: Removes the ability to click or target the component.
        size: Sets the height, padding and the font size of the component. Accepts only predefined options: **x-small**, **small**, **default**, **large**, and **x-large**.
        value: The value used when a child of a [v-chip-group](/components/chip-groups).
        draggable: Makes the chip draggable.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        text: Specify content text for the component.
        variant: Applies a distinct style to the component.
        base_color: Sets the color of component when not focused.
        selected_class: Configure the active CSS class applied when an item is selected.
        active_class: The class applied to the component when it matches the current route. Find more information about the [active-class prop](https://router.vuejs.org/api/#active-class) on the [vue-router](https://router.vuejs.org/) documentation.
        href: Designates the component as anchor and applies the **href** attribute.
        to: Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.
        exact: Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.
        prepend_icon: Creates a [v-icon](/api/v-icon/) component in the **prepend** slot before default content.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        append_avatar: Appends a [v-avatar](/components/avatars/) component after default content in the **append** slot.
        prepend_avatar: Prepends a [v-avatar](/components/avatars/) component in the **prepend** slot before default content.
        closable: Adds remove button and then a chip can be closed.
        close_icon: Change the default icon used for **close** chips.
        close_label: Text used for *aria-label* on the close button in **close** chips. Can also be customized globally in [Internationalization](/customization/internationalization).
        filter_icon: Change the default icon used for **filter** chips.
        pill: Remove `v-avatar` padding.


    Slots:
        default: The default Vue slot.
        label: The default slot of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.
        prepend: Adds an item outside the input and before input content.
        append: Adds an item inside the input and after input content.
        close: Slot for icon used in **close** prop.
        filter: Slot for icon used in **filter** prop.



    Events:
        click: Emitted when component is clicked, toggles chip if contained in a chip group - Will trigger component to ripple when clicked unless the `.native` modifier is used.
        update:modelValue: Event that is emitted when the component's model changes.
        group:selected: Event that is emitted when an item is selected within a group.
        click:close: Emitted when close icon is clicked.


    Returns:
        A VChip widget.

    seealso:
        `https://vuetifyjs.com/api/v-chip`__
    """

    _esm = bundled_path / "VChip.js"
    _css = bundled_path / "VChip-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    filter = traitlets.Bool(allow_none=True).tag(sync=True)
    """Displays a selection icon when selected."""

    replace = traitlets.Bool(allow_none=True).tag(sync=True)
    """Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation."""

    link = traitlets.Bool(allow_none=True).tag(sync=True)
    """Designates that the component is a link. This is automatic when using the href or to prop."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    label = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies a medium size border radius."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height, padding and the font size of the component. Accepts only predefined options: **x-small**, **small**, **default**, **large**, and **x-large**."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """The value used when a child of a [v-chip-group](/components/chip-groups)."""

    draggable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes the chip draggable."""

    model_value = traitlets.Bool(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

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

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of component when not focused."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    active_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The class applied to the component when it matches the current route. Find more information about the [active-class prop](https://router.vuejs.org/api/#active-class) on the [vue-router](https://router.vuejs.org/) documentation."""

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

    ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    append_avatar = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Appends a [v-avatar](/components/avatars/) component after default content in the **append** slot."""

    prepend_avatar = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Prepends a [v-avatar](/components/avatars/) component in the **prepend** slot before default content."""

    closable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Adds remove button and then a chip can be closed."""

    close_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Change the default icon used for **close** chips."""

    close_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text used for *aria-label* on the close button in **close** chips. Can also be customized globally in [Internationalization](/customization/internationalization)."""

    filter_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Change the default icon used for **filter** chips."""

    pill = traitlets.Bool(allow_none=True).tag(sync=True)
    """Remove `v-avatar` padding."""

    def __init__(
        self,
        children=None,
        style=None,
        filter=False,
        replace=False,
        link=None,
        tag="span",
        label=False,
        disabled=False,
        size="default",
        value=None,
        draggable=False,
        model_value=True,
        color=None,
        density="default",
        border=False,
        elevation=None,
        rounded=None,
        tile=False,
        theme=None,
        text=None,
        variant="tonal",
        base_color=None,
        selected_class=None,
        active_class=None,
        href=None,
        to=None,
        exact=False,
        prepend_icon=None,
        append_icon=None,
        ripple=True,
        append_avatar=None,
        prepend_avatar=None,
        closable=False,
        close_icon="$delete",
        close_label="$vuetify.close",
        filter_icon="$complete",
        pill=False,
        **kwargs
    ):
        """Initialize a Chip widget."""
        self.children = children
        self.style = style
        self.filter = filter
        self.replace = replace
        self.link = link
        self.tag = tag
        self.label = label
        self.disabled = disabled
        self.size = size
        self.value = value
        self.draggable = draggable
        self.model_value = model_value
        self.color = color
        self.density = density
        self.border = border
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.text = text
        self.variant = variant
        self.base_color = base_color
        self.selected_class = selected_class
        self.active_class = active_class
        self.href = href
        self.to = to
        self.exact = exact
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.ripple = ripple
        self.append_avatar = append_avatar
        self.prepend_avatar = prepend_avatar
        self.closable = closable
        self.close_icon = close_icon
        self.close_label = close_label
        self.filter_icon = filter_icon
        self.pill = pill

        super().__init__(**kwargs)
