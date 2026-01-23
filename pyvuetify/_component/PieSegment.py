import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class PieSegment(anywidget.AnyWidget):
    """The PieSegment component.

    

    Args:
        children: The child nodes of the DOM element.
        pattern: Decal pattern to put on top of the outer slice.
        value: The value used for calculate segment/arc angle size.
        color: Sets segment color to be passed straight to CSS style attribute.
        rounded: Number passed as corner radius relative to 100x100 SVG viewport
        active: Controls the **active** state of the item. This is typically used to highlight the component.
        rotate: Sets segment offset angle.
        inner_cut: Sets inner slice size in percent (0-100).
        hover_scale: Reduces outer radius until segment is hovered. Expects fraction value (0-0.25)
        gap: Reduces segment size by a specified angle. Recommended to in range (0-10).
        animation: Controls duration and easing of the expand/collapse and hover effect. Defaults to `easeInOutCubic` over 400ms.
        hide_slice: Makes inner slice invisible instead of semi-transparent.
        reveal: Enables and controls duration for initial reveal animation. Easing function is shared with `animation` prop.

    Returns:
        A VPieSegment widget.

    seealso:
        `https://vuetifyjs.com/api/v-pie-segment`__
    """

    _esm = bundled_path / "VPieSegment.js"
    _css = bundled_path / "VPieSegment-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    pattern = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Decal pattern to put on top of the outer slice."""

    value = traitlets.Float(allow_none=True).tag(sync=True)
    """The value used for calculate segment/arc angle size."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets segment color to be passed straight to CSS style attribute."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Number passed as corner radius relative to 100x100 SVG viewport"""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Controls the **active** state of the item. This is typically used to highlight the component."""

    rotate = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets segment offset angle."""

    inner_cut = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets inner slice size in percent (0-100)."""

    hover_scale = traitlets.Any(allow_none=True).tag(sync=True)
    """Reduces outer radius until segment is hovered. Expects fraction value (0-0.25)"""

    gap = traitlets.Any(allow_none=True).tag(sync=True)
    """Reduces segment size by a specified angle. Recommended to in range (0-10)."""

    animation = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls duration and easing of the expand/collapse and hover effect. Defaults to `easeInOutCubic` over 400ms."""

    hide_slice = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes inner slice invisible instead of semi-transparent."""

    reveal = traitlets.Any(allow_none=True).tag(sync=True)
    """Enables and controls duration for initial reveal animation. Easing function is shared with `animation` prop."""

    def __init__(
        self,
        children=None,
        pattern=None,
        value="0",
        color=None,
        rounded=None,
        active=False,
        rotate=None,
        inner_cut=None,
        hover_scale="0.05",
        gap=None,
        animation=False,
        hide_slice=False,
        reveal=False,
        **kwargs
    ):
        """Initialize a PieSegment widget."""
        self.children = children
        self.pattern = pattern
        self.value = value
        self.color = color
        self.rounded = rounded
        self.active = active
        self.rotate = rotate
        self.inner_cut = inner_cut
        self.hover_scale = hover_scale
        self.gap = gap
        self.animation = animation
        self.hide_slice = hide_slice
        self.reveal = reveal

        super().__init__(**kwargs)