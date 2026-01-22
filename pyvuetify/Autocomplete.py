import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parent / "static"


class Autocomplete(anywidget.AnyWidget):
    """The Autocomplete component.

    The v-autocomplete component offers simple and flexible type-ahead functionality with filtering of available options. This is useful when you have a ton of data that requires filtering.

    Args:
        allow_overflow: Removes overflow re-positioning for the content
        append_icon: Appends an icon to the component, uses the same syntax as `v-icon`
        append_outer_icon: Appends an icon to the outside the component's input, uses same syntax as `v-icon`
        attach: Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.
        auto_select_first: When searching, will always highlight the first option
        autofocus:
        background_color: Changes the background-color of the input
        cache_items:
        chips: Changes display of selections to chips
        clear_icon: Applied when using **clearable** and the input is dirty
        clearable: Add input clear functionality, default icon is Material Design Icons **mdi-clear**
        color: Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        counter: Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
        counter_value:
        dark: Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
        deletable_chips: Adds a remove icon to selected chips
        dense: Reduces the input height
        disable_lookup:
        disabled: Removes the ability to click or target the component.
        eager: Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
        error: Puts the input in a manual error state
        error_count: The total number of errors that should display at once
        error_messages: Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation
        filled: Applies the alternate filled input style
        filter: The filtering algorithm used when searching. [example](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/components/VAutocomplete/VAutocomplete.ts#L40)
        flat: Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props
        full_width: Forces 100% width
        height: Sets the height for the component.
        hide_details: Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display
        hide_no_data: Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open.
        hide_selected:
        hint: Hint text
        id: Sets the DOM id on the component
        item_color:
        item_disabled:
        item_text:
        item_value:
        items:
        label: Sets input label
        light: Applies the light theme variant to the component.
        loader_height: Specifies the height of the loader
        loading: Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color
        menu_props:
        messages: Displays a list of messages or message if using a string
        multiple: Changes select to multiple. Accepts array for value
        no_data_text: Display text when there is no data
        no_filter: Do not apply filtering when searching. Useful when data is being filtered server side
        open_on_clear:
        outlined: Applies the outlined style to the input
        persistent_hint: Forces hint to always be visible
        placeholder: Sets the input's placeholder text
        prefix: Displays prefix text
        prepend_icon: Prepends an icon to the component, uses the same syntax as `v-icon`
        prepend_inner_icon: Prepends an icon inside the component's input, uses the same syntax as `v-icon`
        readonly: Puts input in readonly state
        return_object:
        reverse: Reverses the input orientation
        rounded: Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).
        rules: Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`
        search_input: Search value. Can be used with `.sync` modifier.
        shaped: Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`
        single_line: Label does not move on focus/dirty
        small_chips: Changes display of selections to chips with the **small** property
        solo: Changes the style of the input
        solo_inverted: Reduces element opacity until focused
        success: Puts the input in a manual success state
        success_messages: Puts the input in a success state and passes through custom success messages.
        suffix:
        type:
        validate_on_blur: Delays validation until blur event
        value: Controls whether the component is visible or hidden.
        value_comparator: Apply a custom value comparator function

    Returns:
        A Autocomplete widget.
    """

    _esm = bundled_path / "Autocomplete.mjs"
    _css = bundled_path / "Autocomplete.css"

    allow_overflow = traitlets.Any(allow_none=True).tag(sync=True)
    """Removes overflow re-positioning for the content"""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Appends an icon to the component, uses the same syntax as `v-icon`"""

    append_outer_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Appends an icon to the outside the component's input, uses same syntax as `v-icon`"""

    attach = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default."""

    auto_select_first = traitlets.Any(allow_none=True).tag(sync=True)
    """When searching, will always highlight the first option"""

    autofocus = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    background_color = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the background-color of the input"""

    cache_items = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    chips = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes display of selections to chips"""

    clear_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Applied when using **clearable** and the input is dirty"""

    clearable = traitlets.Any(allow_none=True).tag(sync=True)
    """Add input clear functionality, default icon is Material Design Icons **mdi-clear**"""

    color = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    counter = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation."""

    counter_value = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    dark = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the dark theme variant to the component. This will default the components color to _white_ unless you've configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html)."""

    deletable_chips = traitlets.Any(allow_none=True).tag(sync=True)
    """Adds a remove icon to selected chips"""

    dense = traitlets.Any(allow_none=True).tag(sync=True)
    """Reduces the input height"""

    disable_lookup = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    disabled = traitlets.Any(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    eager = traitlets.Any(allow_none=True).tag(sync=True)
    """Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."""

    error = traitlets.Any(allow_none=True).tag(sync=True)
    """Puts the input in a manual error state"""

    error_count = traitlets.Any(allow_none=True).tag(sync=True)
    """The total number of errors that should display at once"""

    error_messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation"""

    filled = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the alternate filled input style"""

    filter = traitlets.Any(allow_none=True).tag(sync=True)
    """The filtering algorithm used when searching. [example](https://github.com/vuetifyjs/vuetify/blob/v2-stable/packages/vuetify/src/components/VAutocomplete/VAutocomplete.ts#L40)"""

    flat = traitlets.Any(allow_none=True).tag(sync=True)
    """Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props"""

    full_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces 100% width"""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    hide_details = traitlets.Any(allow_none=True).tag(sync=True)
    """Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display"""

    hide_no_data = traitlets.Any(allow_none=True).tag(sync=True)
    """Hides the menu when there are no options to show.  Useful for preventing the menu from opening before results are fetched asynchronously.  Also has the effect of opening the menu when the `items` array changes if not already open."""

    hide_selected = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    hint = traitlets.Any(allow_none=True).tag(sync=True)
    """Hint text"""

    id = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the DOM id on the component"""

    item_color = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    item_disabled = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    item_text = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    item_value = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    label = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets input label"""

    light = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the light theme variant to the component."""

    loader_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the height of the loader"""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color"""

    menu_props = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays a list of messages or message if using a string"""

    multiple = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes select to multiple. Accepts array for value"""

    no_data_text = traitlets.Any(allow_none=True).tag(sync=True)
    """Display text when there is no data"""

    no_filter = traitlets.Any(allow_none=True).tag(sync=True)
    """Do not apply filtering when searching. Useful when data is being filtered server side"""

    open_on_clear = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    outlined = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the outlined style to the input"""

    persistent_hint = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces hint to always be visible"""

    placeholder = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the input's placeholder text"""

    prefix = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays prefix text"""

    prepend_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Prepends an icon to the component, uses the same syntax as `v-icon`"""

    prepend_inner_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Prepends an icon inside the component's input, uses the same syntax as `v-icon`"""

    readonly = traitlets.Any(allow_none=True).tag(sync=True)
    """Puts input in readonly state"""

    return_object = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    reverse = traitlets.Any(allow_none=True).tag(sync=True)
    """Reverses the input orientation"""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius)."""

    rules = traitlets.Any(allow_none=True).tag(sync=True)
    """Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`"""

    search_input = traitlets.Any(allow_none=True).tag(sync=True)
    """Search value. Can be used with `.sync` modifier."""

    shaped = traitlets.Any(allow_none=True).tag(sync=True)
    """Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`"""

    single_line = traitlets.Any(allow_none=True).tag(sync=True)
    """Label does not move on focus/dirty"""

    small_chips = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes display of selections to chips with the **small** property"""

    solo = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the style of the input"""

    solo_inverted = traitlets.Any(allow_none=True).tag(sync=True)
    """Reduces element opacity until focused"""

    success = traitlets.Any(allow_none=True).tag(sync=True)
    """Puts the input in a manual success state"""

    success_messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Puts the input in a success state and passes through custom success messages."""

    suffix = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    type = traitlets.Any(allow_none=True).tag(sync=True)
    """"""

    validate_on_blur = traitlets.Any(allow_none=True).tag(sync=True)
    """Delays validation until blur event"""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls whether the component is visible or hidden."""

    value_comparator = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a custom value comparator function"""

    def __init__(
        self,
        allow_overflow=None,
        append_icon=None,
        append_outer_icon=None,
        attach=None,
        auto_select_first=None,
        autofocus=None,
        background_color=None,
        cache_items=None,
        chips=None,
        clear_icon=None,
        clearable=None,
        color=None,
        counter=None,
        counter_value=None,
        dark=None,
        deletable_chips=None,
        dense=None,
        disable_lookup=None,
        disabled=None,
        eager=None,
        error=None,
        error_count=None,
        error_messages=None,
        filled=None,
        filter=None,
        flat=None,
        full_width=None,
        height=None,
        hide_details=None,
        hide_no_data=None,
        hide_selected=None,
        hint=None,
        id=None,
        item_color=None,
        item_disabled=None,
        item_text=None,
        item_value=None,
        items=None,
        label=None,
        light=None,
        loader_height=None,
        loading=None,
        menu_props=None,
        messages=None,
        multiple=None,
        no_data_text=None,
        no_filter=None,
        open_on_clear=None,
        outlined=None,
        persistent_hint=None,
        placeholder=None,
        prefix=None,
        prepend_icon=None,
        prepend_inner_icon=None,
        readonly=None,
        return_object=None,
        reverse=None,
        rounded=None,
        rules=None,
        search_input=None,
        shaped=None,
        single_line=None,
        small_chips=None,
        solo=None,
        solo_inverted=None,
        success=None,
        success_messages=None,
        suffix=None,
        type=None,
        validate_on_blur=None,
        value=None,
        value_comparator=None,
        **kwargs
    ):
        """Initialize a Autocomplete widget."""

        self.allow_overflow = allow_overflow
        self.append_icon = append_icon
        self.append_outer_icon = append_outer_icon
        self.attach = attach
        self.auto_select_first = auto_select_first
        self.autofocus = autofocus
        self.background_color = background_color
        self.cache_items = cache_items
        self.chips = chips
        self.clear_icon = clear_icon
        self.clearable = clearable
        self.color = color
        self.counter = counter
        self.counter_value = counter_value
        self.dark = dark
        self.deletable_chips = deletable_chips
        self.dense = dense
        self.disable_lookup = disable_lookup
        self.disabled = disabled
        self.eager = eager
        self.error = error
        self.error_count = error_count
        self.error_messages = error_messages
        self.filled = filled
        self.filter = filter
        self.flat = flat
        self.full_width = full_width
        self.height = height
        self.hide_details = hide_details
        self.hide_no_data = hide_no_data
        self.hide_selected = hide_selected
        self.hint = hint
        self.id = id
        self.item_color = item_color
        self.item_disabled = item_disabled
        self.item_text = item_text
        self.item_value = item_value
        self.items = items
        self.label = label
        self.light = light
        self.loader_height = loader_height
        self.loading = loading
        self.menu_props = menu_props
        self.messages = messages
        self.multiple = multiple
        self.no_data_text = no_data_text
        self.no_filter = no_filter
        self.open_on_clear = open_on_clear
        self.outlined = outlined
        self.persistent_hint = persistent_hint
        self.placeholder = placeholder
        self.prefix = prefix
        self.prepend_icon = prepend_icon
        self.prepend_inner_icon = prepend_inner_icon
        self.readonly = readonly
        self.return_object = return_object
        self.reverse = reverse
        self.rounded = rounded
        self.rules = rules
        self.search_input = search_input
        self.shaped = shaped
        self.single_line = single_line
        self.small_chips = small_chips
        self.solo = solo
        self.solo_inverted = solo_inverted
        self.success = success
        self.success_messages = success_messages
        self.suffix = suffix
        self.type = type
        self.validate_on_blur = validate_on_blur
        self.value = value
        self.value_comparator = value_comparator

        super().__init__(**kwargs)
