import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ExpandXTransition(anywidget.AnyWidget):
    """The ExpandXTransition component.

    

    Args:
        children: The child nodes of the DOM element.
        disabled: Removes the ability to click or target the component.
        mode: Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/api/built-in-components.html#transition).
        group: Creates a `transition-group` component. You can find more information in the [vue docs](https://vuejs.org/api/built-in-components.html#transitiongroup).

    Returns:
        A VExpandXTransition widget.

    seealso:
        `https://vuetifyjs.com/api/v-expand-x-transition`__
    """

    _esm = bundled_path / "VExpandXTransition.js"
    _css = bundled_path / "VExpandXTransition-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    mode = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/api/built-in-components.html#transition)."""

    group = traitlets.Bool(allow_none=True).tag(sync=True)
    """Creates a `transition-group` component. You can find more information in the [vue docs](https://vuejs.org/api/built-in-components.html#transitiongroup)."""

    def __init__(
        self,
        children=None,
        disabled=False,
        mode="in-out",
        group=False,
        **kwargs
    ):
        """Initialize a ExpandXTransition widget."""
        self.children = children
        self.disabled = disabled
        self.mode = mode
        self.group = group

        super().__init__(**kwargs)