import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parent / "static"


class AppBar(anywidget.AnyWidget):
    """The AppBar component.

    The v-app-bar component is a top navigation component that provides a flexible toolbar for app layouts. It is typically used to provide navigation controls and page title information.

    Args:
        absolute: Applies **position: absolute** to the component.
        app: Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop
        bottom: Aligns the component towards the bottom.
        clipped_left: Designates that the application's `v-navigation-drawer` that is positioned on the left is below the app-bar.
        clipped_right: Designates that the application's `v-navigation-drawer` that is positioned on the right is below the app-bar.
        collapse:
        collapse_on_scroll: Puts the app-bar into a collapsed state when scrolling.
        color: Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        dark: Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
        dense: Reduces the input height
        elevate_on_scroll: Elevates the app-bar when scrolling.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        extended:
        extension_height:
        fade_img_on_scroll: When using the **src** prop or `img` slot, will fade the image when scrolling.
        fixed: Applies **position: fixed** to the component.
        flat: Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props
        floating:
        height: Sets the height for the component.
        hide_on_scroll: Hides the app-bar when scrolling. Will still show the `extension` slot.
        inverted_scroll: Hides the app-bar when scrolling down and displays it when scrolling up.
        light: Applies the light theme variant to the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        prominent:
        scroll_off_screen: Hides the app-bar when scrolling. Will **NOT** show the `extension` slot.
        scroll_target: Designates the element to target for scrolling events. Uses `window` by default.
        scroll_threshold: The amount of scroll distance down before **hide-on-scroll** activates.
        short:
        shrink_on_scroll: Shrinks a **prominent** toolbar to a **dense** or **short** (default) one when scrolling.
        src: Image source. See `v-img` for details
        tag: Specify a custom tag used on the root element.
        tile: Removes the component's **border-radius**.
        value: Controls whether the component is visible or hidden.
        width: Sets the width for the component.

    Returns:
        A AppBar widget.
    """

    _esm = bundled_path / "AppBar.mjs"
    _css = bundled_path / "AppBar.css"

    absolute = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies **position: absolute** to the component."""

    app = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop"""

    bottom = traitlets.Any(allow_none=True).tag(sync=True)
    """Aligns the component towards the bottom."""

    clipped_left = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates that the application's `v-navigation-drawer` that is positioned on the left is below the app-bar."""

    clipped_right = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates that the application's `v-navigation-drawer` that is positioned on the right is below the app-bar."""

    collapse = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    collapse_on_scroll = traitlets.Any(allow_none=True).tag(sync=True)
    """Puts the app-bar into a collapsed state when scrolling."""

    color = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    dark = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html)."""

    dense = traitlets.Any(allow_none=True).tag(sync=True)
    """Reduces the input height"""

    elevate_on_scroll = traitlets.Any(allow_none=True).tag(sync=True)
    """Elevates the app-bar when scrolling."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    extended = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    extension_height = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    fade_img_on_scroll = traitlets.Any(allow_none=True).tag(sync=True)
    """When using the **src** prop or `img` slot, will fade the image when scrolling."""

    fixed = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies **position: fixed** to the component."""

    flat = traitlets.Any(allow_none=True).tag(sync=True)
    """Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props"""

    floating = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    hide_on_scroll = traitlets.Any(allow_none=True).tag(sync=True)
    """Hides the app-bar when scrolling. Will still show the `extension` slot."""

    inverted_scroll = traitlets.Any(allow_none=True).tag(sync=True)
    """Hides the app-bar when scrolling down and displays it when scrolling up."""

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

    prominent = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    scroll_off_screen = traitlets.Any(allow_none=True).tag(sync=True)
    """Hides the app-bar when scrolling. Will **NOT** show the `extension` slot."""

    scroll_target = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the element to target for scrolling events. Uses `window` by default."""

    scroll_threshold = traitlets.Any(allow_none=True).tag(sync=True)
    """The amount of scroll distance down before **hide-on-scroll** activates."""

    short = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    shrink_on_scroll = traitlets.Any(allow_none=True).tag(sync=True)
    """Shrinks a **prominent** toolbar to a **dense** or **short** (default) one when scrolling."""

    src = traitlets.Any(allow_none=True).tag(sync=True)
    """Image source. See `v-img` for details"""

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
        absolute=None,
        app=None,
        bottom=None,
        clipped_left=None,
        clipped_right=None,
        collapse=None,
        collapse_on_scroll=None,
        color=None,
        dark=None,
        dense=None,
        elevate_on_scroll=None,
        elevation=None,
        extended=None,
        extension_height=None,
        fade_img_on_scroll=None,
        fixed=None,
        flat=None,
        floating=None,
        height=None,
        hide_on_scroll=None,
        inverted_scroll=None,
        light=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        prominent=None,
        scroll_off_screen=None,
        scroll_target=None,
        scroll_threshold=None,
        short=None,
        shrink_on_scroll=None,
        src=None,
        tag=None,
        tile=None,
        value=None,
        width=None,
        **kwargs
    ):
        """Initialize a AppBar widget."""

        self.absolute = absolute
        self.app = app
        self.bottom = bottom
        self.clipped_left = clipped_left
        self.clipped_right = clipped_right
        self.collapse = collapse
        self.collapse_on_scroll = collapse_on_scroll
        self.color = color
        self.dark = dark
        self.dense = dense
        self.elevate_on_scroll = elevate_on_scroll
        self.elevation = elevation
        self.extended = extended
        self.extension_height = extension_height
        self.fade_img_on_scroll = fade_img_on_scroll
        self.fixed = fixed
        self.flat = flat
        self.floating = floating
        self.height = height
        self.hide_on_scroll = hide_on_scroll
        self.inverted_scroll = inverted_scroll
        self.light = light
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.prominent = prominent
        self.scroll_off_screen = scroll_off_screen
        self.scroll_target = scroll_target
        self.scroll_threshold = scroll_threshold
        self.short = short
        self.shrink_on_scroll = shrink_on_scroll
        self.src = src
        self.tag = tag
        self.tile = tile
        self.value = value
        self.width = width

        super().__init__(**kwargs)
