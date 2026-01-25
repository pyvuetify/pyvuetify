import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class SlideXReverseTransition(anywidget.AnyWidget):
    """The SlideXReverseTransition component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        disabled: Removes the ability to click or target the component.
        mode: Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/api/built-in-components.html#transition).
        origin: Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
        group: Creates a `transition-group` component. You can find more information in the [vue docs](https://vuejs.org/api/built-in-components.html#transitiongroup).
        hide_on_leave: Hides the leaving element (no exit animation).
        leave_absolute: Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/)).

    Returns:
        A VSlideXReverseTransition widget.

    seealso:
        `https://vuetifyjs.com/api/v-slide-x-reverse-transition`__
    """

    _esm = bundled_path / "VSlideXReverseTransition.js"
    _css = bundled_path / "VSlideXReverseTransition-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

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
        v_model=None,
        children=None,
        style=None,
        disabled=False,
        mode=None,
        origin=None,
        group=False,
        hide_on_leave=False,
        leave_absolute=False,
        **kwargs
    ):
        """Initialize a SlideXReverseTransition widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.disabled = disabled
        self.mode = mode
        self.origin = origin
        self.group = group
        self.hide_on_leave = hide_on_leave
        self.leave_absolute = leave_absolute

        super().__init__(**kwargs)