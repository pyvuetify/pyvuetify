import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class LigatureIcon(anywidget.AnyWidget):
    """The LigatureIcon component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        tag: Specify a custom tag used on the root element.
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.

    Returns:
        A VLigatureIcon widget.

    seealso:
        `https://vuetifyjs.com/api/v-ligature-icon`__
    """

    _esm = bundled_path / "VLigatureIcon.js"
    _css = bundled_path / "VLigatureIcon-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        tag=None,
        icon=None,
        **kwargs
    ):
        """Initialize a LigatureIcon widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.tag = tag
        self.icon = icon

        super().__init__(**kwargs)