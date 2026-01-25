import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class SvgIcon(anywidget.AnyWidget):
    """The SvgIcon component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.
        tag: Specify a custom tag used on the root element.

    Returns:
        A VSvgIcon widget.

    seealso:
        `https://vuetifyjs.com/api/v-svg-icon`__
    """

    _esm = bundled_path / "VSvgIcon.js"
    _css = bundled_path / "VSvgIcon-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        icon=None,
        tag=None,
        **kwargs
    ):
        """Initialize a SvgIcon widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.icon = icon
        self.tag = tag

        super().__init__(**kwargs)