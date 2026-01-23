import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class PieTooltip(anywidget.AnyWidget):
    """The PieTooltip component.

    

    Args:
        children: The child nodes of the DOM element.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        item: Data item related to hovered segment
        target: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VPieTooltip.json))
        offset: Increases distance from the target. When passed as a pair of numbers, the second value shifts anchor along the side and away from the target.
        transition: The transition used when hovering between chart segments
        title_format: Formatter definition or function. When passed as String macros for `[title]` and `[value]` get replaced dynamically.
        subtitle_format: Formatter definition or function. When passed as String macros for `[title]` and `[value]` get replaced dynamically.

    Returns:
        A VPieTooltip widget.

    seealso:
        `https://vuetifyjs.com/api/v-pie-tooltip`__
    """

    _esm = bundled_path / "VPieTooltip.js"
    _css = bundled_path / "VPieTooltip-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    model_value = traitlets.Bool(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    item = traitlets.Any(allow_none=True).tag(sync=True)
    """Data item related to hovered segment"""

    target = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VPieTooltip.json))"""

    offset = traitlets.Any(allow_none=True).tag(sync=True)
    """Increases distance from the target. When passed as a pair of numbers, the second value shifts anchor along the side and away from the target."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """The transition used when hovering between chart segments"""

    title_format = traitlets.Any(allow_none=True).tag(sync=True)
    """Formatter definition or function. When passed as String macros for `[title]` and `[value]` get replaced dynamically."""

    subtitle_format = traitlets.Any(allow_none=True).tag(sync=True)
    """Formatter definition or function. When passed as String macros for `[title]` and `[value]` get replaced dynamically."""

    def __init__(
        self,
        children=None,
        model_value=False,
        item=None,
        target=None,
        offset="10",
        transition="fade-transition",
        title_format="[title]",
        subtitle_format="[value]",
        **kwargs
    ):
        """Initialize a PieTooltip widget."""
        self.children = children
        self.model_value = model_value
        self.item = item
        self.target = target
        self.offset = offset
        self.transition = transition
        self.title_format = title_format
        self.subtitle_format = subtitle_format

        super().__init__(**kwargs)