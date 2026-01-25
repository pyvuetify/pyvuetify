import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DataTableRows(anywidget.AnyWidget):
    """The DataTableRows component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        mobile: Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint
        mobile_breakpoint: Overrides the display configuration default screen size that the component should be considered in mobile.
        items: An array of strings or objects used for automatically generating children components.
        loading: Displays `loading` slot if set to `true`
        cell_props: An object of additional props to be passed to each `<td>` in the table body. Also accepts a function that will be called for each cell. If the same prop is defined both here and in `cellProps` in a headers object, the value from the headers object will be used.
        loading_text: Text shown when the data is loading.
        hide_no_data: Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.
        no_data_text: Text shown when no items are provided to the component.
        collapse_icon: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableRow.json))
        expand_icon: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableRow.json))
        group_collapse_icon: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableGroupHeaderRow.json))
        group_expand_icon: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableGroupHeaderRow.json))
        row_props: An object of additional props to be passed to each `<tr>` in the table body. Also accepts a function that will be called for each row.

    Returns:
        A VDataTableRows widget.

    seealso:
        `https://vuetifyjs.com/api/v-data-table-rows`__
    """

    _esm = bundled_path / "VDataTableRows.js"
    _css = bundled_path / "VDataTableRows-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    mobile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint"""

    mobile_breakpoint = traitlets.Any(allow_none=True).tag(sync=True)
    """Overrides the display configuration default screen size that the component should be considered in mobile."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of strings or objects used for automatically generating children components."""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays `loading` slot if set to `true`"""

    cell_props = traitlets.Any(allow_none=True).tag(sync=True)
    """An object of additional props to be passed to each `<td>` in the table body. Also accepts a function that will be called for each cell. If the same prop is defined both here and in `cellProps` in a headers object, the value from the headers object will be used."""

    loading_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text shown when the data is loading."""

    hide_no_data = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open."""

    no_data_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text shown when no items are provided to the component."""

    collapse_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableRow.json))"""

    expand_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableRow.json))"""

    group_collapse_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableGroupHeaderRow.json))"""

    group_expand_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableGroupHeaderRow.json))"""

    row_props = traitlets.Any(allow_none=True).tag(sync=True)
    """An object of additional props to be passed to each `<tr>` in the table body. Also accepts a function that will be called for each row."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        color=None,
        density="default",
        mobile=False,
        mobile_breakpoint=None,
        items="[]",
        loading=False,
        cell_props=None,
        loading_text="$vuetify.dataIterator.loadingText",
        hide_no_data=False,
        no_data_text="$vuetify.noDataText",
        collapse_icon="$collapse",
        expand_icon="$expand",
        group_collapse_icon="$tableGroupCollapse",
        group_expand_icon="$tableGroupExpand",
        row_props=None,
        **kwargs
    ):
        """Initialize a DataTableRows widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.color = color
        self.density = density
        self.mobile = mobile
        self.mobile_breakpoint = mobile_breakpoint
        self.items = items
        self.loading = loading
        self.cell_props = cell_props
        self.loading_text = loading_text
        self.hide_no_data = hide_no_data
        self.no_data_text = no_data_text
        self.collapse_icon = collapse_icon
        self.expand_icon = expand_icon
        self.group_collapse_icon = group_collapse_icon
        self.group_expand_icon = group_expand_icon
        self.row_props = row_props

        super().__init__(**kwargs)