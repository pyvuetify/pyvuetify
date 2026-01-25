import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Pie(anywidget.AnyWidget):
    """The Pie component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        legend: Controls legend visibility, position and text format.
        title: Specify a title text for the component.
        size: Sets the height and width of the chart (excluding title and legend).
        density: Adjusts the vertical height used by the component.
        rounded: Number passed as corner radius relative to 100x100 SVG viewport
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        items: Data items expected to contain `key`, `title` and `value`.
        item_value: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VPie.json))
        item_key: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VPie.json))
        tooltip: Controls tooltip visibility, transition, offset from the cursor and formats of title and subtitle.
        palette: Defines colors and patterns to be applied based on the data items order. Data items can also define their colors.
        item_title: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VPie.json))
        rotate: Rotates the chart segments clockwise.
        gauge_cut: Allows removing bottom part of the chart to make it into a gauge. Expects angle (0-180).
        inner_cut: Specifies inner radius for a donut-style chart as a percent (0-100). Without `hide-slice`, inner slice is visible with translucent color matching the item.
        hover_scale: Enables interactive behavior by reducing segment size until it gets hovered. Expects fraction value (0-0.25).
        gap: Reduces segment size by a specified angle. Recommended to in range (0-10).
        animation: Controls duration and easing of the expand/collapse and hover effect. Defaults to `easeInOutCubic` over 400ms.
        hide_slice: Makes inner slice invisible instead of semi-transparent.
        reveal: Enables and controls duration for initial reveal animation. Easing function is shared with `animation` prop.

    Returns:
        A VPie widget.

    seealso:
        `https://vuetifyjs.com/api/v-pie`__
    """

    _esm = bundled_path / "VPie.js"
    _css = bundled_path / "VPie-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    legend = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls legend visibility, position and text format."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height and width of the chart (excluding title and legend)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Number passed as corner radius relative to 100x100 SVG viewport"""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """Data items expected to contain `key`, `title` and `value`."""

    item_value = traitlets.Unicode(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VPie.json))"""

    item_key = traitlets.Unicode(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VPie.json))"""

    tooltip = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls tooltip visibility, transition, offset from the cursor and formats of title and subtitle."""

    palette = traitlets.Any(allow_none=True).tag(sync=True)
    """Defines colors and patterns to be applied based on the data items order. Data items can also define their colors."""

    item_title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VPie.json))"""

    rotate = traitlets.Any(allow_none=True).tag(sync=True)
    """Rotates the chart segments clockwise."""

    gauge_cut = traitlets.Any(allow_none=True).tag(sync=True)
    """Allows removing bottom part of the chart to make it into a gauge. Expects angle (0-180)."""

    inner_cut = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies inner radius for a donut-style chart as a percent (0-100). Without `hide-slice`, inner slice is visible with translucent color matching the item."""

    hover_scale = traitlets.Any(allow_none=True).tag(sync=True)
    """Enables interactive behavior by reducing segment size until it gets hovered. Expects fraction value (0-0.25)."""

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
        v_model=None,
        children=None,
        style=None,
        legend=False,
        title=None,
        size="250",
        density="default",
        rounded=None,
        bg_color=None,
        items="[]",
        item_value="value",
        item_key="key",
        tooltip=False,
        palette="[]",
        item_title="title",
        rotate=None,
        gauge_cut=None,
        inner_cut=None,
        hover_scale="0.05",
        gap=None,
        animation=False,
        hide_slice=False,
        reveal=False,
        **kwargs
    ):
        """Initialize a Pie widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.legend = legend
        self.title = title
        self.size = size
        self.density = density
        self.rounded = rounded
        self.bg_color = bg_color
        self.items = items
        self.item_value = item_value
        self.item_key = item_key
        self.tooltip = tooltip
        self.palette = palette
        self.item_title = item_title
        self.rotate = rotate
        self.gauge_cut = gauge_cut
        self.inner_cut = inner_cut
        self.hover_scale = hover_scale
        self.gap = gap
        self.animation = animation
        self.hide_slice = hide_slice
        self.reveal = reveal

        super().__init__(**kwargs)