import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Timeline(anywidget.AnyWidget):
    """The Timeline component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        align: Places the timeline dot at the top or center of the timeline item.
        size: Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**.
        density: Adjusts the vertical height used by the component.
        theme: Specify a theme for this component and all of its children.
        direction: Display timeline in a **vertical** or **horizontal** direction.
        icon_color: Color of the icon.
        justify: Places timeline line at the center or automatically on the left or right side.
        line_thickness: Thickness of the timeline line.
        line_color: Color of the timeline line.
        dot_color: Color of the item dot.
        fill_dot: Remove outer border of item dot, making the color fill the entire dot.
        hide_opposite: Hide opposite content if it exists.
        line_inset: Specifies the distance between the line and the dot of timeline items.
        side: Display all timeline items on one side of the timeline, either **start** or **end**.
        truncate_line: Truncate timeline directly at the **start** or **end** of the line, or on **both** ends.

    Returns:
        A VTimeline widget.

    seealso:
        `https://vuetifyjs.com/api/v-timeline`__
    """

    _esm = bundled_path / "VTimeline.js"
    _css = bundled_path / "VTimeline-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    align = traitlets.Any(allow_none=True).tag(sync=True)
    """Places the timeline dot at the top or center of the timeline item."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    direction = traitlets.Any(allow_none=True).tag(sync=True)
    """Display timeline in a **vertical** or **horizontal** direction."""

    icon_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Color of the icon."""

    justify = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Places timeline line at the center or automatically on the left or right side."""

    line_thickness = traitlets.Any(allow_none=True).tag(sync=True)
    """Thickness of the timeline line."""

    line_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Color of the timeline line."""

    dot_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Color of the item dot."""

    fill_dot = traitlets.Bool(allow_none=True).tag(sync=True)
    """Remove outer border of item dot, making the color fill the entire dot."""

    hide_opposite = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide opposite content if it exists."""

    line_inset = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the distance between the line and the dot of timeline items."""

    side = traitlets.Any(allow_none=True).tag(sync=True)
    """Display all timeline items on one side of the timeline, either **start** or **end**."""

    truncate_line = traitlets.Any(allow_none=True).tag(sync=True)
    """Truncate timeline directly at the **start** or **end** of the line, or on **both** ends."""

    def __init__(
        self,
        children=None,
        tag="div",
        align="center",
        size="default",
        density="default",
        theme=None,
        direction="vertical",
        icon_color=None,
        justify="auto",
        line_thickness="2",
        line_color=None,
        dot_color=None,
        fill_dot=False,
        hide_opposite=None,
        line_inset="0",
        side=None,
        truncate_line=None,
        **kwargs
    ):
        """Initialize a Timeline widget."""
        self.children = children
        self.tag = tag
        self.align = align
        self.size = size
        self.density = density
        self.theme = theme
        self.direction = direction
        self.icon_color = icon_color
        self.justify = justify
        self.line_thickness = line_thickness
        self.line_color = line_color
        self.dot_color = dot_color
        self.fill_dot = fill_dot
        self.hide_opposite = hide_opposite
        self.line_inset = line_inset
        self.side = side
        self.truncate_line = truncate_line

        super().__init__(**kwargs)