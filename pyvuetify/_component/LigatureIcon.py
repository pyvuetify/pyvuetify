import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class LigatureIcon(anywidget.AnyWidget):
    """The LigatureIcon component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.

    Returns:
        A VLigatureIcon widget.

    seealso:
        `https://vuetifyjs.com/api/v-ligature-icon`__
    """

    _esm = bundled_path / "VLigatureIcon.js"
    _css = bundled_path / "VLigatureIcon-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

    def __init__(
        self,
        children=None,
        tag=None,
        icon=None,
        **kwargs
    ):
        """Initialize a LigatureIcon widget."""
        self.children = children
        self.tag = tag
        self.icon = icon

        super().__init__(**kwargs)