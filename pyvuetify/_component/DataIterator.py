import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DataIterator(anywidget.AnyWidget):
    """The DataIterator component.

    

    Args:
        children: The child nodes of the DOM element.
        search: Text input used to filter items.
        tag: Specify a custom tag used on the root element.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        transition: Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition.
        items: An array of strings or objects used for automatically generating children components.
        loading: If `true` and no items are provided, then a loading text will be shown.
        value_comparator: Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop.
        item_value: Property on supplied `items` that contains its value.
        item_selectable: Property on supplied `items` that contains the boolean value indicating if the item is selectable.
        return_object: Changes the selection behavior to return the object directly rather than the value specified with **item-value**.
        show_select: Shows the column with checkboxes for selecting items in the list.
        select_strategy: Defines the strategy of selecting items in the list. Possible values are: 'single' (only one item can be selected at a time), 'page' ('Select all' button will select only items on the current page), 'all' ('Select all' button will select all items in the list).
        page: The current displayed page number (1-indexed).
        initial_sort_order: Specifies the initial sort order when an **toggleSort** is called for unsorted property.
        sort_by: Array of column keys and sort orders that determines the sort order of the table.
        multi_sort: Let user sort by multiple properties/columns.

- **key**: (optional) when set to `ctrl`, user is required to hold a keyboard key (Ctrl on PC and Command on Mac)
- **mode**: when user selects a new column to sort by, it will be set first (`prepend`) or last (`append`) in the sort priority. Defaults to `append`
- **modifier**: (optional) allows user to use both multi-sort modes (`append` and `prepend`) simultaneously

**Note**: object notation requires at least **v3.11.0**
        must_sort: Forces sorting on the column(s).
        custom_key_sort: Function used on specific keys within the item object. `customSort` is skipped for columns with `customKeySort` specified.
        items_per_page: Changes how many items per page should be visible. Can be bound to external variable using **v-model:itemsPerPage**.. Setting this prop to `-1` will display all items on the page.
        expand_on_click: Expands item when the row is clicked.
        show_expand: Shows the expand icon.
        expanded: Array of expanded items. Can be bound to external variable using **v-model:expanded**.
        group_by: Configures attributes (and sort order) to group items together.
        filter_mode: Controls how the results of `customFilter` and `customKeyFilter` are combined. All modes only apply `customFilter` to columns not specified in `customKeyFilter`.

- **some**: There is at least one match from either the custom filter or the custom key filter.
- **every**: All columns match either the custom filter or the custom key filter.
- **union**: There is at least one match from the custom filter, or all columns match the custom key filters.
- **intersection**: There is at least one match from the custom filter, and all columns match the custom key filters.
        no_filter: Disables all item filtering.
        custom_filter: Function to filter items.
        custom_key_filter: Function used on specific keys within the item object. `customFilter` is skipped for columns with `customKeyFilter` specified.
        filter_keys: Array of specific keys to filter on the item.

    Returns:
        A VDataIterator widget.

    seealso:
        `https://vuetifyjs.com/api/v-data-iterator`__
    """

    _esm = bundled_path / "VDataIterator.js"
    _css = bundled_path / "VDataIterator-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    search = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text input used to filter items."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of strings or objects used for automatically generating children components."""

    loading = traitlets.Bool(allow_none=True).tag(sync=True)
    """If `true` and no items are provided, then a loading text will be shown."""

    value_comparator = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop."""

    item_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Property on supplied `items` that contains its value."""

    item_selectable = traitlets.Any(allow_none=True).tag(sync=True)
    """Property on supplied `items` that contains the boolean value indicating if the item is selectable."""

    return_object = traitlets.Bool(allow_none=True).tag(sync=True)
    """Changes the selection behavior to return the object directly rather than the value specified with **item-value**."""

    show_select = traitlets.Bool(allow_none=True).tag(sync=True)
    """Shows the column with checkboxes for selecting items in the list."""

    select_strategy = traitlets.Any(allow_none=True).tag(sync=True)
    """Defines the strategy of selecting items in the list. Possible values are: 'single' (only one item can be selected at a time), 'page' ('Select all' button will select only items on the current page), 'all' ('Select all' button will select all items in the list)."""

    page = traitlets.Any(allow_none=True).tag(sync=True)
    """The current displayed page number (1-indexed)."""

    initial_sort_order = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the initial sort order when an **toggleSort** is called for unsorted property."""

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
    """Changes how many items per page should be visible. Can be bound to external variable using **v-model:itemsPerPage**.. Setting this prop to `-1` will display all items on the page."""

    expand_on_click = traitlets.Bool(allow_none=True).tag(sync=True)
    """Expands item when the row is clicked."""

    show_expand = traitlets.Bool(allow_none=True).tag(sync=True)
    """Shows the expand icon."""

    expanded = traitlets.Any(allow_none=True).tag(sync=True)
    """Array of expanded items. Can be bound to external variable using **v-model:expanded**."""

    group_by = traitlets.Any(allow_none=True).tag(sync=True)
    """Configures attributes (and sort order) to group items together."""

    filter_mode = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls how the results of `customFilter` and `customKeyFilter` are combined. All modes only apply `customFilter` to columns not specified in `customKeyFilter`.

- **some**: There is at least one match from either the custom filter or the custom key filter.
- **every**: All columns match either the custom filter or the custom key filter.
- **union**: There is at least one match from the custom filter, or all columns match the custom key filters.
- **intersection**: There is at least one match from the custom filter, and all columns match the custom key filters."""

    no_filter = traitlets.Bool(allow_none=True).tag(sync=True)
    """Disables all item filtering."""

    custom_filter = traitlets.Any(allow_none=True).tag(sync=True)
    """Function to filter items."""

    custom_key_filter = traitlets.Any(allow_none=True).tag(sync=True)
    """Function used on specific keys within the item object. `customFilter` is skipped for columns with `customKeyFilter` specified."""

    filter_keys = traitlets.Any(allow_none=True).tag(sync=True)
    """Array of specific keys to filter on the item."""

    def __init__(
        self,
        children=None,
        search=None,
        tag="div",
        model_value="[]",
        transition="{component: {name: 'fade-transition'}, hideOnLeave: true}",
        items="[]",
        loading=False,
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
        items_per_page="5",
        expand_on_click=False,
        show_expand=False,
        expanded="[]",
        group_by="[]",
        filter_mode="intersection",
        no_filter=False,
        custom_filter=None,
        custom_key_filter=None,
        filter_keys=None,
        **kwargs
    ):
        """Initialize a DataIterator widget."""
        self.children = children
        self.search = search
        self.tag = tag
        self.model_value = model_value
        self.transition = transition
        self.items = items
        self.loading = loading
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
        self.filter_mode = filter_mode
        self.no_filter = no_filter
        self.custom_filter = custom_filter
        self.custom_key_filter = custom_key_filter
        self.filter_keys = filter_keys

        super().__init__(**kwargs)