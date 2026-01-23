import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Counter(anywidget.AnyWidget):
    """The Counter component.

    

    Args:
        children: The child nodes of the DOM element.
        disabled: Removes the ability to click or target the component.
        max: Sets the maximum allowed value.
        value: Sets the current counter value.
        transition: Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition.
        active: Determines whether the counter is visible or not.

    Returns:
        A VCounter widget.

    seealso:
        `https://vuetifyjs.com/api/v-counter`__
    """

    _esm = bundled_path / "VCounter.js"
    _css = bundled_path / "VCounter-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    max = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum allowed value."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the current counter value."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines whether the counter is visible or not."""

    def __init__(
        self,
        children=None,
        disabled=False,
        max=None,
        value="0",
        transition="{component: {name: 'slide-y-transition'}}",
        active=False,
        **kwargs
    ):
        """Initialize a Counter widget."""
        self.children = children
        self.disabled = disabled
        self.max = max
        self.value = value
        self.transition = transition
        self.active = active

        super().__init__(**kwargs)