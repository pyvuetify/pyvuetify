import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ListItemMedia(anywidget.AnyWidget):
    """The ListItemMedia component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        start: Applies margin at the end of the component.
        end: Applies margin at the start of the component.

    Returns:
        A VListItemMedia widget.

    seealso:
        `https://vuetifyjs.com/api/v-list-item-media`__
    """

    _esm = bundled_path / "VListItemMedia.js"
    _css = bundled_path / "VListItemMedia-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    start = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies margin at the end of the component."""

    end = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies margin at the start of the component."""

    def __init__(
        self,
        children=None,
        tag="div",
        start=False,
        end=False,
        **kwargs
    ):
        """Initialize a ListItemMedia widget."""
        self.children = children
        self.tag = tag
        self.start = start
        self.end = end

        super().__init__(**kwargs)