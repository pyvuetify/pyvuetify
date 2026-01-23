import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class SlideYReverseTransition(anywidget.AnyWidget):
    """The SlideYReverseTransition component.

    

    Args:
        children: The child nodes of the DOM element.
        disabled: Removes the ability to click or target the component.
        mode: Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/api/built-in-components.html#transition).
        origin: Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
        group: Creates a `transition-group` component. You can find more information in the [vue docs](https://vuejs.org/api/built-in-components.html#transitiongroup).
        hide_on_leave: Hides the leaving element (no exit animation).
        leave_absolute: Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)).

    Returns:
        A VSlideYReverseTransition widget.

    seealso:
        `https://vuetifyjs.com/api/v-slide-y-reverse-transition`__
    """

    _esm = bundled_path / "VSlideYReverseTransition.js"
    _css = bundled_path / "VSlideYReverseTransition-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    mode = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/api/built-in-components.html#transition)."""

    origin = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)."""

    group = traitlets.Bool(allow_none=True).tag(sync=True)
    """Creates a `transition-group` component. You can find more information in the [vue docs](https://vuejs.org/api/built-in-components.html#transitiongroup)."""

    hide_on_leave = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the leaving element (no exit animation)."""

    leave_absolute = traitlets.Bool(allow_none=True).tag(sync=True)
    """Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))."""

    def __init__(
        self,
        children=None,
        disabled=False,
        mode=None,
        origin=None,
        group=False,
        hide_on_leave=False,
        leave_absolute=False,
        **kwargs
    ):
        """Initialize a SlideYReverseTransition widget."""
        self.children = children
        self.disabled = disabled
        self.mode = mode
        self.origin = origin
        self.group = group
        self.hide_on_leave = hide_on_leave
        self.leave_absolute = leave_absolute

        super().__init__(**kwargs)