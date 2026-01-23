import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ChipGroup(anywidget.AnyWidget):
    """The ChipGroup component.

    

    Args:
        children: The child nodes of the DOM element.
        symbol: The [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) used to hook into group functionality for components like [v-btn-toggle](/components/btn-toggle) and [v-bottom-navigation](/components/bottom-navigations/).
        filter: Applies an checkmark icon in front of every chip for using it like a filter.
        tag: Specify a custom tag used on the root element.
        disabled: Puts all children components into a disabled state.
        max: Sets a maximum number of selections that can be made.
        multiple: Allows one to select multiple items.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        theme: Specify a theme for this component and all of its children.
        variant: Applies a distinct style to the component.
        mobile: Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint
        mobile_breakpoint: Sets the designated mobile breakpoint for the component.
        base_color: Sets the color of component when not focused. Recommended with `color` or `filter` to properly highlight selected items.
        selected_class: Configure the active CSS class applied when an item is selected.
        mandatory: Forces at least one item to always be selected (if available).
        content_class: Adds classes to the slide group item.
        direction: Switch between horizontal and vertical modes.
        column: Remove horizontal pagination and wrap items as needed.
        next_icon: Specify the icon to use for the next icon.
        prev_icon: Specify the icon to use for the prev icon.
        show_arrows: Force the display of the pagination arrows.
        value_comparator: Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop.
        center_active: Forces the selected chip to be centered.
        scroll_to_active: Keeps the last active element visible when resizing the scrollable container.

    Returns:
        A VChipGroup widget.

    seealso:
        `https://vuetifyjs.com/api/v-chip-group`__
    """

    _esm = bundled_path / "VChipGroup.js"
    _css = bundled_path / "VChipGroup-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    symbol = traitlets.Any(allow_none=True).tag(sync=True)
    """The [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) used to hook into group functionality for components like [v-btn-toggle](/components/btn-toggle) and [v-bottom-navigation](/components/bottom-navigations/)."""

    filter = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies an checkmark icon in front of every chip for using it like a filter."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts all children components into a disabled state."""

    max = traitlets.Float(allow_none=True).tag(sync=True)
    """Sets a maximum number of selections that can be made."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows one to select multiple items."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    mobile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint"""

    mobile_breakpoint = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the designated mobile breakpoint for the component."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of component when not focused. Recommended with `color` or `filter` to properly highlight selected items."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    mandatory = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces at least one item to always be selected (if available)."""

    content_class = traitlets.Any(allow_none=True).tag(sync=True)
    """Adds classes to the slide group item."""

    direction = traitlets.Any(allow_none=True).tag(sync=True)
    """Switch between horizontal and vertical modes."""

    column = traitlets.Bool(allow_none=True).tag(sync=True)
    """Remove horizontal pagination and wrap items as needed."""

    next_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify the icon to use for the next icon."""

    prev_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify the icon to use for the prev icon."""

    show_arrows = traitlets.Any(allow_none=True).tag(sync=True)
    """Force the display of the pagination arrows."""

    value_comparator = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a custom comparison algorithm to compare **model-value** and values contains in the **items** prop."""

    center_active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the selected chip to be centered."""

    scroll_to_active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Keeps the last active element visible when resizing the scrollable container."""

    def __init__(
        self,
        children=None,
        symbol=None,
        filter=False,
        tag="div",
        disabled=False,
        max=None,
        multiple=False,
        model_value=None,
        color=None,
        theme=None,
        variant="tonal",
        mobile=None,
        mobile_breakpoint=None,
        base_color=None,
        selected_class="v-chip--selected",
        mandatory=False,
        content_class=None,
        direction="horizontal",
        column=False,
        next_icon="$next",
        prev_icon="$prev",
        show_arrows=False,
        value_comparator=None,
        center_active=False,
        scroll_to_active=False,
        **kwargs
    ):
        """Initialize a ChipGroup widget."""
        self.children = children
        self.symbol = symbol
        self.filter = filter
        self.tag = tag
        self.disabled = disabled
        self.max = max
        self.multiple = multiple
        self.model_value = model_value
        self.color = color
        self.theme = theme
        self.variant = variant
        self.mobile = mobile
        self.mobile_breakpoint = mobile_breakpoint
        self.base_color = base_color
        self.selected_class = selected_class
        self.mandatory = mandatory
        self.content_class = content_class
        self.direction = direction
        self.column = column
        self.next_icon = next_icon
        self.prev_icon = prev_icon
        self.show_arrows = show_arrows
        self.value_comparator = value_comparator
        self.center_active = center_active
        self.scroll_to_active = scroll_to_active

        super().__init__(**kwargs)