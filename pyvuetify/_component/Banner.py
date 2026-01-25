import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Banner(anywidget.AnyWidget):
    """The Banner component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        tag: Specify a custom tag used on the root element.
        height: Sets the height for the component.
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
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        avatar: Designates a specific src image to pass to the thumbnail.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        stacked: Forces the banner actions onto a new line. This is not applicable when the banner has `lines="one"`.
        sticky: Applies `position: sticky` to the component with `top: 0`. You can find more information on the [MDN documentation for sticky position](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
        mobile: Applies the mobile banner styles.
        mobile_breakpoint: Overrides the display configuration default screen size that the component should be considered in mobile.
        position: Sets the position for the component.
        lines: The amount of visible lines of text before it truncates.

    Returns:
        A VBanner widget.

    seealso:
        `https://vuetifyjs.com/api/v-banner`__
    """

    _esm = bundled_path / "VBanner.js"
    _css = bundled_path / "VBanner-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

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

    text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    avatar = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Designates a specific src image to pass to the thumbnail."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    stacked = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the banner actions onto a new line. This is not applicable when the banner has `lines="one"`."""

    sticky = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies `position: sticky` to the component with `top: 0`. You can find more information on the [MDN documentation for sticky position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)."""

    mobile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies the mobile banner styles."""

    mobile_breakpoint = traitlets.Any(allow_none=True).tag(sync=True)
    """Overrides the display configuration default screen size that the component should be considered in mobile."""

    position = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the position for the component."""

    lines = traitlets.Any(allow_none=True).tag(sync=True)
    """The amount of visible lines of text before it truncates."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        tag="div",
        height=None,
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
        icon=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        avatar=None,
        bg_color=None,
        stacked=False,
        sticky=False,
        mobile=None,
        mobile_breakpoint=None,
        position=None,
        lines=None,
        **kwargs
    ):
        """Initialize a Banner widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.tag = tag
        self.height = height
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
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.avatar = avatar
        self.bg_color = bg_color
        self.stacked = stacked
        self.sticky = sticky
        self.mobile = mobile
        self.mobile_breakpoint = mobile_breakpoint
        self.position = position
        self.lines = lines

        super().__init__(**kwargs)