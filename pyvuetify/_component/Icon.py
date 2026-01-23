import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Icon(anywidget.AnyWidget):
    """The Icon component.

    

    Args:
        children: The child nodes of the DOM element.
        end: Applies margin at the start of the component.
        start: Applies margin at the end of the component.
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        disabled: Removes the ability to click or target the component.
        size: Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**.
        opacity: Sets the component's opacity value

    Returns:
        A VIcon widget.

    seealso:
        `https://vuetifyjs.com/api/v-icon`__
    """

    _esm = bundled_path / "VIcon.js"
    _css = bundled_path / "VIcon-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    end = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies margin at the start of the component."""

    start = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies margin at the end of the component."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**."""

    opacity = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component's opacity value"""

    def __init__(
        self,
        children=None,
        end=False,
        start=False,
        icon=None,
        tag="i",
        theme=None,
        color=None,
        disabled=False,
        size="default",
        opacity=None,
        **kwargs
    ):
        """Initialize a Icon widget."""
        self.children = children
        self.end = end
        self.start = start
        self.icon = icon
        self.tag = tag
        self.theme = theme
        self.color = color
        self.disabled = disabled
        self.size = size
        self.opacity = opacity

        super().__init__(**kwargs)