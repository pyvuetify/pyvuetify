import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Overlay(anywidget.AnyWidget):
    """The Overlay component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        disabled: Removes the ability to click or target the component.
        height: Sets the height for the component.
        width: Sets the width for the component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        location: Specifies the anchor point for positioning the component, using directional cues to align it either horizontally, vertically, or both..
        absolute: Applies **position: absolute** to the content element.
        theme: Specify a theme for this component and all of its children.
        transition: Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        activator: Explicitly sets the overlay's activator.
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
        open_on_click: Activate the component when the activator is clicked.
        open_on_hover: Activate the component when the activator is hovered.
        open_on_focus: Activate the component when the activator is focused.
        close_on_content_click: Closes component when you click on its content.
        close_delay: Milliseconds to wait before closing component. Only applies to hover and focus events.
        open_delay: Milliseconds to wait before opening component. Only applies to hover and focus events.
        eager: Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
        location_strategy: A function used to specifies how the component should position relative to its activator.
        origin: Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
        offset: Increases distance from the target. When passed as a pair of numbers, the second value shifts anchor along the side and away from the target.
        stick_to_target: Enables the overlay content to go off-screen when scrolling.
        viewport_margin: Sets custom viewport margin for the overlay content
        scroll_strategy: Strategy used when the component is activate and user scrolls.
        retain_focus: Captures and keeps focus within the content element when using **Tab** and **Shift**+**Tab**. Recommended to be `false` when using external tools that require focus such as TinyMCE or vue-clipboard.
        capture_focus: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/focusTrap.json))
        attach: Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or `true` to disable teleporting. Uses `body` by default.

    Returns:
        A VOverlay widget.

    seealso:
        `https://vuetifyjs.com/api/v-overlay`__
    """

    _esm = bundled_path / "VOverlay.js"
    _css = bundled_path / "VOverlay-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    model_value = traitlets.Bool(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the anchor point for positioning the component, using directional cues to align it either horizontally, vertically, or both.."""

    absolute = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies **position: absolute** to the content element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

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

    eager = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."""

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

    attach = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or `true` to disable teleporting. Uses `body` by default."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        disabled=False,
        height=None,
        width=None,
        model_value=False,
        location="bottom",
        absolute=False,
        theme=None,
        transition="fade-transition",
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        activator=None,
        close_on_back=True,
        contained=False,
        content_class=None,
        content_props=None,
        opacity=None,
        no_click_animation=False,
        persistent=False,
        scrim=True,
        z_index="2000",
        target=None,
        activator_props="{}",
        open_on_click=None,
        open_on_hover=False,
        open_on_focus=None,
        close_on_content_click=False,
        close_delay=None,
        open_delay=None,
        eager=False,
        location_strategy="static",
        origin="auto",
        offset=None,
        stick_to_target=False,
        viewport_margin="12",
        scroll_strategy="block",
        retain_focus=False,
        capture_focus=False,
        attach=False,
        **kwargs
    ):
        """Initialize a Overlay widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.disabled = disabled
        self.height = height
        self.width = width
        self.model_value = model_value
        self.location = location
        self.absolute = absolute
        self.theme = theme
        self.transition = transition
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.activator = activator
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
        self.eager = eager
        self.location_strategy = location_strategy
        self.origin = origin
        self.offset = offset
        self.stick_to_target = stick_to_target
        self.viewport_margin = viewport_margin
        self.scroll_strategy = scroll_strategy
        self.retain_focus = retain_focus
        self.capture_focus = capture_focus
        self.attach = attach

        super().__init__(**kwargs)