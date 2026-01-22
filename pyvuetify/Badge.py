import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parent / "static"


class Badge(anywidget.AnyWidget):
    """The Badge component.

    The v-badge component is a small status descriptor for UI elements. It provides a visual indicator of notifications, counts, or other status information.

    Args:
        avatar: Removes badge padding for the use of the `v-avatar` in the **badge** slot.
        bordered: Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property.
        bottom: Aligns the component towards the bottom.
        color: Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        content: Any content you want injected as text into the badge.
        dark: Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
        dot: Reduce the size of the badge and hide its contents
        icon: Designates a specific icon used in the badge.
        inline: Moves the badge to be inline with the wrapping element. Supports the usage of the **left** prop.
        label: The **aria-label** used for the badge
        left: Aligns the component towards the left.
        light: Applies the light theme variant to the component.
        mode: Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
        offset_x: Offset the badge on the x-axis.
        offset_y: Offset the badge on the y-axis.
        origin: Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
        overlap: Overlaps the slotted content on top of the component.
        tile: Removes the component's border-radius.
        transition: Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
        value: Controls whether the component is visible or hidden.

    Returns:
        A Badge widget.
    """

    _esm = bundled_path / "Badge.mjs"
    _css = bundled_path / "Badge.css"

    avatar = traitlets.Any(allow_none=True).tag(sync=True)
    """Removes badge padding for the use of the `v-avatar` in the **badge** slot."""

    bordered = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property."""

    bottom = traitlets.Any(allow_none=True).tag(sync=True)
    """Aligns the component towards the bottom."""

    color = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    content = traitlets.Any(allow_none=True).tag(sync=True)
    """Any content you want injected as text into the badge."""

    dark = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html)."""

    dot = traitlets.Any(allow_none=True).tag(sync=True)
    """Reduce the size of the badge and hide its contents"""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates a specific icon used in the badge."""

    inline = traitlets.Any(allow_none=True).tag(sync=True)
    """Moves the badge to be inline with the wrapping element. Supports the usage of the **left** prop."""

    label = traitlets.Any(allow_none=True).tag(sync=True)
    """The **aria-label** used for the badge"""

    left = traitlets.Any(allow_none=True).tag(sync=True)
    """Aligns the component towards the left."""

    light = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the light theme variant to the component."""

    mode = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition)."""

    offset_x = traitlets.Any(allow_none=True).tag(sync=True)
    """Offset the badge on the x-axis."""

    offset_y = traitlets.Any(allow_none=True).tag(sync=True)
    """Offset the badge on the y-axis."""

    origin = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)."""

    overlap = traitlets.Any(allow_none=True).tag(sync=True)
    """Overlaps the slotted content on top of the component."""

    tile = traitlets.Any(allow_none=True).tag(sync=True)
    """Removes the component's border-radius."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls whether the component is visible or hidden."""

    def __init__(
        self,
        avatar=None,
        bordered=None,
        bottom=None,
        color=None,
        content=None,
        dark=None,
        dot=None,
        icon=None,
        inline=None,
        label=None,
        left=None,
        light=None,
        mode=None,
        offset_x=None,
        offset_y=None,
        origin=None,
        overlap=None,
        tile=None,
        transition=None,
        value=None,
        **kwargs
    ):
        """Initialize a Badge widget."""

        self.avatar = avatar
        self.bordered = bordered
        self.bottom = bottom
        self.color = color
        self.content = content
        self.dark = dark
        self.dot = dot
        self.icon = icon
        self.inline = inline
        self.label = label
        self.left = left
        self.light = light
        self.mode = mode
        self.offset_x = offset_x
        self.offset_y = offset_y
        self.origin = origin
        self.overlap = overlap
        self.tile = tile
        self.transition = transition
        self.value = value

        super().__init__(**kwargs)
