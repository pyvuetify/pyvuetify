import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Sparkline(anywidget.AnyWidget):
    """The Sparkline component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        type: Choose between a trendline or bars.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        fill: Using the **fill** property allows you to better customize the look and feel of your sparkline.
        height: Height of the SVG trendline or bars.
        width: Width of the SVG trendline or bars.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        labels: An array of string labels that correspond to the same index as its data counterpart.
        max: The maximum value of the sparkline.
        min: The minimum value of the sparkline.
        id: The id of the component.
        item_value: The value of the item.
        gradient: An array of colors to use as a linear-gradient.
        auto_line_width: Automatically expand bars to use space efficiently.
        auto_draw: Trace the length of the line when first rendered.
        auto_draw_duration: Amount of time (in ms) to run the trace animation.
        auto_draw_easing: The easing function to use for the trace animation.
        gradient_direction: The direction the gradient should run.
        label_size: The label font size.
        line_width: The thickness of the line, in px.
        padding: Low `smooth` or high `line-width` values may result in cropping, increase padding to compensate.
        show_labels: Show labels below each data point.
        smooth: Number of px to use as a corner radius. `true` defaults to 8, `false` is 0.

    Returns:
        A VSparkline widget.

    seealso:
        `https://vuetifyjs.com/api/v-sparkline`__
    """

    _esm = bundled_path / "VSparkline.js"
    _css = bundled_path / "VSparkline-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    type = traitlets.Any(allow_none=True).tag(sync=True)
    """Choose between a trendline or bars."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    fill = traitlets.Bool(allow_none=True).tag(sync=True)
    """Using the **fill** property allows you to better customize the look and feel of your sparkline."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Height of the SVG trendline or bars."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Width of the SVG trendline or bars."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    labels = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of string labels that correspond to the same index as its data counterpart."""

    max = traitlets.Any(allow_none=True).tag(sync=True)
    """The maximum value of the sparkline."""

    min = traitlets.Any(allow_none=True).tag(sync=True)
    """The minimum value of the sparkline."""

    id = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The id of the component."""

    item_value = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The value of the item."""

    gradient = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of colors to use as a linear-gradient."""

    auto_line_width = traitlets.Bool(allow_none=True).tag(sync=True)
    """Automatically expand bars to use space efficiently."""

    auto_draw = traitlets.Bool(allow_none=True).tag(sync=True)
    """Trace the length of the line when first rendered."""

    auto_draw_duration = traitlets.Any(allow_none=True).tag(sync=True)
    """Amount of time (in ms) to run the trace animation."""

    auto_draw_easing = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The easing function to use for the trace animation."""

    gradient_direction = traitlets.Any(allow_none=True).tag(sync=True)
    """The direction the gradient should run."""

    label_size = traitlets.Any(allow_none=True).tag(sync=True)
    """The label font size."""

    line_width = traitlets.Any(allow_none=True).tag(sync=True)
    """The thickness of the line, in px."""

    padding = traitlets.Any(allow_none=True).tag(sync=True)
    """Low `smooth` or high `line-width` values may result in cropping, increase padding to compensate."""

    show_labels = traitlets.Bool(allow_none=True).tag(sync=True)
    """Show labels below each data point."""

    smooth = traitlets.Any(allow_none=True).tag(sync=True)
    """Number of px to use as a corner radius. `true` defaults to 8, `false` is 0."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        type="trend",
        model_value="[]",
        fill=False,
        height="75",
        width="300",
        color=None,
        labels="[]",
        max=None,
        min=None,
        id=None,
        item_value="value",
        gradient="[]",
        auto_line_width=False,
        auto_draw=False,
        auto_draw_duration=None,
        auto_draw_easing="ease",
        gradient_direction="top",
        label_size="7",
        line_width="4",
        padding="8",
        show_labels=False,
        smooth=False,
        **kwargs
    ):
        """Initialize a Sparkline widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.type = type
        self.model_value = model_value
        self.fill = fill
        self.height = height
        self.width = width
        self.color = color
        self.labels = labels
        self.max = max
        self.min = min
        self.id = id
        self.item_value = item_value
        self.gradient = gradient
        self.auto_line_width = auto_line_width
        self.auto_draw = auto_draw
        self.auto_draw_duration = auto_draw_duration
        self.auto_draw_easing = auto_draw_easing
        self.gradient_direction = gradient_direction
        self.label_size = label_size
        self.line_width = line_width
        self.padding = padding
        self.show_labels = show_labels
        self.smooth = smooth

        super().__init__(**kwargs)