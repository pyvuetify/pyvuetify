import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DataTableServer(anywidget.AnyWidget):
    """The DataTableServer component.

    

    Args:
        children: The child nodes of the DOM element.
        search: Text input used to filter items.
        tag: Specify a custom tag used on the root element.
        height: Use the height prop to set the height of the table.
        width: Sets the width for the component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        color: Applies a color to checkboxes, page size dropdown and sort badges in the table header.
        density: Adjusts the vertical height used by the component.
        theme: Specify a theme for this component and all of its children.
        sticky: Deprecated, use `fixed-header` instead.
        mobile: Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint
        mobile_breakpoint: Overrides the display configuration default screen size that the component should be considered in mobile.
        items: An array of strings or objects used for automatically generating children components.
        loading: Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.
        hover: Will add a hover effect to a table's row when the mouse is over it.
        next_icon: Next icon.
        prev_icon: Previous icon.
        value_comparator: Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop.
        item_value: Property on supplied `items` that contains its value.
        item_selectable: Property on supplied `items` that indicates whether the item is selectable.
        return_object: Changes the selection behavior to return the object directly rather than the value specified with **item-value**.
        show_select: Shows the column with checkboxes for selecting items in the list.
        select_strategy: Defines the strategy of selecting items in the list. Possible values are: 'single' (only one item can be selected at a time), 'page' ('Select all' button will select only items on the current page), 'all' ('Select all' button will select all items in the list).
        page: The current displayed page number (1-indexed).
        initial_sort_order: Specifies the initial sort order when an unsorted column is clicked.
        sort_by: Array of column keys and sort orders that determines the sort order of the table.
        multi_sort: Let user sort by multiple properties/columns.

- **key**: (optional) when set to `ctrl`, user is required to hold a keyboard key (Ctrl on PC and Command on Mac)
- **mode**: when user selects a new column to sort by, it will be set first (`prepend`) or last (`append`) in the sort priority. Defaults to `append`
- **modifier**: (optional) allows user to use both multi-sort modes (`append` and `prepend`) simultaneously

**Note**: object notation requires at least **v3.11.0**
        must_sort: Forces sorting on the column(s).
        custom_key_sort: Function used on specific keys within the item object. `customSort` is skipped for columns with `customKeySort` specified.
        items_per_page: The number of items to display on each page.
        expand_on_click: Expands item when the row is clicked.
        show_expand: Shows the expand icon.
        expanded: Array of expanded items. Can be bound to external variable using **v-model:expanded**.
        group_by: Defines the grouping of the table items.
        header_props: Pass props to the default header. See [`v-data-table-server` API](/api/v-data-table-server) for more information.
        cell_props: An object of additional props to be passed to each `<td>` in the table body. Also accepts a function that will be called for each cell. If the same prop is defined both here and in `cellProps` in a headers object, the value from the headers object will be used.
        items_length: Number of all items.
        disable_sort: Toggles rendering of sort button.
        headers: An array of objects that each describe a header column.
        loading_text: Text shown when the data is loading.
        hide_no_data: Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.
        no_data_text: Text shown when no items are provided to the component.
        collapse_icon: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableRow.json))
        expand_icon: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableRow.json))
        group_collapse_icon: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableGroupHeaderRow.json))
        group_expand_icon: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VDataTableGroupHeaderRow.json))
        row_props: An object of additional props to be passed to each `<tr>` in the table body. Also accepts a function that will be called for each row.
        hide_default_body: Hides the default body.
        hide_default_footer: Hides the default footer.
        hide_default_header: Hides the default header.
        fixed_header: Use the fixed-header prop together with the height prop to fix the header to the top of the table.
        sort_asc_icon: Icon used for ascending sort button.
        sort_desc_icon: Icon used for descending sort button.
        fixed_footer: Use the fixed-footer prop together with the height prop to fix the footer to the bottom of the table.
        striped: Applies a background to either **even** or **odd** rows.
        first_icon: First icon.
        last_icon: Last icon.
        items_per_page_text: Text for items-per-page dropdown.
        page_text: Label for page number.
        first_page_label: Label for first page.
        prev_page_label: Label for previous page.
        next_page_label: Label for next page.
        last_page_label: Label for last page.
        items_per_page_options: Array of options to show in the items-per-page dropdown.
        show_current_page: Show current page number between prev/next icons.

    Returns:
        A VDataTableServer widget.

    seealso:
        `https://vuetifyjs.com/api/v-data-table-server`__
    """

    _esm = bundled_path / "VDataTableServer.js"
    _css = bundled_path / "VDataTableServer-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    search = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text input used to filter items."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Use the height prop to set the height of the table."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies a color to checkboxes, page size dropdown and sort badges in the table header."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    sticky = traitlets.Bool(allow_none=True).tag(sync=True)
    """Deprecated, use `fixed-header` instead."""

    mobile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint"""

    mobile_breakpoint = traitlets.Any(allow_none=True).tag(sync=True)
    """Overrides the display configuration default screen size that the component should be considered in mobile."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of strings or objects used for automatically generating children components."""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color."""

    hover = traitlets.Bool(allow_none=True).tag(sync=True)
    """Will add a hover effect to a table's row when the mouse is over it."""

    next_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Next icon."""

    prev_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Previous icon."""

    value_comparator = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop."""

    item_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Property on supplied `items` that contains its value."""

    item_selectable = traitlets.Any(allow_none=True).tag(sync=True)
    """Property on supplied `items` that indicates whether the item is selectable."""

    return_object = traitlets.Bool(allow_none=True).tag(sync=True)
    """Changes the selection behavior to return the object directly rather than the value specified with **item-value**."""

    show_select = traitlets.Bool(allow_none=True).tag(sync=True)
    """Shows the column with checkboxes for selecting items in the list."""

    select_strategy = traitlets.Any(allow_none=True).tag(sync=True)
    """Defines the strategy of selecting items in the list. Possible values are: 'single' (only one item can be selected at a time), 'page' ('Select all' button will select only items on the current page), 'all' ('Select all' button will select all items in the list)."""

    page = traitlets.Any(allow_none=True).tag(sync=True)
    """The current displayed page number (1-indexed)."""

    initial_sort_order = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the initial sort order when an unsorted column is clicked."""

    sort_by = traitlets.Any(allow_none=True).tag(sync=True)
    """Array of column keys and sort orders that determines the sort order of the table."""

    multi_sort = traitlets.Any(allow_none=True).tag(sync=True)
    """Let user sort by multiple properties/columns.

- **key**: (optional) when set to `ctrl`, user is required to hold a keyboard key (Ctrl on PC and Command on Mac)
- **mode**: when user selects a new column to sort by, it will be set first (`prepend`) or last (`append`) in the sort priority. Defaults to `append`
- **modifier**: (optional) allows user to use both multi-sort modes (`append` and `prepend`) simultaneously

**Note**: object notation requires at least **v3.11.0**"""

    must_sort = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces sorting on the column(s)."""

    custom_key_sort = traitlets.Any(allow_none=True).tag(sync=True)
    """Function used on specific keys within the item object. `customSort` is skipped for columns with `customKeySort` specified."""

    items_per_page = traitlets.Any(allow_none=True).tag(sync=True)
    """The number of items to display on each page."""

    expand_on_click = traitlets.Bool(allow_none=True).tag(sync=True)
    """Expands item when the row is clicked."""

    show_expand = traitlets.Bool(allow_none=True).tag(sync=True)
    """Shows the expand icon."""

    expanded = traitlets.Any(allow_none=True).tag(sync=True)
    """Array of expanded items. Can be bound to external variable using **v-model:expanded**."""

    group_by = traitlets.Any(allow_none=True).tag(sync=True)
    """Defines the grouping of the table items."""

    header_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Pass props to the default header. See [`v-data-table-server` API](/api/v-data-table-server) for more information."""

    cell_props = traitlets.Any(allow_none=True).tag(sync=True)
    """An object of additional props to be passed to each `<td>` in the table body. Also accepts a function that will be called for each cell. If the same prop is defined both here and in `cellProps` in a headers object, the value from the headers object will be used."""

    items_length = traitlets.Any(allow_none=True).tag(sync=True)
    """Number of all items."""

    disable_sort = traitlets.Bool(allow_none=True).tag(sync=True)
    """Toggles rendering of sort button."""

    headers = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of objects that each describe a header column."""

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

    hide_default_body = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the default body."""

    hide_default_footer = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the default footer."""

    hide_default_header = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the default header."""

    fixed_header = traitlets.Bool(allow_none=True).tag(sync=True)
    """Use the fixed-header prop together with the height prop to fix the header to the top of the table."""

    sort_asc_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used for ascending sort button."""

    sort_desc_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used for descending sort button."""

    fixed_footer = traitlets.Bool(allow_none=True).tag(sync=True)
    """Use the fixed-footer prop together with the height prop to fix the footer to the bottom of the table."""

    striped = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a background to either **even** or **odd** rows."""

    first_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """First icon."""

    last_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Last icon."""

    items_per_page_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text for items-per-page dropdown."""

    page_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for page number."""

    first_page_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for first page."""

    prev_page_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for previous page."""

    next_page_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for next page."""

    last_page_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for last page."""

    items_per_page_options = traitlets.Any(allow_none=True).tag(sync=True)
    """Array of options to show in the items-per-page dropdown."""

    show_current_page = traitlets.Bool(allow_none=True).tag(sync=True)
    """Show current page number between prev/next icons."""

    def __init__(
        self,
        children=None,
        search=None,
        tag="div",
        height=None,
        width=None,
        model_value="[]",
        color=None,
        density="default",
        theme=None,
        sticky=False,
        mobile=False,
        mobile_breakpoint=None,
        items="[]",
        loading=False,
        hover=False,
        next_icon="$next",
        prev_icon="$prev",
        value_comparator=None,
        item_value="id",
        item_selectable=None,
        return_object=False,
        show_select=False,
        select_strategy="page",
        page="1",
        initial_sort_order="asc",
        sort_by="[]",
        multi_sort=False,
        must_sort=False,
        custom_key_sort=None,
        items_per_page="10",
        expand_on_click=False,
        show_expand=False,
        expanded="[]",
        group_by="[]",
        header_props=None,
        cell_props=None,
        items_length=None,
        disable_sort=False,
        headers=None,
        loading_text="$vuetify.dataIterator.loadingText",
        hide_no_data=False,
        no_data_text="$vuetify.noDataText",
        collapse_icon="$collapse",
        expand_icon="$expand",
        group_collapse_icon="$tableGroupCollapse",
        group_expand_icon="$tableGroupExpand",
        row_props=None,
        hide_default_body=False,
        hide_default_footer=False,
        hide_default_header=False,
        fixed_header=False,
        sort_asc_icon="$sortAsc",
        sort_desc_icon="$sortDesc",
        fixed_footer=False,
        striped=None,
        first_icon="$first",
        last_icon="$last",
        items_per_page_text="$vuetify.dataFooter.itemsPerPageText",
        page_text="$vuetify.dataFooter.pageText",
        first_page_label="$vuetify.dataFooter.firstPage",
        prev_page_label="$vuetify.dataFooter.prevPage",
        next_page_label="$vuetify.dataFooter.nextPage",
        last_page_label="$vuetify.dataFooter.lastPage",
        items_per_page_options="[  {value: 10, title: '10'},  {value: 25, title: '25'},  {value: 50, title: '50'},  {value: 100, title: '100'},  {value: -1, title: '$vuetify.dataFooter.itemsPerPageAll'}]",
        show_current_page=False,
        **kwargs
    ):
        """Initialize a DataTableServer widget."""
        self.children = children
        self.search = search
        self.tag = tag
        self.height = height
        self.width = width
        self.model_value = model_value
        self.color = color
        self.density = density
        self.theme = theme
        self.sticky = sticky
        self.mobile = mobile
        self.mobile_breakpoint = mobile_breakpoint
        self.items = items
        self.loading = loading
        self.hover = hover
        self.next_icon = next_icon
        self.prev_icon = prev_icon
        self.value_comparator = value_comparator
        self.item_value = item_value
        self.item_selectable = item_selectable
        self.return_object = return_object
        self.show_select = show_select
        self.select_strategy = select_strategy
        self.page = page
        self.initial_sort_order = initial_sort_order
        self.sort_by = sort_by
        self.multi_sort = multi_sort
        self.must_sort = must_sort
        self.custom_key_sort = custom_key_sort
        self.items_per_page = items_per_page
        self.expand_on_click = expand_on_click
        self.show_expand = show_expand
        self.expanded = expanded
        self.group_by = group_by
        self.header_props = header_props
        self.cell_props = cell_props
        self.items_length = items_length
        self.disable_sort = disable_sort
        self.headers = headers
        self.loading_text = loading_text
        self.hide_no_data = hide_no_data
        self.no_data_text = no_data_text
        self.collapse_icon = collapse_icon
        self.expand_icon = expand_icon
        self.group_collapse_icon = group_collapse_icon
        self.group_expand_icon = group_expand_icon
        self.row_props = row_props
        self.hide_default_body = hide_default_body
        self.hide_default_footer = hide_default_footer
        self.hide_default_header = hide_default_header
        self.fixed_header = fixed_header
        self.sort_asc_icon = sort_asc_icon
        self.sort_desc_icon = sort_desc_icon
        self.fixed_footer = fixed_footer
        self.striped = striped
        self.first_icon = first_icon
        self.last_icon = last_icon
        self.items_per_page_text = items_per_page_text
        self.page_text = page_text
        self.first_page_label = first_page_label
        self.prev_page_label = prev_page_label
        self.next_page_label = next_page_label
        self.last_page_label = last_page_label
        self.items_per_page_options = items_per_page_options
        self.show_current_page = show_current_page

        super().__init__(**kwargs)