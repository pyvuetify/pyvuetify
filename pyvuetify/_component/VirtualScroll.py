import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class VirtualScroll(anywidget.AnyWidget):
    """The VirtualScroll component.

    

    Args:
        children: The child nodes of the DOM element.
        height: Height of the component as a css value/
        width: Sets the width for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        items: The array of items to display.
        item_height: Height in pixels of each item to display.
        item_key: Should point to a property with a unique value for each item, if not set then item index will be used as a key which may result in unnecessary re-renders.
        renderless: Disables default component rendering functionality. The parent node must be [a positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position#types_of_positioning), e.g. using `position: relative;`

    Returns:
        A VVirtualScroll widget.

    seealso:
        `https://vuetifyjs.com/api/v-virtual-scroll`__
    """

    _esm = bundled_path / "VVirtualScroll.js"
    _css = bundled_path / "VVirtualScroll-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Height of the component as a css value/"""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """The array of items to display."""

    item_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Height in pixels of each item to display."""

    item_key = traitlets.Any(allow_none=True).tag(sync=True)
    """Should point to a property with a unique value for each item, if not set then item index will be used as a key which may result in unnecessary re-renders."""

    renderless = traitlets.Bool(allow_none=True).tag(sync=True)
    """Disables default component rendering functionality. The parent node must be [a positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position#types_of_positioning), e.g. using `position: relative;`"""

    def __init__(
        self,
        children=None,
        height=None,
        width=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        items="[]",
        item_height=None,
        item_key=None,
        renderless=False,
        **kwargs
    ):
        """Initialize a VirtualScroll widget."""
        self.children = children
        self.height = height
        self.width = width
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.items = items
        self.item_height = item_height
        self.item_key = item_key
        self.renderless = renderless

        super().__init__(**kwargs)