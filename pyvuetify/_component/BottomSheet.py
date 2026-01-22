import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class BottomSheet(anywidget.AnyWidget):
    """The BottomSheet component.

    The v-bottom-sheet component is used to display supplemental content anchored to the bottom of the screen. It's a variation of the v-dialog component.

    Args:
        children: The child nodes of the DOM element.
        activator: Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node.
        attach: Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.
        close_delay: Milliseconds to wait before closing component. Only applies to hover and focus events.
        content_class: Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component.
        dark: Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
        disabled: Removes the ability to click or target the component.
        eager: Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
        fullscreen: 
        hide_overlay: Hides the display of the overlay.
        inset: Reduces the sheet content maximum width to 70%.
        internal_activator: 
        light: Applies the light theme variant to the component.
        max_width: Sets the maximum width for the component.
        no_click_animation: 
        open_delay: Milliseconds to wait before opening component. Only applies to hover and focus events.
        open_on_hover: 
        origin: Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
        overlay_color: Sets the overlay color.
        overlay_opacity: Sets the overlay opacity.
        persistent: Clicking outside or pressing **esc** key will not dismiss the dialog
        retain_focus: 
        return_value: 
        scrollable: Allows the use of the mouse wheel in the picker
        transition: Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
        value: Controls whether the component is visible or hidden.
        width: Sets the width for the component.

    Returns:
        A BottomSheet widget.
    """

    _esm = bundled_path / "BottomSheet.js"
    _css = bundled_path / "pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    activator = traitlets.Any(allow_none=True).tag(sync=True)
    """Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node."""

    attach = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default."""

    close_delay = traitlets.Any(allow_none=True).tag(sync=True)
    """Milliseconds to wait before closing component. Only applies to hover and focus events."""

    content_class = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component."""

    dark = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html)."""

    disabled = traitlets.Any(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    eager = traitlets.Any(allow_none=True).tag(sync=True)
    """Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."""

    fullscreen = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    hide_overlay = traitlets.Any(allow_none=True).tag(sync=True)
    """Hides the display of the overlay."""

    inset = traitlets.Any(allow_none=True).tag(sync=True)
    """Reduces the sheet content maximum width to 70%."""

    internal_activator = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    light = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the light theme variant to the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    no_click_animation = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    open_delay = traitlets.Any(allow_none=True).tag(sync=True)
    """Milliseconds to wait before opening component. Only applies to hover and focus events."""

    open_on_hover = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    origin = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)."""

    overlay_color = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the overlay color."""

    overlay_opacity = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the overlay opacity."""

    persistent = traitlets.Any(allow_none=True).tag(sync=True)
    """Clicking outside or pressing **esc** key will not dismiss the dialog"""

    retain_focus = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    return_value = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    scrollable = traitlets.Any(allow_none=True).tag(sync=True)
    """Allows the use of the mouse wheel in the picker"""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls whether the component is visible or hidden."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    def __init__(
        self,
        children=None,
        activator=None,
        attach=None,
        close_delay=None,
        content_class=None,
        dark=None,
        disabled=None,
        eager=None,
        fullscreen=None,
        hide_overlay=None,
        inset=None,
        internal_activator=None,
        light=None,
        max_width=None,
        no_click_animation=None,
        open_delay=None,
        open_on_hover=None,
        origin=None,
        overlay_color=None,
        overlay_opacity=None,
        persistent=None,
        retain_focus=None,
        return_value=None,
        scrollable=None,
        transition=None,
        value=None,
        width=None,
        **kwargs
    ):
        """Initialize a BottomSheet widget."""
        self.children = children

        self.activator = activator
        self.attach = attach
        self.close_delay = close_delay
        self.content_class = content_class
        self.dark = dark
        self.disabled = disabled
        self.eager = eager
        self.fullscreen = fullscreen
        self.hide_overlay = hide_overlay
        self.inset = inset
        self.internal_activator = internal_activator
        self.light = light
        self.max_width = max_width
        self.no_click_animation = no_click_animation
        self.open_delay = open_delay
        self.open_on_hover = open_on_hover
        self.origin = origin
        self.overlay_color = overlay_color
        self.overlay_opacity = overlay_opacity
        self.persistent = persistent
        self.retain_focus = retain_focus
        self.return_value = return_value
        self.scrollable = scrollable
        self.transition = transition
        self.value = value
        self.width = width

        super().__init__(**kwargs)