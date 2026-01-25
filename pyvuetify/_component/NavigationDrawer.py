import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class NavigationDrawer(anywidget.AnyWidget):
    """The NavigationDrawer component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        location: Controls the edge of the screen the drawer is attached to.
        absolute: Applies **position: absolute** to the component.
        sticky: When true, the drawer will remain visible when scrolling past the top of the page.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        name: Assign a specific name for layout registration.
        persistent: Clicking outside or pressing **esc** key will not dismiss the dialog.
        scrim: Determines whether an overlay is used when a **temporary** drawer is open. Accepts true/false to enable background, and string to define color.
        close_delay: Milliseconds to wait before closing component. Only applies to hover and focus events.
        open_delay: Milliseconds to wait before opening component. Only applies to hover and focus events.
        retain_focus: Captures and keeps focus within the content element when using **Tab** and **Shift**+**Tab**. Recommended to be `false` when using external tools that require focus such as TinyMCE or vue-clipboard.
        capture_focus: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/focusTrap.json))
        image: Apply a specific background image to the component.
        mobile: Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint
        order: Adjust the order of the component in relation to its registration order.
        floating: A floating drawer has no visible container (no border-right).
        disable_resize_watcher: Prevents the automatic opening or closing of the drawer when resized, based on whether the device is mobile or desktop.
        disable_route_watcher: Disables opening of navigation drawer when route changes.
        expand_on_hover: Collapses the drawer to a **rail-variant** until hovering with the mouse.
        permanent: The drawer remains visible regardless of screen size.
        rail: Sets the component width to the **rail-width** value.
        rail_width: Sets the width for the component when `rail` is enabled.
        temporary: A temporary drawer sits above its application and uses a scrim (overlay) to darken the background.
        touchless: Disable mobile touch functionality.
        mobile_breakpoint: Sets the designated mobile breakpoint for the component. This will apply alternate styles for mobile devices such as the `temporary` prop, or activate the `bottom` prop when the breakpoint value is met. Setting the value to `0` will disable this functionality.

    Returns:
        A VNavigationDrawer widget.

    seealso:
        `https://vuetifyjs.com/api/v-navigation-drawer`__
    """

    _esm = bundled_path / "VNavigationDrawer.js"
    _css = bundled_path / "VNavigationDrawer-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    model_value = traitlets.Bool(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls the edge of the screen the drawer is attached to."""

    absolute = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies **position: absolute** to the component."""

    sticky = traitlets.Bool(allow_none=True).tag(sync=True)
    """When true, the drawer will remain visible when scrolling past the top of the page."""

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

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Assign a specific name for layout registration."""

    persistent = traitlets.Bool(allow_none=True).tag(sync=True)
    """Clicking outside or pressing **esc** key will not dismiss the dialog."""

    scrim = traitlets.Any(allow_none=True).tag(sync=True)
    """Determines whether an overlay is used when a **temporary** drawer is open. Accepts true/false to enable background, and string to define color."""

    close_delay = traitlets.Any(allow_none=True).tag(sync=True)
    """Milliseconds to wait before closing component. Only applies to hover and focus events."""

    open_delay = traitlets.Any(allow_none=True).tag(sync=True)
    """Milliseconds to wait before opening component. Only applies to hover and focus events."""

    retain_focus = traitlets.Bool(allow_none=True).tag(sync=True)
    """Captures and keeps focus within the content element when using **Tab** and **Shift**+**Tab**. Recommended to be `false` when using external tools that require focus such as TinyMCE or vue-clipboard."""

    capture_focus = traitlets.Bool(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/focusTrap.json))"""

    image = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Apply a specific background image to the component."""

    mobile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint"""

    order = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjust the order of the component in relation to its registration order."""

    floating = traitlets.Bool(allow_none=True).tag(sync=True)
    """A floating drawer has no visible container (no border-right)."""

    disable_resize_watcher = traitlets.Bool(allow_none=True).tag(sync=True)
    """Prevents the automatic opening or closing of the drawer when resized, based on whether the device is mobile or desktop."""

    disable_route_watcher = traitlets.Bool(allow_none=True).tag(sync=True)
    """Disables opening of navigation drawer when route changes."""

    expand_on_hover = traitlets.Bool(allow_none=True).tag(sync=True)
    """Collapses the drawer to a **rail-variant** until hovering with the mouse."""

    permanent = traitlets.Bool(allow_none=True).tag(sync=True)
    """The drawer remains visible regardless of screen size."""

    rail = traitlets.Bool(allow_none=True).tag(sync=True)
    """Sets the component width to the **rail-width** value."""

    rail_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component when `rail` is enabled."""

    temporary = traitlets.Bool(allow_none=True).tag(sync=True)
    """A temporary drawer sits above its application and uses a scrim (overlay) to darken the background."""

    touchless = traitlets.Bool(allow_none=True).tag(sync=True)
    """Disable mobile touch functionality."""

    mobile_breakpoint = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the designated mobile breakpoint for the component. This will apply alternate styles for mobile devices such as the `temporary` prop, or activate the `bottom` prop when the breakpoint value is met. Setting the value to `0` will disable this functionality."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        border=False,
        model_value=None,
        width="256",
        elevation=None,
        location="start",
        absolute=False,
        sticky=False,
        rounded=None,
        tile=False,
        tag="nav",
        theme=None,
        color=None,
        name=None,
        persistent=False,
        scrim=True,
        close_delay=None,
        open_delay=None,
        retain_focus=False,
        capture_focus=False,
        image=None,
        mobile=None,
        order="0",
        floating=False,
        disable_resize_watcher=False,
        disable_route_watcher=False,
        expand_on_hover=False,
        permanent=False,
        rail=None,
        rail_width="56",
        temporary=False,
        touchless=False,
        mobile_breakpoint=None,
        **kwargs
    ):
        """Initialize a NavigationDrawer widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.border = border
        self.model_value = model_value
        self.width = width
        self.elevation = elevation
        self.location = location
        self.absolute = absolute
        self.sticky = sticky
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.name = name
        self.persistent = persistent
        self.scrim = scrim
        self.close_delay = close_delay
        self.open_delay = open_delay
        self.retain_focus = retain_focus
        self.capture_focus = capture_focus
        self.image = image
        self.mobile = mobile
        self.order = order
        self.floating = floating
        self.disable_resize_watcher = disable_resize_watcher
        self.disable_route_watcher = disable_route_watcher
        self.expand_on_hover = expand_on_hover
        self.permanent = permanent
        self.rail = rail
        self.rail_width = rail_width
        self.temporary = temporary
        self.touchless = touchless
        self.mobile_breakpoint = mobile_breakpoint

        super().__init__(**kwargs)