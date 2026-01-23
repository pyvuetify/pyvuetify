import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DataTableHeaders(anywidget.AnyWidget):
    """The DataTableHeaders component.

    

    Args:
        children: The child nodes of the DOM element.
        color: Applies a color to checkboxes, page size dropdown and sort badges in the table header.
        density: Adjusts the vertical height used by the component.
        sticky: Deprecated, use `fixed-header` instead.
        mobile: Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint
        mobile_breakpoint: Overrides the display configuration default screen size that the component should be considered in mobile.
        loading: Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.
        initial_sort_order: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableHeaders.json))
        multi_sort: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableHeaders.json))
        header_props: Additional props to be be passed to the default header
        disable_sort: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableHeaders.json))
        fixed_header: Sticks the header to the top of the table.
        sort_asc_icon: Icon used for ascending sort button.
        sort_desc_icon: Icon used for descending sort button.

    Returns:
        A VDataTableHeaders widget.

    seealso:
        `https://vuetifyjs.com/api/v-data-table-headers`__
    """

    _esm = bundled_path / "VDataTableHeaders.js"
    _css = bundled_path / "VDataTableHeaders-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies a color to checkboxes, page size dropdown and sort badges in the table header."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    sticky = traitlets.Bool(allow_none=True).tag(sync=True)
    """Deprecated, use `fixed-header` instead."""

    mobile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint"""

    mobile_breakpoint = traitlets.Any(allow_none=True).tag(sync=True)
    """Overrides the display configuration default screen size that the component should be considered in mobile."""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color."""

    initial_sort_order = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableHeaders.json))"""

    multi_sort = traitlets.Bool(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableHeaders.json))"""

    header_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Additional props to be be passed to the default header"""

    disable_sort = traitlets.Bool(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableHeaders.json))"""

    fixed_header = traitlets.Bool(allow_none=True).tag(sync=True)
    """Sticks the header to the top of the table."""

    sort_asc_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used for ascending sort button."""

    sort_desc_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used for descending sort button."""

    def __init__(
        self,
        children=None,
        color=None,
        density="default",
        sticky=False,
        mobile=False,
        mobile_breakpoint=None,
        loading=False,
        initial_sort_order=None,
        multi_sort=False,
        header_props=None,
        disable_sort=False,
        fixed_header=False,
        sort_asc_icon="$sortAsc",
        sort_desc_icon="$sortDesc",
        **kwargs
    ):
        """Initialize a DataTableHeaders widget."""
        self.children = children
        self.color = color
        self.density = density
        self.sticky = sticky
        self.mobile = mobile
        self.mobile_breakpoint = mobile_breakpoint
        self.loading = loading
        self.initial_sort_order = initial_sort_order
        self.multi_sort = multi_sort
        self.header_props = header_props
        self.disable_sort = disable_sort
        self.fixed_header = fixed_header
        self.sort_asc_icon = sort_asc_icon
        self.sort_desc_icon = sort_desc_icon

        super().__init__(**kwargs)