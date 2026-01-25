import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class TimelineItem(anywidget.AnyWidget):
    """The TimelineItem component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        icon: Apply a specific icon to the inside dot using the [v-icon](/components/icons/) component.
        density: Adjusts the vertical height used by the component.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        size: Size of the item dot
        icon_color: Color of the icon.
        side: Show the item either **before** or **after** the timeline. This will override the implicit ordering of items, but will in turn be overridden by the `v-timeline` **single-side** prop.
        dot_color: Color of the item dot.
        fill_dot: Remove outer border of item dot, making the color fill the entire dot.
        hide_dot: Hide the timeline item dot.
        hide_opposite: Hide opposite content if it exists.
        line_inset: Specifies the distance between the line and the dot of the item.

    Returns:
        A VTimelineItem widget.

    seealso:
        `https://vuetifyjs.com/api/v-timeline-item`__
    """

    _esm = bundled_path / "VTimelineItem.js"
    _css = bundled_path / "VTimelineItem-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon to the inside dot using the [v-icon](/components/icons/) component."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

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

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Size of the item dot"""

    icon_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Color of the icon."""

    side = traitlets.Any(allow_none=True).tag(sync=True)
    """Show the item either **before** or **after** the timeline. This will override the implicit ordering of items, but will in turn be overridden by the `v-timeline` **single-side** prop."""

    dot_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Color of the item dot."""

    fill_dot = traitlets.Bool(allow_none=True).tag(sync=True)
    """Remove outer border of item dot, making the color fill the entire dot."""

    hide_dot = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the timeline item dot."""

    hide_opposite = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide opposite content if it exists."""

    line_inset = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the distance between the line and the dot of the item."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        icon=None,
        density=None,
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        elevation=None,
        rounded=None,
        tile=False,
        tag="div",
        size="default",
        icon_color=None,
        side=None,
        dot_color=None,
        fill_dot=False,
        hide_dot=False,
        hide_opposite=None,
        line_inset=None,
        **kwargs
    ):
        """Initialize a TimelineItem widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.icon = icon
        self.density = density
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.size = size
        self.icon_color = icon_color
        self.side = side
        self.dot_color = dot_color
        self.fill_dot = fill_dot
        self.hide_dot = hide_dot
        self.hide_opposite = hide_opposite
        self.line_inset = line_inset

        super().__init__(**kwargs)