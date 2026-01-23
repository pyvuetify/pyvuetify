import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Responsive(anywidget.AnyWidget):
    """The Responsive component.

    

    Args:
        children: The child nodes of the DOM element.
        height: Sets the height for the component.
        width: Sets the width for the component.
        inline: Display as an inline element instead of a block, also disables flex-grow.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        content_class: Apply a custom class to the internal content element.
        aspect_ratio: Sets a base aspect ratio, calculated as width/height. This will only set a **minimum** height, the component can still grow if it has a lot of content.

    Returns:
        A VResponsive widget.

    seealso:
        `https://vuetifyjs.com/api/v-responsive`__
    """

    _esm = bundled_path / "VResponsive.js"
    _css = bundled_path / "VResponsive-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    inline = traitlets.Bool(allow_none=True).tag(sync=True)
    """Display as an inline element instead of a block, also disables flex-grow."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    content_class = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a custom class to the internal content element."""

    aspect_ratio = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets a base aspect ratio, calculated as width/height. This will only set a **minimum** height, the component can still grow if it has a lot of content."""

    def __init__(
        self,
        children=None,
        height=None,
        width=None,
        inline=False,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        content_class=None,
        aspect_ratio=None,
        **kwargs
    ):
        """Initialize a Responsive widget."""
        self.children = children
        self.height = height
        self.width = width
        self.inline = inline
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.content_class = content_class
        self.aspect_ratio = aspect_ratio

        super().__init__(**kwargs)