import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parent / "static"


class Banner(anywidget.AnyWidget):
    """The Banner component.

    The v-banner component is used to display important information to the user in a prominent way. They are typically placed at the top of screens below the app bar.

    Args:
        app: When used inside of `v-main`, will calculate top based upon application `v-toolbar` and `v-system-bar`.
        color: Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        dark: Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        height: Sets the height for the component.
        icon: Designates a specific icon.
        icon_color: Designates a specific icon color.
        light: Applies the light theme variant to the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        mobile_break_point:
        single_line: Forces the banner onto a single line.
        sticky: Applies **position: sticky** to the component (**Evergreen browsers only**). You can find more information on the [MDN documentation for sticky position](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
        tag: Specify a custom tag used on the root element.
        tile: Removes the component's **border-radius**.
        value: Controls whether the component is visible or hidden.
        width: Sets the width for the component.

    Returns:
        A Banner widget.
    """

    _esm = bundled_path / "Banner.mjs"
    _css = bundled_path / "Banner.css"

    app = traitlets.Any(allow_none=True).tag(sync=True)
    """When used inside of `v-main`, will calculate top based upon application `v-toolbar` and `v-system-bar`."""

    color = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    dark = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html)."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates a specific icon."""

    icon_color = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates a specific icon color."""

    light = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the light theme variant to the component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    mobile_break_point = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    single_line = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces the banner onto a single line."""

    sticky = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies **position: sticky** to the component (**Evergreen browsers only**). You can find more information on the [MDN documentation for sticky position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    tile = traitlets.Any(allow_none=True).tag(sync=True)
    """Removes the component's **border-radius**."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls whether the component is visible or hidden."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    def __init__(
        self,
        app=None,
        color=None,
        dark=None,
        elevation=None,
        height=None,
        icon=None,
        icon_color=None,
        light=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        mobile_break_point=None,
        single_line=None,
        sticky=None,
        tag=None,
        tile=None,
        value=None,
        width=None,
        **kwargs
    ):
        """Initialize a Banner widget."""

        self.app = app
        self.color = color
        self.dark = dark
        self.elevation = elevation
        self.height = height
        self.icon = icon
        self.icon_color = icon_color
        self.light = light
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.mobile_break_point = mobile_break_point
        self.single_line = single_line
        self.sticky = sticky
        self.tag = tag
        self.tile = tile
        self.value = value
        self.width = width

        super().__init__(**kwargs)
