import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Menu(anywidget.AnyWidget):
    """The Menu component.

    

    Args:
        children: The child nodes of the DOM element.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component. Use `auto` to use the activator width.
        width: Sets the width for the component.
        location: Specifies the anchor point for positioning the component, using directional cues to align it either horizontally, vertically, or both..
        theme: Specify a theme for this component and all of its children.
        disabled: Removes the ability to click or target the component.
        id: The unique identifier of the component.
        eager: Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
        activator: Explicitly sets the overlay's activator.
        submenu: Opens with right arrow and closes on left instead of up/down. Implies `location="end"`. Directions are reversed for RTL.
        close_on_back: Closes the overlay content when the browser's back button is pressed or `$router.back()` is called, cancelling the original navigation. `persistent` overlays will cancel navigation and animate as if they were clicked outside instead of closing.
        contained: Limits the size of the component and scrim to its offset parent. Implies `absolute` and `attach`. (Note: The parent element must have position: relative.).
        content_class: Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component.
        content_props: Apply custom properties to the content.
        opacity: Sets the opacity of the scrim element. Only applies if `scrim` is enabled.
        no_click_animation: Disables the bounce effect when clicking outside of the content element when using the persistent prop.
        persistent: Clicking outside of the element or pressing esc key will not deactivate it.
        scrim: Accepts true/false to enable background, and string to define color.
        z_index: The z-index used for the component.
        target: For locationStrategy="connected", specify an element or array of x,y coordinates that the overlay should position itself relative to. This will be the activator element by default.
        activator_props: Apply custom properties to the activator.
        open_on_click: Designates whether menu should open on activator click.
        open_on_hover: Designates whether menu should open on activator hover.
        open_on_focus: Activate the component when the activator is focused.
        close_on_content_click: Designates if menu should close when its content is clicked.
        close_delay: Milliseconds to wait before closing component. Only works with the **open-on-hover** prop.
        open_delay: Milliseconds to wait before opening component. Only works with the **open-on-hover** prop.
        location_strategy: A function used to specifies how the component should position relative to its activator.
        origin: Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
        offset: Increases distance from the target. When passed as a pair of numbers, the second value shifts anchor along the side and away from the target.
        stick_to_target: Enables the overlay content to go off-screen when scrolling.
        viewport_margin: Sets custom viewport margin for the overlay content
        scroll_strategy: Strategy used when the component is activate and user scrolls.
        retain_focus: Captures and keeps focus within the content element when using **Tab** and **Shift**+**Tab**. Recommended to be `false` when using external tools that require focus such as TinyMCE or vue-clipboard.
        capture_focus: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/focusTrap.json))
        disable_initial_focus: Deprecated, use `capture-focus` instead. Prevents automatic redirect of first `focusin` event. Intended to use on permanently open menus or VSpeedDial.
        transition: Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition.
        attach: Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or `true` to disable teleporting. Uses `body` by default. Generally not recommended except as a last resort: the default positioning algorithm should handle most scenarios better than is possible without teleporting, and you may have unexpected behavior if the menu ends up as child of its activator.

    Returns:
        A VMenu widget.

    seealso:
        `https://vuetifyjs.com/api/v-menu`__
    """

    _esm = bundled_path / "VMenu.js"
    _css = bundled_path / "VMenu-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    model_value = traitlets.Bool(allow_none=True).tag(sync=True)
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
    """Sets the minimum width for the component. Use `auto` to use the activator width."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the anchor point for positioning the component, using directional cues to align it either horizontally, vertically, or both.."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    id = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The unique identifier of the component."""

    eager = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."""

    activator = traitlets.Any(allow_none=True).tag(sync=True)
    """Explicitly sets the overlay's activator."""

    submenu = traitlets.Bool(allow_none=True).tag(sync=True)
    """Opens with right arrow and closes on left instead of up/down. Implies `location="end"`. Directions are reversed for RTL."""

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

    no_click_animation = traitlets.Bool(allow_none=True).tag(sync=True)
    """Disables the bounce effect when clicking outside of the content element when using the persistent prop."""

    persistent = traitlets.Bool(allow_none=True).tag(sync=True)
    """Clicking outside of the element or pressing esc key will not deactivate it."""

    scrim = traitlets.Any(allow_none=True).tag(sync=True)
    """Accepts true/false to enable background, and string to define color."""

    z_index = traitlets.Any(allow_none=True).tag(sync=True)
    """The z-index used for the component."""

    target = traitlets.Any(allow_none=True).tag(sync=True)
    """For locationStrategy="connected", specify an element or array of x,y coordinates that the overlay should position itself relative to. This will be the activator element by default."""

    activator_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply custom properties to the activator."""

    open_on_click = traitlets.Bool(allow_none=True).tag(sync=True)
    """Designates whether menu should open on activator click."""

    open_on_hover = traitlets.Bool(allow_none=True).tag(sync=True)
    """Designates whether menu should open on activator hover."""

    open_on_focus = traitlets.Bool(allow_none=True).tag(sync=True)
    """Activate the component when the activator is focused."""

    close_on_content_click = traitlets.Bool(allow_none=True).tag(sync=True)
    """Designates if menu should close when its content is clicked."""

    close_delay = traitlets.Any(allow_none=True).tag(sync=True)
    """Milliseconds to wait before closing component. Only works with the **open-on-hover** prop."""

    open_delay = traitlets.Any(allow_none=True).tag(sync=True)
    """Milliseconds to wait before opening component. Only works with the **open-on-hover** prop."""

    location_strategy = traitlets.Any(allow_none=True).tag(sync=True)
    """A function used to specifies how the component should position relative to its activator."""

    origin = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)."""

    offset = traitlets.Any(allow_none=True).tag(sync=True)
    """Increases distance from the target. When passed as a pair of numbers, the second value shifts anchor along the side and away from the target."""

    stick_to_target = traitlets.Bool(allow_none=True).tag(sync=True)
    """Enables the overlay content to go off-screen when scrolling."""

    viewport_margin = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets custom viewport margin for the overlay content"""

    scroll_strategy = traitlets.Any(allow_none=True).tag(sync=True)
    """Strategy used when the component is activate and user scrolls."""

    retain_focus = traitlets.Bool(allow_none=True).tag(sync=True)
    """Captures and keeps focus within the content element when using **Tab** and **Shift**+**Tab**. Recommended to be `false` when using external tools that require focus such as TinyMCE or vue-clipboard."""

    capture_focus = traitlets.Bool(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/focusTrap.json))"""

    disable_initial_focus = traitlets.Bool(allow_none=True).tag(sync=True)
    """Deprecated, use `capture-focus` instead. Prevents automatic redirect of first `focusin` event. Intended to use on permanently open menus or VSpeedDial."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition."""

    attach = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or `true` to disable teleporting. Uses `body` by default. Generally not recommended except as a last resort: the default positioning algorithm should handle most scenarios better than is possible without teleporting, and you may have unexpected behavior if the menu ends up as child of its activator."""

    def __init__(
        self,
        children=None,
        model_value=False,
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        location=None,
        theme=None,
        disabled=False,
        id=None,
        eager=False,
        activator=None,
        submenu=False,
        close_on_back=True,
        contained=False,
        content_class=None,
        content_props=None,
        opacity=None,
        no_click_animation=False,
        persistent=False,
        scrim=False,
        z_index="2000",
        target=None,
        activator_props="{}",
        open_on_click=None,
        open_on_hover=False,
        open_on_focus=None,
        close_on_content_click=True,
        close_delay="250",
        open_delay="300",
        location_strategy="connected",
        origin="auto",
        offset=None,
        stick_to_target=False,
        viewport_margin="12",
        scroll_strategy="reposition",
        retain_focus=False,
        capture_focus=True,
        disable_initial_focus=False,
        transition="{component: {name: 'VDialogTransition'}}",
        attach=False,
        **kwargs
    ):
        """Initialize a Menu widget."""
        self.children = children
        self.model_value = model_value
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.location = location
        self.theme = theme
        self.disabled = disabled
        self.id = id
        self.eager = eager
        self.activator = activator
        self.submenu = submenu
        self.close_on_back = close_on_back
        self.contained = contained
        self.content_class = content_class
        self.content_props = content_props
        self.opacity = opacity
        self.no_click_animation = no_click_animation
        self.persistent = persistent
        self.scrim = scrim
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
        self.stick_to_target = stick_to_target
        self.viewport_margin = viewport_margin
        self.scroll_strategy = scroll_strategy
        self.retain_focus = retain_focus
        self.capture_focus = capture_focus
        self.disable_initial_focus = disable_initial_focus
        self.transition = transition
        self.attach = attach

        super().__init__(**kwargs)