import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ListItemTitle(anywidget.AnyWidget):
    """The ListItemTitle component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.

    Returns:
        A VListItemTitle widget.

    seealso:
        `https://vuetifyjs.com/api/v-list-item-title`__
    """

    _esm = bundled_path / "VListItemTitle.js"
    _css = bundled_path / "VListItemTitle-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    def __init__(
        self,
        children=None,
        tag="div",
        **kwargs
    ):
        """Initialize a ListItemTitle widget."""
        self.children = children
        self.tag = tag

        super().__init__(**kwargs)