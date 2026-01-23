import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DataTableRow(anywidget.AnyWidget):
    """The DataTableRow component.

    

    Args:
        children: The child nodes of the DOM element.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        mobile: Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint
        mobile_breakpoint: Overrides the display configuration default screen size that the component should be considered in mobile.
        item: Data (key, index and column values) of the displayed item.
        cell_props: Props to be applied to the cell.
        index: Row index.
        collapse_icon: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableRow.json))
        expand_icon: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableRow.json))

    Returns:
        A VDataTableRow widget.

    seealso:
        `https://vuetifyjs.com/api/v-data-table-row`__
    """

    _esm = bundled_path / "VDataTableRow.js"
    _css = bundled_path / "VDataTableRow-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    mobile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint"""

    mobile_breakpoint = traitlets.Any(allow_none=True).tag(sync=True)
    """Overrides the display configuration default screen size that the component should be considered in mobile."""

    item = traitlets.Any(allow_none=True).tag(sync=True)
    """Data (key, index and column values) of the displayed item."""

    cell_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Props to be applied to the cell."""

    index = traitlets.Float(allow_none=True).tag(sync=True)
    """Row index."""

    collapse_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableRow.json))"""

    expand_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableRow.json))"""

    def __init__(
        self,
        children=None,
        color=None,
        density="default",
        mobile=False,
        mobile_breakpoint=None,
        item=None,
        cell_props=None,
        index=None,
        collapse_icon="$collapse",
        expand_icon="$expand",
        **kwargs
    ):
        """Initialize a DataTableRow widget."""
        self.children = children
        self.color = color
        self.density = density
        self.mobile = mobile
        self.mobile_breakpoint = mobile_breakpoint
        self.item = item
        self.cell_props = cell_props
        self.index = index
        self.collapse_icon = collapse_icon
        self.expand_icon = expand_icon

        super().__init__(**kwargs)