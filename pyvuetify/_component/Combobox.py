import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Combobox(anywidget.AnyWidget):
    """The Combobox component.

    

    Args:
        children: The child nodes of the DOM element.
        flat: Removes box shadow when using a variant with elevation.
        type: Sets input type.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        error: Puts the input in a manual error state.
        reverse: Reverses the orientation.
        density: Adjusts the vertical height used by the component.
        max_width: Sets the maximum width for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        rounded: Adds a border radius to the input.
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.
        name: Sets the component's name attribute.
        delimiters: Accepts an array of strings that will trigger a new tag when typing. Does not replace the normal Tab and Enter keys.
        autocomplete: Helps influence browser's suggestions. Special value **suppress** manipulates fields `name` attribute while **off** relies on browser's good will to stop suggesting values. Any other value is passed to the native `autocomplete` on the underlying element.
        disabled: Removes the ability to click or target the input.
        multiple: Changes select to multiple. Accepts array for value.
        placeholder: Sets the input’s placeholder text.
        id: Sets the DOM id on the component.
        prefix: Displays prefix text.
        role: The role attribute applied to the input.
        autofocus: Enables autofocus.
        items: Can be an array of objects or strings. By default objects should have **title** and **value** properties, and can optionally have a **props** property containing any [VListItem props](/api/v-list-item/#props). Keys to use for these can be changed with the **item-title**, **item-value**, and **item-props** props.
        active: Controls the **active** state of the item. This is typically used to highlight the component.
        base_color: Sets the color of the input when it is not focused.
        prepend_icon: Prepends an icon to the outside the component's input, uses the same syntax as `v-icon`.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        readonly: Puts input in readonly state.
        loading: Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.
        label: Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.
        auto_select_first: When searching, will always highlight the first option and select it on blur. `exact` will only highlight and select exact matches.
        clear_on_select: Reset the search text when a selection is made while using the **multiple** prop.
        filter_mode: Controls how the results of `customFilter` and `customKeyFilter` are combined. All modes only apply `customFilter` to columns not specified in `customKeyFilter`.

- **some**: There is at least one match from either the custom filter or the custom key filter.
- **every**: All columns match either the custom filter or the custom key filter.
- **union**: There is at least one match from the custom filter, or all columns match the custom key filters.
- **intersection**: There is at least one match from the custom filter, and all columns match the custom key filters.
        no_filter: Disables all item filtering.
        custom_filter: Function used to filter items, called for each filterable key on each item in the list. The first argument is the filterable value from the item, the second is the search term, and the third is the internal item object. The function should return true if the item should be included in the filtered list, or the index of the match in the value if it should be included with the result highlighted.
        custom_key_filter: Function used on specific keys within the item object. `customFilter` is skipped for columns with `customKeyFilter` specified.
        filter_keys: Array of specific keys to filter on the item.
        chips: Changes display of selections to chips.
        closable_chips: Enables the [closable](/api/v-chip/#props-closable) prop on all [v-chip](/components/chips/) components.
        eager: Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
        hide_no_data: Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.
        hide_selected: Do not display in the select menu items that are already selected.
        list_props: Pass props through to the `v-list` component. Accepts an object with anything from [v-list](/api/v-list/#props) props, camelCase keys are recommended.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        item_title: Property on supplied `items` that contains its title.
        item_value: Property on supplied `items` that contains its value.
        item_children: This property currently has **no effect**.
        item_props: Props object that will be applied to each item component. `true` will treat the original object as raw props and pass it directly to the component.
        item_type: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/list-items.json))
        return_object: Changes the selection behavior to return the object directly rather than the value specified with **item-value**.
        value_comparator: Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop.
        menu: Renders with the menu open by default.
        menu_icon: Sets the the spin icon.
        menu_props: Pass props through to the `v-menu` component. Accepts an object with anything from [v-menu](/api/v-menu/#props) props, camelCase keys are recommended.
        no_data_text: Text shown when no items are provided to the component.
        open_on_clear: Open's the menu whenever the clear icon is clicked.
        item_color: Sets color of selected items.
        no_auto_scroll: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/Select.json))
        close_text: Text set to the inputs `aria-label` and `title` when input menu is closed.
        open_text: Text set to the inputs **aria-label** and **title** when input menu is open.
        counter: Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
        persistent_placeholder: Forces placeholder to always be visible.
        persistent_counter: Forces counter to always be visible.
        suffix: Displays suffix text.
        center_affix: Vertically align **appendInner**, **prependInner**, **clearIcon** and **label** in the center.
        glow: Makes prepend/append icons full opacity when the field is focused and apply color.
        icon_color: Sets the color of the prepend/append icons.
        hide_spin_buttons: Hides spin buttons on the input when type is set to `number`.
        hint: Displays hint text below the input when focused. Force this always open with the [persistent-hint](#props-persistent-hint) property.
        persistent_hint: Forces [hint](#props-hint) to always be visible.
        messages: Displays a list of messages or a single message if using a string.
        error_messages: Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation.
        max_errors: Control the maximum number of shown errors from validation.
        rules: Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`.
        validate_on: Change what type of event triggers validation to run.
        focused: Forces a focused state styling on the component.
        hide_details: Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display.
        append_inner_icon: Creates a [v-icon](/api/v-icon/) component in the **append-inner** slot.
        clearable: Allows for the component to be cleared.
        clear_icon: The icon used when the **clearable** prop is set to true.
        persistent_clear: Always show the clearable icon when the input is dirty (By default it only shows on hover).
        prepend_inner_icon: Creates a [v-icon](/api/v-icon/) component in the **prepend-inner** slot.
        single_line: Label does not move on focus/dirty.
        counter_value: Function returns the counter display text.
        model_modifiers: **FOR INTERNAL USE ONLY**
        always_filter: When enabled, dropdown list will always show items matching non-empty value within the field. Recommended when the list is meant to show suggestions rather than options to choose from. For optimal UX, should be combined with `:menu-icon="false"` and `hide-selected`.

    Returns:
        A VCombobox widget.

    seealso:
        `https://vuetifyjs.com/api/v-combobox`__
    """

    _esm = bundled_path / "VCombobox.js"
    _css = bundled_path / "VCombobox-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes box shadow when using a variant with elevation."""

    type = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets input type."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    error = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the input in a manual error state."""

    reverse = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reverses the orientation."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Adds a border radius to the input."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the component's name attribute."""

    delimiters = traitlets.Any(allow_none=True).tag(sync=True)
    """Accepts an array of strings that will trigger a new tag when typing. Does not replace the normal Tab and Enter keys."""

    autocomplete = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Helps influence browser's suggestions. Special value **suppress** manipulates fields `name` attribute while **off** relies on browser's good will to stop suggesting values. Any other value is passed to the native `autocomplete` on the underlying element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the input."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Changes select to multiple. Accepts array for value."""

    placeholder = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the input’s placeholder text."""

    id = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the DOM id on the component."""

    prefix = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Displays prefix text."""

    role = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The role attribute applied to the input."""

    autofocus = traitlets.Bool(allow_none=True).tag(sync=True)
    """Enables autofocus."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """Can be an array of objects or strings. By default objects should have **title** and **value** properties, and can optionally have a **props** property containing any [VListItem props](/api/v-list-item/#props). Keys to use for these can be changed with the **item-title**, **item-value**, and **item-props** props."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Controls the **active** state of the item. This is typically used to highlight the component."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of the input when it is not focused."""

    prepend_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Prepends an icon to the outside the component's input, uses the same syntax as `v-icon`."""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts input in readonly state."""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color."""

    label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component."""

    auto_select_first = traitlets.Any(allow_none=True).tag(sync=True)
    """When searching, will always highlight the first option and select it on blur. `exact` will only highlight and select exact matches."""

    clear_on_select = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reset the search text when a selection is made while using the **multiple** prop."""

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

    chips = traitlets.Bool(allow_none=True).tag(sync=True)
    """Changes display of selections to chips."""

    closable_chips = traitlets.Bool(allow_none=True).tag(sync=True)
    """Enables the [closable](/api/v-chip/#props-closable) prop on all [v-chip](/components/chips/) components."""

    eager = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."""

    hide_no_data = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open."""

    hide_selected = traitlets.Bool(allow_none=True).tag(sync=True)
    """Do not display in the select menu items that are already selected."""

    list_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Pass props through to the `v-list` component. Accepts an object with anything from [v-list](/api/v-list/#props) props, camelCase keys are recommended."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    item_title = traitlets.Any(allow_none=True).tag(sync=True)
    """Property on supplied `items` that contains its title."""

    item_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Property on supplied `items` that contains its value."""

    item_children = traitlets.Any(allow_none=True).tag(sync=True)
    """This property currently has **no effect**."""

    item_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Props object that will be applied to each item component. `true` will treat the original object as raw props and pass it directly to the component."""

    item_type = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/list-items.json))"""

    return_object = traitlets.Bool(allow_none=True).tag(sync=True)
    """Changes the selection behavior to return the object directly rather than the value specified with **item-value**."""

    value_comparator = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop."""

    menu = traitlets.Bool(allow_none=True).tag(sync=True)
    """Renders with the menu open by default."""

    menu_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the the spin icon."""

    menu_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Pass props through to the `v-menu` component. Accepts an object with anything from [v-menu](/api/v-menu/#props) props, camelCase keys are recommended."""

    no_data_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text shown when no items are provided to the component."""

    open_on_clear = traitlets.Bool(allow_none=True).tag(sync=True)
    """Open's the menu whenever the clear icon is clicked."""

    item_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets color of selected items."""

    no_auto_scroll = traitlets.Bool(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/Select.json))"""

    close_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text set to the inputs `aria-label` and `title` when input menu is closed."""

    open_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text set to the inputs **aria-label** and **title** when input menu is open."""

    counter = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation."""

    persistent_placeholder = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces placeholder to always be visible."""

    persistent_counter = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces counter to always be visible."""

    suffix = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Displays suffix text."""

    center_affix = traitlets.Bool(allow_none=True).tag(sync=True)
    """Vertically align **appendInner**, **prependInner**, **clearIcon** and **label** in the center."""

    glow = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes prepend/append icons full opacity when the field is focused and apply color."""

    icon_color = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the color of the prepend/append icons."""

    hide_spin_buttons = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides spin buttons on the input when type is set to `number`."""

    hint = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Displays hint text below the input when focused. Force this always open with the [persistent-hint](#props-persistent-hint) property."""

    persistent_hint = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces [hint](#props-hint) to always be visible."""

    messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays a list of messages or a single message if using a string."""

    error_messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation."""

    max_errors = traitlets.Any(allow_none=True).tag(sync=True)
    """Control the maximum number of shown errors from validation."""

    rules = traitlets.Any(allow_none=True).tag(sync=True)
    """Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`."""

    validate_on = traitlets.Any(allow_none=True).tag(sync=True)
    """Change what type of event triggers validation to run."""

    focused = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces a focused state styling on the component."""

    hide_details = traitlets.Any(allow_none=True).tag(sync=True)
    """Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display."""

    append_inner_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component in the **append-inner** slot."""

    clearable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows for the component to be cleared."""

    clear_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The icon used when the **clearable** prop is set to true."""

    persistent_clear = traitlets.Bool(allow_none=True).tag(sync=True)
    """Always show the clearable icon when the input is dirty (By default it only shows on hover)."""

    prepend_inner_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component in the **prepend-inner** slot."""

    single_line = traitlets.Bool(allow_none=True).tag(sync=True)
    """Label does not move on focus/dirty."""

    counter_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Function returns the counter display text."""

    model_modifiers = traitlets.Any(allow_none=True).tag(sync=True)
    """**FOR INTERNAL USE ONLY**"""

    always_filter = traitlets.Bool(allow_none=True).tag(sync=True)
    """When enabled, dropdown list will always show items matching non-empty value within the field. Recommended when the list is meant to show suggestions rather than options to choose from. For optimal UX, should be combined with `:menu-icon="false"` and `hide-selected`."""

    def __init__(
        self,
        children=None,
        flat=False,
        type="text",
        model_value=None,
        error=False,
        reverse=False,
        density="default",
        max_width=None,
        min_width=None,
        width=None,
        rounded=None,
        tile=False,
        theme=None,
        color=None,
        variant="filled",
        name=None,
        delimiters=None,
        autocomplete=None,
        disabled=None,
        multiple=False,
        placeholder=None,
        id=None,
        prefix=None,
        role="combobox",
        autofocus=False,
        items="[]",
        active=False,
        base_color=None,
        prepend_icon=None,
        append_icon=None,
        readonly=None,
        loading=False,
        label=None,
        auto_select_first=False,
        clear_on_select=True,
        filter_mode="intersection",
        no_filter=False,
        custom_filter=None,
        custom_key_filter=None,
        filter_keys="['title']",
        chips=False,
        closable_chips=False,
        eager=False,
        hide_no_data=True,
        hide_selected=False,
        list_props=None,
        bg_color=None,
        item_title="title",
        item_value="value",
        item_children=False,
        item_props="props",
        item_type="type",
        return_object=True,
        value_comparator=None,
        menu=False,
        menu_icon="$dropdown",
        menu_props=None,
        no_data_text="$vuetify.noDataText",
        open_on_clear=False,
        item_color=None,
        no_auto_scroll=False,
        close_text="$vuetify.close",
        open_text="$vuetify.open",
        counter=False,
        persistent_placeholder=False,
        persistent_counter=False,
        suffix=None,
        center_affix=None,
        glow=False,
        icon_color=False,
        hide_spin_buttons=False,
        hint=None,
        persistent_hint=False,
        messages="[]",
        error_messages="[]",
        max_errors="1",
        rules="[]",
        validate_on=None,
        focused=False,
        hide_details=False,
        append_inner_icon=None,
        clearable=False,
        clear_icon="$clear",
        persistent_clear=False,
        prepend_inner_icon=None,
        single_line=False,
        counter_value=None,
        model_modifiers=None,
        always_filter=False,
        **kwargs
    ):
        """Initialize a Combobox widget."""
        self.children = children
        self.flat = flat
        self.type = type
        self.model_value = model_value
        self.error = error
        self.reverse = reverse
        self.density = density
        self.max_width = max_width
        self.min_width = min_width
        self.width = width
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.color = color
        self.variant = variant
        self.name = name
        self.delimiters = delimiters
        self.autocomplete = autocomplete
        self.disabled = disabled
        self.multiple = multiple
        self.placeholder = placeholder
        self.id = id
        self.prefix = prefix
        self.role = role
        self.autofocus = autofocus
        self.items = items
        self.active = active
        self.base_color = base_color
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.readonly = readonly
        self.loading = loading
        self.label = label
        self.auto_select_first = auto_select_first
        self.clear_on_select = clear_on_select
        self.filter_mode = filter_mode
        self.no_filter = no_filter
        self.custom_filter = custom_filter
        self.custom_key_filter = custom_key_filter
        self.filter_keys = filter_keys
        self.chips = chips
        self.closable_chips = closable_chips
        self.eager = eager
        self.hide_no_data = hide_no_data
        self.hide_selected = hide_selected
        self.list_props = list_props
        self.bg_color = bg_color
        self.item_title = item_title
        self.item_value = item_value
        self.item_children = item_children
        self.item_props = item_props
        self.item_type = item_type
        self.return_object = return_object
        self.value_comparator = value_comparator
        self.menu = menu
        self.menu_icon = menu_icon
        self.menu_props = menu_props
        self.no_data_text = no_data_text
        self.open_on_clear = open_on_clear
        self.item_color = item_color
        self.no_auto_scroll = no_auto_scroll
        self.close_text = close_text
        self.open_text = open_text
        self.counter = counter
        self.persistent_placeholder = persistent_placeholder
        self.persistent_counter = persistent_counter
        self.suffix = suffix
        self.center_affix = center_affix
        self.glow = glow
        self.icon_color = icon_color
        self.hide_spin_buttons = hide_spin_buttons
        self.hint = hint
        self.persistent_hint = persistent_hint
        self.messages = messages
        self.error_messages = error_messages
        self.max_errors = max_errors
        self.rules = rules
        self.validate_on = validate_on
        self.focused = focused
        self.hide_details = hide_details
        self.append_inner_icon = append_inner_icon
        self.clearable = clearable
        self.clear_icon = clear_icon
        self.persistent_clear = persistent_clear
        self.prepend_inner_icon = prepend_inner_icon
        self.single_line = single_line
        self.counter_value = counter_value
        self.model_modifiers = model_modifiers
        self.always_filter = always_filter

        super().__init__(**kwargs)