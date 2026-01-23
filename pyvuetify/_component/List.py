import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class List(anywidget.AnyWidget):
    """The List component.

    

    Args:
        children: The child nodes of the DOM element.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        density: Adjusts the vertical height used by the component.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.
        activated: Array of ids of activated nodes.
        disabled: Puts all children inputs into a disabled state.
        items: Can be an array of objects or strings. By default objects should have a **title** property, and can optionally have a **props** property containing any [VListItem props](/api/v-list-item/#props), a **value** property to allow selection, and a **children** property containing more item objects. Keys to use for these can be changed with the **item-title**, **item-value**, **item-props**, and **item-children** props.
        active_color: Deprecated, use `color` instead.
        base_color: Sets the color of component when not focused.
        slim: Reduces horizontal spacing for badges, icons, tooltips, and avatars within slim list items to create a more compact visual representation.
        active_class: The class applied to the component when it is in an active state.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        filterable: **FOR INTERNAL USE ONLY** Prevents list item selection using [space] key and pass it back to the text input. Used internally for VAutocomplete and VCombobox.
        expand_icon: Icon to display when the list item is collapsed.
        collapse_icon: Icon to display when the list item is expanded.
        lines: Designates a **minimum-height** for all children `v-list-item` components. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.
        prepend_gap: Sets the horizontal spacing between prepend slot and the main content within list item. Also affects indent to ensure expected alignment of group children.
        indent: Overrides the indent size for nested groups.
        nav: An alternative styling that reduces `v-list-item` width and rounds the corners. Typically used with **[v-navigation-drawer](/components/navigation-drawers)**.
        activatable: Designates whether the list items are activatable. Additionally, sets necessary accessibility attributes internally.
        selectable: Designates whether the list items are selectable. Additionally, sets necessary accessibility attributes internally.
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
        open_strategy: Affects how items with children behave when expanded.
- **multiple:** Any number of groups can be open at once.
- **single:** Only one group at each level can be open, opening a group will cause others to close.
- **list:** Multiple, but all other groups will close when an item is selected.
        item_title: Property on supplied `items` that contains its title.
        item_value: Property on supplied `items` that contains its value.
        item_children: Property on supplied `items` that contains its children.
        item_props: Props object that will be applied to each item component. `true` will treat the original object as raw props and pass it directly to the component.
        item_type: Designates the key on the supplied items that is used for determining the nodes type.
        return_object: Changes the selection behavior to return the object directly rather than the value specified with **item-value**.
        value_comparator: Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop.

    Returns:
        A VList widget.

    seealso:
        `https://vuetifyjs.com/api/v-list`__
    """

    _esm = bundled_path / "VList.js"
    _css = bundled_path / "VList-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

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
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    activated = traitlets.Any(allow_none=True).tag(sync=True)
    """Array of ids of activated nodes."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts all children inputs into a disabled state."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """Can be an array of objects or strings. By default objects should have a **title** property, and can optionally have a **props** property containing any [VListItem props](/api/v-list-item/#props), a **value** property to allow selection, and a **children** property containing more item objects. Keys to use for these can be changed with the **item-title**, **item-value**, **item-props**, and **item-children** props."""

    active_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Deprecated, use `color` instead."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of component when not focused."""

    slim = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reduces horizontal spacing for badges, icons, tooltips, and avatars within slim list items to create a more compact visual representation."""

    active_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The class applied to the component when it is in an active state."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    filterable = traitlets.Bool(allow_none=True).tag(sync=True)
    """**FOR INTERNAL USE ONLY** Prevents list item selection using [space] key and pass it back to the text input. Used internally for VAutocomplete and VCombobox."""

    expand_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon to display when the list item is collapsed."""

    collapse_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon to display when the list item is expanded."""

    lines = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates a **minimum-height** for all children `v-list-item` components. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers."""

    prepend_gap = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the horizontal spacing between prepend slot and the main content within list item. Also affects indent to ensure expected alignment of group children."""

    indent = traitlets.Any(allow_none=True).tag(sync=True)
    """Overrides the indent size for nested groups."""

    nav = traitlets.Bool(allow_none=True).tag(sync=True)
    """An alternative styling that reduces `v-list-item` width and rounds the corners. Typically used with **[v-navigation-drawer](/components/navigation-drawers)**."""

    activatable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Designates whether the list items are activatable. Additionally, sets necessary accessibility attributes internally."""

    selectable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Designates whether the list items are selectable. Additionally, sets necessary accessibility attributes internally."""

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

    open_strategy = traitlets.Any(allow_none=True).tag(sync=True)
    """Affects how items with children behave when expanded.
- **multiple:** Any number of groups can be open at once.
- **single:** Only one group at each level can be open, opening a group will cause others to close.
- **list:** Multiple, but all other groups will close when an item is selected."""

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
    """Changes the selection behavior to return the object directly rather than the value specified with **item-value**."""

    value_comparator = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop."""

    def __init__(
        self,
        children=None,
        border=False,
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
        slim=False,
        active_class=None,
        bg_color=None,
        filterable=False,
        expand_icon=None,
        collapse_icon=None,
        lines="one",
        prepend_gap=None,
        indent=None,
        nav=False,
        activatable=False,
        selectable=False,
        opened=None,
        selected=None,
        mandatory=False,
        items_registration="render",
        active_strategy=None,
        select_strategy="single-leaf",
        open_strategy="list",
        item_title="title",
        item_value="value",
        item_children="children",
        item_props="props",
        item_type="type",
        return_object=False,
        value_comparator=None,
        **kwargs
    ):
        """Initialize a List widget."""
        self.children = children
        self.border = border
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
        self.active_class = active_class
        self.bg_color = bg_color
        self.filterable = filterable
        self.expand_icon = expand_icon
        self.collapse_icon = collapse_icon
        self.lines = lines
        self.prepend_gap = prepend_gap
        self.indent = indent
        self.nav = nav
        self.activatable = activatable
        self.selectable = selectable
        self.opened = opened
        self.selected = selected
        self.mandatory = mandatory
        self.items_registration = items_registration
        self.active_strategy = active_strategy
        self.select_strategy = select_strategy
        self.open_strategy = open_strategy
        self.item_title = item_title
        self.item_value = item_value
        self.item_children = item_children
        self.item_props = item_props
        self.item_type = item_type
        self.return_object = return_object
        self.value_comparator = value_comparator

        super().__init__(**kwargs)