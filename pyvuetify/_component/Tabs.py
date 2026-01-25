import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Tabs(anywidget.AnyWidget):
    """The Tabs component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        symbol: The [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) used to hook into group functionality for components like [v-btn-toggle](/components/btn-toggle) and [v-bottom-navigation](/components/bottom-navigations/).
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        density: Adjusts the vertical height used by the component.
        height: Sets the height of the tabs bar.
        tag: Specify a custom tag used on the root element.
        color: Applies specified color to the selected tab - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        disabled: Puts all children components into a disabled state.
        max: Sets a maximum number of selections that can be made.
        multiple: Allows one to select multiple items.
        items: The items to display in the component. This can be an array of strings or objects with a property `text`.
        stacked: Apply the stacked prop to all children v-tab components.
        selected_class: Configure the active CSS class applied when an item is selected.
        spaced: Extends content to the edges to move main content from prepend and append slots.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        mandatory: Forces at least one item to always be selected (if available).
        content_class: Adds classes to the slide group item.
        direction: Changes the direction of the tabs. Can be either `horizontal` or `vertical`.
        mobile: Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint
        next_icon: Right pagination icon.
        prev_icon: Left pagination icon.
        inset: Changes the slider to take full height. Tabs will also get some spacing and customizable rounding.
        mobile_breakpoint: Sets the designated mobile breakpoint for the component.
        center_active: Forces the selected tab to be centered.
        scroll_to_active: Keeps the last active element visible when resizing the scrollable container.
        show_arrows: Show pagination arrows if the tab items overflow their container. For mobile devices, arrows will only display when using this prop.
        slider_color: Changes the background color of an auto-generated `v-tabs-slider`.
        grow: Forces tabs to take up all available space.
        slider_transition_duration: Applies custom slider transition duration. Default duration depends on transition type (fade: 400, grow: 350, shift: 225).
        hide_slider: Hide's the generated `v-tabs-slider`.
        slider_transition: Changes slider transition to one of the predefined animation presets.
        align_tabs: Aligns the tabs to the `start`, `center`, or `end` of container. Also accepts `title` to align with the `v-toolbar-title` component.
        fixed_tabs: Tabs will be centered and each tab item will grow up to 300px width.
        inset_padding: Sets custom spacing between tabs for `inset` mode.
        inset_radius: Sets custom border radius for the tabs container `inset` mode. Rounding for individual tabs is calculated by subtracting the padding.

    Returns:
        A VTabs widget.

    seealso:
        `https://vuetifyjs.com/api/v-tabs`__
    """

    _esm = bundled_path / "VTabs.js"
    _css = bundled_path / "VTabs-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    symbol = traitlets.Any(allow_none=True).tag(sync=True)
    """The [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) used to hook into group functionality for components like [v-btn-toggle](/components/btn-toggle) and [v-bottom-navigation](/components/bottom-navigations/)."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height of the tabs bar."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the selected tab - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts all children components into a disabled state."""

    max = traitlets.Float(allow_none=True).tag(sync=True)
    """Sets a maximum number of selections that can be made."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows one to select multiple items."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """The items to display in the component. This can be an array of strings or objects with a property `text`."""

    stacked = traitlets.Bool(allow_none=True).tag(sync=True)
    """Apply the stacked prop to all children v-tab components."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    spaced = traitlets.Any(allow_none=True).tag(sync=True)
    """Extends content to the edges to move main content from prepend and append slots."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    mandatory = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces at least one item to always be selected (if available)."""

    content_class = traitlets.Any(allow_none=True).tag(sync=True)
    """Adds classes to the slide group item."""

    direction = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the direction of the tabs. Can be either `horizontal` or `vertical`."""

    mobile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint"""

    next_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Right pagination icon."""

    prev_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Left pagination icon."""

    inset = traitlets.Bool(allow_none=True).tag(sync=True)
    """Changes the slider to take full height. Tabs will also get some spacing and customizable rounding."""

    mobile_breakpoint = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the designated mobile breakpoint for the component."""

    center_active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the selected tab to be centered."""

    scroll_to_active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Keeps the last active element visible when resizing the scrollable container."""

    show_arrows = traitlets.Any(allow_none=True).tag(sync=True)
    """Show pagination arrows if the tab items overflow their container. For mobile devices, arrows will only display when using this prop."""

    slider_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Changes the background color of an auto-generated `v-tabs-slider`."""

    grow = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces tabs to take up all available space."""

    slider_transition_duration = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies custom slider transition duration. Default duration depends on transition type (fade: 400, grow: 350, shift: 225)."""

    hide_slider = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide's the generated `v-tabs-slider`."""

    slider_transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes slider transition to one of the predefined animation presets."""

    align_tabs = traitlets.Any(allow_none=True).tag(sync=True)
    """Aligns the tabs to the `start`, `center`, or `end` of container. Also accepts `title` to align with the `v-toolbar-title` component."""

    fixed_tabs = traitlets.Bool(allow_none=True).tag(sync=True)
    """Tabs will be centered and each tab item will grow up to 300px width."""

    inset_padding = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets custom spacing between tabs for `inset` mode."""

    inset_radius = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets custom border radius for the tabs container `inset` mode. Rounding for individual tabs is calculated by subtracting the padding."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        symbol=None,
        model_value=None,
        density="default",
        height=None,
        tag="div",
        color=None,
        disabled=False,
        max=None,
        multiple=False,
        items="[]",
        stacked=False,
        selected_class="v-tab-item--selected",
        spaced=None,
        bg_color=None,
        mandatory="force",
        content_class=None,
        direction="horizontal",
        mobile=None,
        next_icon="$next",
        prev_icon="$prev",
        inset=False,
        mobile_breakpoint=None,
        center_active=False,
        scroll_to_active=True,
        show_arrows=False,
        slider_color=None,
        grow=False,
        slider_transition_duration=None,
        hide_slider=False,
        slider_transition=None,
        align_tabs="start",
        fixed_tabs=False,
        inset_padding=None,
        inset_radius=None,
        **kwargs
    ):
        """Initialize a Tabs widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.symbol = symbol
        self.model_value = model_value
        self.density = density
        self.height = height
        self.tag = tag
        self.color = color
        self.disabled = disabled
        self.max = max
        self.multiple = multiple
        self.items = items
        self.stacked = stacked
        self.selected_class = selected_class
        self.spaced = spaced
        self.bg_color = bg_color
        self.mandatory = mandatory
        self.content_class = content_class
        self.direction = direction
        self.mobile = mobile
        self.next_icon = next_icon
        self.prev_icon = prev_icon
        self.inset = inset
        self.mobile_breakpoint = mobile_breakpoint
        self.center_active = center_active
        self.scroll_to_active = scroll_to_active
        self.show_arrows = show_arrows
        self.slider_color = slider_color
        self.grow = grow
        self.slider_transition_duration = slider_transition_duration
        self.hide_slider = hide_slider
        self.slider_transition = slider_transition
        self.align_tabs = align_tabs
        self.fixed_tabs = fixed_tabs
        self.inset_padding = inset_padding
        self.inset_radius = inset_radius

        super().__init__(**kwargs)