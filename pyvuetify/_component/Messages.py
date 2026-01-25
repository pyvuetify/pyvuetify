import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Messages(anywidget.AnyWidget):
    """The Messages component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        active: Determines whether the messages are visible or not.
        transition: Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition.
        messages: Displays a list of messages or a single message if using a string.

    Returns:
        A VMessages widget.

    seealso:
        `https://vuetifyjs.com/api/v-messages`__
    """

    _esm = bundled_path / "VMessages.js"
    _css = bundled_path / "VMessages-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines whether the messages are visible or not."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition."""

    messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays a list of messages or a single message if using a string."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        color=None,
        active=False,
        transition="{  component: {name: 'slide-y-transition'},  leaveAbsolute: true,  group: true}",
        messages="[]",
        **kwargs
    ):
        """Initialize a Messages widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.color = color
        self.active = active
        self.transition = transition
        self.messages = messages

        super().__init__(**kwargs)