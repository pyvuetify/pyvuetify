import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Treeview(anywidget.AnyWidget):
    """The Treeview component.

    

    Args:
        children: The child nodes of the DOM element.
        search: The search model for filtering results.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        model_value: Allows one to control which nodes are selected. The array contains the values of currently selected items. It is equivalent to the `v-model:selected`
        density: Adjusts the vertical height used by the component.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `shaped` prop.
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the active node - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.
        activated: Array of ids of activated nodes.
        disabled: Disables selection for all nodes.
        items: An array of items used to build the treeview.
        active_color: Deprecated, use `color` instead.
        base_color: Sets the color of component when not focused.
        slim: Reduces horizontal spacing for badges, icons, tooltips, and avatars within slim list items to create a more compact visual representation.
        filter_mode: Controls how the results of `customFilter` and `customKeyFilter` are combined. All modes only apply `customFilter` to columns not specified in `customKeyFilter`.

- **some**: There is at least one match from either the custom filter or the custom key filter.
- **every**: All columns match either the custom filter or the custom key filter.
- **union**: There is at least one match from the custom filter, or all columns match the custom key filters.
- **intersection**: There is at least one match from the custom filter, and all columns match the custom key filters.
        no_filter: Disables all item filtering.
        custom_filter: Function used to filter items, called for each filterable key on each item in the list. The first argument is the filterable value from the item, the second is the search term, and the third is the internal item object. The function should return true if the item should be included in the filtered list, or the index of the match in the value if it should be included with the result highlighted.
        custom_key_filter: Function used on specific keys within the item object. `customFilter` is skipped for columns with `customKeyFilter` specified.
        filter_keys: Array of specific keys to filter on the item.
        hide_no_data: Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.
        active_class: The class applied to the component when it is in an active state.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        filterable: **FOR INTERNAL USE ONLY** Prevents list item selection using [space] key and pass it back to the text input. Used internally for VAutocomplete and VCombobox.
        expand_icon: Icon used to indicate that a node can be expanded.
        collapse_icon: Icon to display when the list item is expanded.
        lines: Designates a **minimum-height** for all children `v-list-item` components. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.
        prepend_gap: Sets the horizontal spacing between prepend slot and the main content within list item. Also affects indent to ensure expected alignment of group children.
        indent: Overrides the indent size for nested groups.
        activatable: Allows user to mark a node as active by clicking on it.
        selectable: Will render a checkbox next to each node allowing them to be selected. Additionally, the **[openOnClick](/api/v-treeview/#props-open-on-click)** property will be applied internally.
        opened: An array containing the values of currently opened groups. Can be two-way bound with `v-model:opened`.
        selected: An array containing the values of currently selected items. Can be two-way bound with `v-model:selected`.
        mandatory: Forces at least one item to always be selected (if available).
        items_registration: When set to 'props', skips rendering collapsed items/nodes (for significant performance gains).
        active_strategy: Affects how items with children behave when activated. If not specified, the **single-independent** strategy will be used.
- **leaf:** Only leaf nodes (items without children) can be activated.
- **single-leaf:** Similar as **leaf**, but only a single item can be activated at a time.
- **independent:** All nodes can be activated whether they have children or not.
- **single-independent:** Similar as **independent**, but only a single item can be activated at a time.
        select_strategy: Affects how items with children behave when selected.
- **leaf:** Only leaf nodes (items without children) can be selected.
- **independent:** All nodes can be selected whether they have children or not.
- **classic:** Selecting a parent node will cause all children to be selected, parent nodes will be displayed as selected if all their descendants are selected. Only leaf nodes will be added to the model.
- **trunk**: Same as classic but if all of a node's children are selected then only that node will be added to the model.
        item_title: Property on supplied `items` that contains its title.
        item_value: Property on supplied `items` that contains its value.
        item_children: Property on supplied `items` that contains its children.
        item_props: Props object that will be applied to each item component. `true` will treat the original object as raw props and pass it directly to the component.
        item_type: Designates the key on the supplied items that is used for determining the nodes type.
        return_object: When `true` will make `v-model`, `v-model:selected, `v-model:activated` and `v-model:opened` return the complete object instead of just the key.
        value_comparator: Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop.
        open_on_click: When `true` will cause nodes to be opened by clicking anywhere on it, instead of only opening by clicking on expand icon. When using this prop with `activatable` you will be unable to mark nodes with children as active.
        no_data_text: Text shown when no items are provided to the component.
        hide_actions: Hide the expand icon and loading indicator next to each item title.
        false_icon: The icon used when inactive.
        true_icon: The icon used when active.
        open_all: When `true` will cause all branch nodes to be opened when component is mounted.
        fluid: Removes indentation from nested items.
        loading_icon: Icon used when node is in a loading state.
        indeterminate_icon: Icon used when node is in an indeterminate state. Only visible when `selectable` is `true`.
        selected_color: The color of the selection checkbox.
        separate_roots: Applies to `default` variant of `indent-lines`. Prevents showing lines between root-level nodes.
        indent_lines: Controls visibility and variant of the indent lines.
        load_children: A function used when dynamically loading children. If this prop is set, then the supplied function will be run if expanding an item that has a `item-children` property that is an empty array. Supports returning a Promise.

    Returns:
        A VTreeview widget.

    seealso:
        `https://vuetifyjs.com/api/v-treeview`__
    """

    _esm = bundled_path / "VTreeview.js"
    _css = bundled_path / "VTreeview-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    search = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The search model for filtering results."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Allows one to control which nodes are selected. The array contains the values of currently selected items. It is equivalent to the `v-model:selected`"""

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
    """Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `shaped` prop."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the active node - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    activated = traitlets.Any(allow_none=True).tag(sync=True)
    """Array of ids of activated nodes."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Disables selection for all nodes."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of items used to build the treeview."""

    active_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Deprecated, use `color` instead."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of component when not focused."""

    slim = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reduces horizontal spacing for badges, icons, tooltips, and avatars within slim list items to create a more compact visual representation."""

    filter_mode = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls how the results of `customFilter` and `customKeyFilter` are combined. All modes only apply `customFilter` to columns not specified in `customKeyFilter`.

- **some**: There is at least one match from either the custom filter or the custom key filter.
- **every**: All columns match either the custom filter or the custom key filter.
- **union**: There is at least one match from the custom filter, or all columns match the custom key filters.
- **intersection**: There is at least one match from the custom filter, and all columns match the custom key filters."""

    no_filter = traitlets.Bool(allow_none=True).tag(sync=True)
    """Disables all item filtering."""

    custom_filter = traitlets.Any(allow_none=True).tag(sync=True)
    """Function used to filter items, called for each filterable key on each item in the list. The first argument is the filterable value from the item, the second is the search term, and the third is the internal item object. The function should return true if the item should be included in the filtered list, or the index of the match in the value if it should be included with the result highlighted."""

    custom_key_filter = traitlets.Any(allow_none=True).tag(sync=True)
    """Function used on specific keys within the item object. `customFilter` is skipped for columns with `customKeyFilter` specified."""

    filter_keys = traitlets.Any(allow_none=True).tag(sync=True)
    """Array of specific keys to filter on the item."""

    hide_no_data = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open."""

    active_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The class applied to the component when it is in an active state."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    filterable = traitlets.Bool(allow_none=True).tag(sync=True)
    """**FOR INTERNAL USE ONLY** Prevents list item selection using [space] key and pass it back to the text input. Used internally for VAutocomplete and VCombobox."""

    expand_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used to indicate that a node can be expanded."""

    collapse_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon to display when the list item is expanded."""

    lines = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates a **minimum-height** for all children `v-list-item` components. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers."""

    prepend_gap = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the horizontal spacing between prepend slot and the main content within list item. Also affects indent to ensure expected alignment of group children."""

    indent = traitlets.Any(allow_none=True).tag(sync=True)
    """Overrides the indent size for nested groups."""

    activatable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows user to mark a node as active by clicking on it."""

    selectable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Will render a checkbox next to each node allowing them to be selected. Additionally, the **[openOnClick](/api/v-treeview/#props-open-on-click)** property will be applied internally."""

    opened = traitlets.Any(allow_none=True).tag(sync=True)
    """An array containing the values of currently opened groups. Can be two-way bound with `v-model:opened`."""

    selected = traitlets.Any(allow_none=True).tag(sync=True)
    """An array containing the values of currently selected items. Can be two-way bound with `v-model:selected`."""

    mandatory = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces at least one item to always be selected (if available)."""

    items_registration = traitlets.Any(allow_none=True).tag(sync=True)
    """When set to 'props', skips rendering collapsed items/nodes (for significant performance gains)."""

    active_strategy = traitlets.Any(allow_none=True).tag(sync=True)
    """Affects how items with children behave when activated. If not specified, the **single-independent** strategy will be used.
- **leaf:** Only leaf nodes (items without children) can be activated.
- **single-leaf:** Similar as **leaf**, but only a single item can be activated at a time.
- **independent:** All nodes can be activated whether they have children or not.
- **single-independent:** Similar as **independent**, but only a single item can be activated at a time."""

    select_strategy = traitlets.Any(allow_none=True).tag(sync=True)
    """Affects how items with children behave when selected.
- **leaf:** Only leaf nodes (items without children) can be selected.
- **independent:** All nodes can be selected whether they have children or not.
- **classic:** Selecting a parent node will cause all children to be selected, parent nodes will be displayed as selected if all their descendants are selected. Only leaf nodes will be added to the model.
- **trunk**: Same as classic but if all of a node's children are selected then only that node will be added to the model."""

    item_title = traitlets.Any(allow_none=True).tag(sync=True)
    """Property on supplied `items` that contains its title."""

    item_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Property on supplied `items` that contains its value."""

    item_children = traitlets.Any(allow_none=True).tag(sync=True)
    """Property on supplied `items` that contains its children."""

    item_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Props object that will be applied to each item component. `true` will treat the original object as raw props and pass it directly to the component."""

    item_type = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the key on the supplied items that is used for determining the nodes type."""

    return_object = traitlets.Bool(allow_none=True).tag(sync=True)
    """When `true` will make `v-model`, `v-model:selected, `v-model:activated` and `v-model:opened` return the complete object instead of just the key."""

    value_comparator = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop."""

    open_on_click = traitlets.Bool(allow_none=True).tag(sync=True)
    """When `true` will cause nodes to be opened by clicking anywhere on it, instead of only opening by clicking on expand icon. When using this prop with `activatable` you will be unable to mark nodes with children as active."""

    no_data_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text shown when no items are provided to the component."""

    hide_actions = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the expand icon and loading indicator next to each item title."""

    false_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The icon used when inactive."""

    true_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The icon used when active."""

    open_all = traitlets.Bool(allow_none=True).tag(sync=True)
    """When `true` will cause all branch nodes to be opened when component is mounted."""

    fluid = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes indentation from nested items."""

    loading_icon = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Icon used when node is in a loading state."""

    indeterminate_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used when node is in an indeterminate state. Only visible when `selectable` is `true`."""

    selected_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The color of the selection checkbox."""

    separate_roots = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies to `default` variant of `indent-lines`. Prevents showing lines between root-level nodes."""

    indent_lines = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls visibility and variant of the indent lines."""

    load_children = traitlets.Any(allow_none=True).tag(sync=True)
    """A function used when dynamically loading children. If this prop is set, then the supplied function will be run if expanding an item that has a `item-children` property that is an empty array. Supports returning a Promise."""

    def __init__(
        self,
        children=None,
        search=None,
        border=False,
        model_value=None,
        density="default",
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
        theme=None,
        color=None,
        variant="text",
        activated=None,
        disabled=False,
        items="[]",
        active_color=None,
        base_color=None,
        slim=True,
        filter_mode="intersection",
        no_filter=False,
        custom_filter=None,
        custom_key_filter=None,
        filter_keys="['title']",
        hide_no_data=False,
        active_class=None,
        bg_color=None,
        filterable=False,
        expand_icon="$treeviewExpand",
        collapse_icon="$treeviewCollapse",
        lines="one",
        prepend_gap=None,
        indent=None,
        activatable=False,
        selectable=False,
        opened=None,
        selected=None,
        mandatory=False,
        items_registration="render",
        active_strategy=None,
        select_strategy="single-leaf",
        item_title="title",
        item_value="value",
        item_children="children",
        item_props="props",
        item_type="type",
        return_object=False,
        value_comparator=None,
        open_on_click=None,
        no_data_text="$vuetify.noDataText",
        hide_actions=False,
        false_icon=None,
        true_icon=None,
        open_all=False,
        fluid=False,
        loading_icon="$loading",
        indeterminate_icon="$checkboxIndeterminate",
        selected_color=None,
        separate_roots=False,
        indent_lines=False,
        load_children=None,
        **kwargs
    ):
        """Initialize a Treeview widget."""
        self.children = children
        self.search = search
        self.border = border
        self.model_value = model_value
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
        self.theme = theme
        self.color = color
        self.variant = variant
        self.activated = activated
        self.disabled = disabled
        self.items = items
        self.active_color = active_color
        self.base_color = base_color
        self.slim = slim
        self.filter_mode = filter_mode
        self.no_filter = no_filter
        self.custom_filter = custom_filter
        self.custom_key_filter = custom_key_filter
        self.filter_keys = filter_keys
        self.hide_no_data = hide_no_data
        self.active_class = active_class
        self.bg_color = bg_color
        self.filterable = filterable
        self.expand_icon = expand_icon
        self.collapse_icon = collapse_icon
        self.lines = lines
        self.prepend_gap = prepend_gap
        self.indent = indent
        self.activatable = activatable
        self.selectable = selectable
        self.opened = opened
        self.selected = selected
        self.mandatory = mandatory
        self.items_registration = items_registration
        self.active_strategy = active_strategy
        self.select_strategy = select_strategy
        self.item_title = item_title
        self.item_value = item_value
        self.item_children = item_children
        self.item_props = item_props
        self.item_type = item_type
        self.return_object = return_object
        self.value_comparator = value_comparator
        self.open_on_click = open_on_click
        self.no_data_text = no_data_text
        self.hide_actions = hide_actions
        self.false_icon = false_icon
        self.true_icon = true_icon
        self.open_all = open_all
        self.fluid = fluid
        self.loading_icon = loading_icon
        self.indeterminate_icon = indeterminate_icon
        self.selected_color = selected_color
        self.separate_roots = separate_roots
        self.indent_lines = indent_lines
        self.load_children = load_children

        super().__init__(**kwargs)