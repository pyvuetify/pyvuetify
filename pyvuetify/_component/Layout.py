import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Layout(anywidget.AnyWidget):
    """The Layout component.

    

    Args:
        children: The child nodes of the DOM element.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        full_height: Sets the component height to 100%.
        overlaps: **FOR INTERNAL USE ONLY**

    Returns:
        A VLayout widget.

    seealso:
        `https://vuetifyjs.com/api/v-layout`__
    """

    _esm = bundled_path / "VLayout.js"
    _css = bundled_path / "VLayout-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    full_height = traitlets.Bool(allow_none=True).tag(sync=True)
    """Sets the component height to 100%."""

    overlaps = traitlets.Any(allow_none=True).tag(sync=True)
    """**FOR INTERNAL USE ONLY**"""

    def __init__(
        self,
        children=None,
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        full_height=False,
        overlaps="[]",
        **kwargs
    ):
        """Initialize a Layout widget."""
        self.children = children
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.full_height = full_height
        self.overlaps = overlaps

        super().__init__(**kwargs)