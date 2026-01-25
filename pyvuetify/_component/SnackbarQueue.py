import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class SnackbarQueue(anywidget.AnyWidget):
    """The SnackbarQueue component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        text: Specify content text for the component.
        closable: Adds a dismiss button that closes the active snackbar.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        location: Specifies the anchor point for positioning the component, using directional cues to align it either horizontally, vertically, or both..
        position: Sets the position for the component.
        absolute: Applies **position: absolute** to the content element.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.
        disabled: Removes the ability to click or target the component.
        eager: Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
        activator: Explicitly sets the overlay's activator.
        close_on_back: Closes the overlay content when the browser's back button is pressed or `$router.back()` is called, cancelling the original navigation. `persistent` overlays will cancel navigation and animate as if they were clicked outside instead of closing.
        contained: Limits the size of the component and scrim to its offset parent. Implies `absolute` and `attach`. (Note: The parent element must have position: relative.).
        content_class: Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component.
        content_props: Apply custom properties to the content.
        opacity: Sets the opacity of the scrim element. Only applies if `scrim` is enabled.
        z_index: The z-index used for the component.
        target: For locationStrategy="connected", specify an element or array of x,y coordinates that the overlay should position itself relative to. This will be the activator element by default.
        activator_props: Apply custom properties to the activator.
        open_on_click: Activate the component when the activator is clicked.
        open_on_hover: Activate the component when the activator is hovered.
        open_on_focus: Activate the component when the activator is focused.
        close_on_content_click: Closes component when you click on its content.
        close_delay: Milliseconds to wait before closing component. Only applies to hover and focus events.
        open_delay: Milliseconds to wait before opening component. Only applies to hover and focus events.
        location_strategy: A function used to specifies how the component should position relative to its activator.
        origin: Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
        offset: Increases distance from the target. When passed as a pair of numbers, the second value shifts anchor along the side and away from the target.
        transition: Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition.
        attach: Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or `true` to disable teleporting. Uses `body` by default.
        close_text: The text used in the close button when using the **closable** prop.
        vertical: Stacks snackbar content on top of the actions (button).
        multi_line: Deprecated, use `min-height` instead. Increases minimum height.
        timer: Display a progress bar that counts down until the snackbar closes. Pass a string to set a custom color, otherwise uses `info`.
        timeout: Time (in milliseconds) to wait until snackbar is automatically hidden.  Use `-1` to keep open indefinitely (`0` in version < 2.3 ). It is recommended for this number to be between `4000` and `10000`. Changes to this property will reset the timeout.

    Returns:
        A VSnackbarQueue widget.

    seealso:
        `https://vuetifyjs.com/api/v-snackbar-queue`__
    """

    _esm = bundled_path / "VSnackbarQueue.js"
    _css = bundled_path / "VSnackbarQueue-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    closable = traitlets.Any(allow_none=True).tag(sync=True)
    """Adds a dismiss button that closes the active snackbar."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

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

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the anchor point for positioning the component, using directional cues to align it either horizontally, vertically, or both.."""

    position = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the position for the component."""

    absolute = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies **position: absolute** to the content element."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    eager = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."""

    activator = traitlets.Any(allow_none=True).tag(sync=True)
    """Explicitly sets the overlay's activator."""

    close_on_back = traitlets.Bool(allow_none=True).tag(sync=True)
    """Closes the overlay content when the browser's back button is pressed or `$router.back()` is called, cancelling the original navigation. `persistent` overlays will cancel navigation and animate as if they were clicked outside instead of closing."""

    contained = traitlets.Bool(allow_none=True).tag(sync=True)
    """Limits the size of the component and scrim to its offset parent. Implies `absolute` and `attach`. (Note: The parent element must have position: relative.)."""

    content_class = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component."""

    content_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply custom properties to the content."""

    opacity = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the opacity of the scrim element. Only applies if `scrim` is enabled."""

    z_index = traitlets.Any(allow_none=True).tag(sync=True)
    """The z-index used for the component."""

    target = traitlets.Any(allow_none=True).tag(sync=True)
    """For locationStrategy="connected", specify an element or array of x,y coordinates that the overlay should position itself relative to. This will be the activator element by default."""

    activator_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply custom properties to the activator."""

    open_on_click = traitlets.Bool(allow_none=True).tag(sync=True)
    """Activate the component when the activator is clicked."""

    open_on_hover = traitlets.Bool(allow_none=True).tag(sync=True)
    """Activate the component when the activator is hovered."""

    open_on_focus = traitlets.Bool(allow_none=True).tag(sync=True)
    """Activate the component when the activator is focused."""

    close_on_content_click = traitlets.Bool(allow_none=True).tag(sync=True)
    """Closes component when you click on its content."""

    close_delay = traitlets.Any(allow_none=True).tag(sync=True)
    """Milliseconds to wait before closing component. Only applies to hover and focus events."""

    open_delay = traitlets.Any(allow_none=True).tag(sync=True)
    """Milliseconds to wait before opening component. Only applies to hover and focus events."""

    location_strategy = traitlets.Any(allow_none=True).tag(sync=True)
    """A function used to specifies how the component should position relative to its activator."""

    origin = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)."""

    offset = traitlets.Any(allow_none=True).tag(sync=True)
    """Increases distance from the target. When passed as a pair of numbers, the second value shifts anchor along the side and away from the target."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition."""

    attach = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or `true` to disable teleporting. Uses `body` by default."""

    close_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The text used in the close button when using the **closable** prop."""

    vertical = traitlets.Bool(allow_none=True).tag(sync=True)
    """Stacks snackbar content on top of the actions (button)."""

    multi_line = traitlets.Bool(allow_none=True).tag(sync=True)
    """Deprecated, use `min-height` instead. Increases minimum height."""

    timer = traitlets.Any(allow_none=True).tag(sync=True)
    """Display a progress bar that counts down until the snackbar closes. Pass a string to set a custom color, otherwise uses `info`."""

    timeout = traitlets.Any(allow_none=True).tag(sync=True)
    """Time (in milliseconds) to wait until snackbar is automatically hidden.  Use `-1` to keep open indefinitely (`0` in version < 2.3 ). It is recommended for this number to be between `4000` and `10000`. Changes to this property will reset the timeout."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        text=None,
        closable=False,
        model_value="[]",
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        location="bottom",
        position=None,
        absolute=False,
        rounded=None,
        tile=False,
        theme=None,
        color=None,
        variant="elevated",
        disabled=False,
        eager=False,
        activator=None,
        close_on_back=True,
        contained=False,
        content_class=None,
        content_props=None,
        opacity=None,
        z_index="2000",
        target=None,
        activator_props="{}",
        open_on_click=None,
        open_on_hover=False,
        open_on_focus=None,
        close_on_content_click=False,
        close_delay=None,
        open_delay=None,
        location_strategy="static",
        origin="auto",
        offset=None,
        transition="v-snackbar-transition",
        attach=False,
        close_text="$vuetify.dismiss",
        vertical=False,
        multi_line=False,
        timer=False,
        timeout="5000",
        **kwargs
    ):
        """Initialize a SnackbarQueue widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.text = text
        self.closable = closable
        self.model_value = model_value
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.location = location
        self.position = position
        self.absolute = absolute
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.color = color
        self.variant = variant
        self.disabled = disabled
        self.eager = eager
        self.activator = activator
        self.close_on_back = close_on_back
        self.contained = contained
        self.content_class = content_class
        self.content_props = content_props
        self.opacity = opacity
        self.z_index = z_index
        self.target = target
        self.activator_props = activator_props
        self.open_on_click = open_on_click
        self.open_on_hover = open_on_hover
        self.open_on_focus = open_on_focus
        self.close_on_content_click = close_on_content_click
        self.close_delay = close_delay
        self.open_delay = open_delay
        self.location_strategy = location_strategy
        self.origin = origin
        self.offset = offset
        self.transition = transition
        self.attach = attach
        self.close_text = close_text
        self.vertical = vertical
        self.multi_line = multi_line
        self.timer = timer
        self.timeout = timeout

        super().__init__(**kwargs)