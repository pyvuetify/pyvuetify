import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ListItemSubtitle(anywidget.AnyWidget):
    """The ListItemSubtitle component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        opacity: Sets the component's opacity value

    Returns:
        A VListItemSubtitle widget.

    seealso:
        `https://vuetifyjs.com/api/v-list-item-subtitle`__
    """

    _esm = bundled_path / "VListItemSubtitle.js"
    _css = bundled_path / "VListItemSubtitle-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    opacity = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component's opacity value"""

    def __init__(
        self,
        children=None,
        tag="div",
        opacity=None,
        **kwargs
    ):
        """Initialize a ListItemSubtitle widget."""
        self.children = children
        self.tag = tag
        self.opacity = opacity

        super().__init__(**kwargs)