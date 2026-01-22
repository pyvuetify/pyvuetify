import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class BottomNavigation(anywidget.AnyWidget):
    """The BottomNavigation component.

    The v-bottom-navigation component is a bottom navigation bar used for mobile applications. It displays 3-5 destinations at the bottom of a screen.

    Args:
        children: The child nodes of the DOM element.
        absolute: Applies **position: absolute** to the component.
        active_class: The class applied to a [v-btn](/components/buttons) when activated.
        app: Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop
        background_color: Changes the background-color for the component.
        color: Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        dark: Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
        fixed: Applies **position: fixed** to the component.
        grow: Force [v-btn](/components/buttons)s to take up all available space.
        height: Sets the height for the component.
        hide_on_scroll: Will transition the navigation off screen when scrolling up.
        horizontal: Uses an alternative horizontal styling for [v-btn](/components/buttons).
        input_value: Controls whether the component is visible or hidden. Supports the **.sync** modifier.
        light: Applies the light theme variant to the component.
        mandatory: Forces a value to always be selected (if available).
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        scroll_target: Designates the element to target for scrolling events. Uses `window` by default.
        scroll_threshold: The amount of scroll distance down before **hide-on-scroll** activates.
        shift: Hides text of [v-btn](/components/buttons)s when they are not active.
        value: Holds the value of the currently active [v-btn](/components/buttons). If the button has no value supplied, its index will be used instead..
        width: Sets the width for the component.

    Returns:
        A BottomNavigation widget.
    """

    _esm = bundled_path / "BottomNavigation.js"
    _css = bundled_path / "pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    absolute = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies **position: absolute** to the component."""

    active_class = traitlets.Any(allow_none=True).tag(sync=True)
    """The class applied to a [v-btn](/components/buttons) when activated."""

    app = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop"""

    background_color = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the background-color for the component."""

    color = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    dark = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html)."""

    fixed = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies **position: fixed** to the component."""

    grow = traitlets.Any(allow_none=True).tag(sync=True)
    """Force [v-btn](/components/buttons)s to take up all available space."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    hide_on_scroll = traitlets.Any(allow_none=True).tag(sync=True)
    """Will transition the navigation off screen when scrolling up."""

    horizontal = traitlets.Any(allow_none=True).tag(sync=True)
    """Uses an alternative horizontal styling for [v-btn](/components/buttons)."""

    input_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls whether the component is visible or hidden. Supports the **.sync** modifier."""

    light = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the light theme variant to the component."""

    mandatory = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces a value to always be selected (if available)."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    scroll_target = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the element to target for scrolling events. Uses `window` by default."""

    scroll_threshold = traitlets.Any(allow_none=True).tag(sync=True)
    """The amount of scroll distance down before **hide-on-scroll** activates."""

    shift = traitlets.Any(allow_none=True).tag(sync=True)
    """Hides text of [v-btn](/components/buttons)s when they are not active."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """Holds the value of the currently active [v-btn](/components/buttons). If the button has no value supplied, its index will be used instead.."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    def __init__(
        self,
        children=None,
        absolute=None,
        active_class=None,
        app=None,
        background_color=None,
        color=None,
        dark=None,
        fixed=None,
        grow=None,
        height=None,
        hide_on_scroll=None,
        horizontal=None,
        input_value=None,
        light=None,
        mandatory=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        scroll_target=None,
        scroll_threshold=None,
        shift=None,
        value=None,
        width=None,
        **kwargs
    ):
        """Initialize a BottomNavigation widget."""
        self.children = children

        self.absolute = absolute
        self.active_class = active_class
        self.app = app
        self.background_color = background_color
        self.color = color
        self.dark = dark
        self.fixed = fixed
        self.grow = grow
        self.height = height
        self.hide_on_scroll = hide_on_scroll
        self.horizontal = horizontal
        self.input_value = input_value
        self.light = light
        self.mandatory = mandatory
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.scroll_target = scroll_target
        self.scroll_threshold = scroll_threshold
        self.shift = shift
        self.value = value
        self.width = width

        super().__init__(**kwargs)