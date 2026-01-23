import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class IconBtn(anywidget.AnyWidget):
    """The IconBtn component.

    

    Args:
        children: The child nodes of the DOM element.
        text: Specify content text for the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.
        height: Sets the height for the component.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        icon_sizes: An array of tuples that define the icon sizes for each named size.
        icon_size: The specific size of the icon, can use named sizes.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.
        disabled: Removes the ability to click or target the component.
        size: Sets the height and width of the component.
        active: When undefined (default), the component utilizes its default variant, otherwise it will use the activeVariant if active is true, or the baseVariant if active is false.
        active_color: The applied color when the component is in an active state.
        readonly: Puts the button in a readonly state. Cannot be clicked or navigated to by keyboard.
        loading: Displays circular progress bar in place of the icon.
        opacity: Sets the component's opacity value
        icon_color: Explicit color applied to the icon.
        base_variant: When active is a boolean, this variant is used when active is false.
        hide_overlay: Hides overlay from being displayed when active or focused.
        rotate: The rotation of the icon in degrees.
        sizes: An array of tuples that define the button sizes for each named size.
        active_icon: When active is a boolean, this icon is used when active is true.
        active_variant: When active is a boolean, this variant is used when active is true.

    Returns:
        A VIconBtn widget.

    seealso:
        `https://vuetifyjs.com/api/v-icon-btn`__
    """

    _esm = bundled_path / "VIconBtn.js"
    _css = bundled_path / "VIconBtn-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    text = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    icon_sizes = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of tuples that define the icon sizes for each named size."""

    icon_size = traitlets.Any(allow_none=True).tag(sync=True)
    """The specific size of the icon, can use named sizes."""

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
    """Sets the height and width of the component."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """When undefined (default), the component utilizes its default variant, otherwise it will use the activeVariant if active is true, or the baseVariant if active is false."""

    active_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The applied color when the component is in an active state."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the button in a readonly state. Cannot be clicked or navigated to by keyboard."""

    loading = traitlets.Bool(allow_none=True).tag(sync=True)
    """Displays circular progress bar in place of the icon."""

    opacity = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component's opacity value"""

    icon_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Explicit color applied to the icon."""

    base_variant = traitlets.Any(allow_none=True).tag(sync=True)
    """When active is a boolean, this variant is used when active is false."""

    hide_overlay = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides overlay from being displayed when active or focused."""

    rotate = traitlets.Any(allow_none=True).tag(sync=True)
    """The rotation of the icon in degrees."""

    sizes = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of tuples that define the button sizes for each named size."""

    active_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """When active is a boolean, this icon is used when active is true."""

    active_variant = traitlets.Any(allow_none=True).tag(sync=True)
    """When active is a boolean, this variant is used when active is true."""

    def __init__(
        self,
        children=None,
        text=None,
        border=False,
        icon=None,
        height=None,
        width=None,
        elevation=None,
        icon_sizes="[  ['x-small', 10],  ['small', 16],  ['default', 24],  ['large', 28],  ['x-large', 32]]",
        icon_size=None,
        rounded=None,
        tile=False,
        tag="button",
        theme=None,
        color=None,
        variant="flat",
        disabled=False,
        size="default",
        active=None,
        active_color=None,
        readonly=False,
        loading=False,
        opacity=None,
        icon_color=None,
        base_variant="tonal",
        hide_overlay=False,
        rotate=None,
        sizes="[  ['x-small', 16],  ['small', 24],  ['default', 40],  ['large', 48],  ['x-large', 56]]",
        active_icon=None,
        active_variant=None,
        **kwargs
    ):
        """Initialize a IconBtn widget."""
        self.children = children
        self.text = text
        self.border = border
        self.icon = icon
        self.height = height
        self.width = width
        self.elevation = elevation
        self.icon_sizes = icon_sizes
        self.icon_size = icon_size
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.variant = variant
        self.disabled = disabled
        self.size = size
        self.active = active
        self.active_color = active_color
        self.readonly = readonly
        self.loading = loading
        self.opacity = opacity
        self.icon_color = icon_color
        self.base_variant = base_variant
        self.hide_overlay = hide_overlay
        self.rotate = rotate
        self.sizes = sizes
        self.active_icon = active_icon
        self.active_variant = active_variant

        super().__init__(**kwargs)