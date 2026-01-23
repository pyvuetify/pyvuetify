import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class SlideGroup(anywidget.AnyWidget):
    """The SlideGroup component.

    

    Args:
        children: The child nodes of the DOM element.
        symbol: The [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) used to hook into group functionality for components like [v-btn-toggle](/components/btn-toggle) and [v-bottom-navigation](/components/bottom-navigations/).
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        tag: Specify a custom tag used on the root element.
        disabled: Puts all children components into a disabled state.
        max: Sets a maximum number of selections that can be made.
        multiple: Allows one to select multiple items.
        selected_class: Configure the active CSS class applied when an item is selected.
        mandatory: Forces at least one item to always be selected (if available).
        content_class: Adds classes to the slide group item.
        direction: Switch between horizontal and vertical modes.
        mobile: Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint
        next_icon: The appended slot when arrows are shown.
        prev_icon: The prepended slot when arrows are shown.
        mobile_breakpoint: Sets the designated mobile breakpoint for the component.
        center_active: Forces the selected component to be centered.
        scroll_to_active: Keeps the last active element visible when resizing the scrollable container.
        show_arrows: Change when the overflow arrow indicators are shown. By **default**, arrows *always* display on Desktop when the container is overflowing. When the container overflows on mobile, arrows are not shown by default. A **show-arrows** value of `true` allows these arrows to show on Mobile if the container overflowing. A value of `desktop` *always* displays arrows on Desktop while a value of `mobile` always displays arrows on Mobile. A value of `always` always displays arrows on Desktop *and* Mobile. Use **never** to turn arrows off. Find more information on how to customize breakpoint thresholds on the [breakpoints page](/customizing/breakpoints).

    Returns:
        A VSlideGroup widget.

    seealso:
        `https://vuetifyjs.com/api/v-slide-group`__
    """

    _esm = bundled_path / "VSlideGroup.js"
    _css = bundled_path / "VSlideGroup-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    symbol = traitlets.Any(allow_none=True).tag(sync=True)
    """The [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) used to hook into group functionality for components like [v-btn-toggle](/components/btn-toggle) and [v-bottom-navigation](/components/bottom-navigations/)."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts all children components into a disabled state."""

    max = traitlets.Float(allow_none=True).tag(sync=True)
    """Sets a maximum number of selections that can be made."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows one to select multiple items."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    mandatory = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces at least one item to always be selected (if available)."""

    content_class = traitlets.Any(allow_none=True).tag(sync=True)
    """Adds classes to the slide group item."""

    direction = traitlets.Any(allow_none=True).tag(sync=True)
    """Switch between horizontal and vertical modes."""

    mobile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint"""

    next_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The appended slot when arrows are shown."""

    prev_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The prepended slot when arrows are shown."""

    mobile_breakpoint = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the designated mobile breakpoint for the component."""

    center_active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the selected component to be centered."""

    scroll_to_active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Keeps the last active element visible when resizing the scrollable container."""

    show_arrows = traitlets.Any(allow_none=True).tag(sync=True)
    """Change when the overflow arrow indicators are shown. By **default**, arrows *always* display on Desktop when the container is overflowing. When the container overflows on mobile, arrows are not shown by default. A **show-arrows** value of `true` allows these arrows to show on Mobile if the container overflowing. A value of `desktop` *always* displays arrows on Desktop while a value of `mobile` always displays arrows on Mobile. A value of `always` always displays arrows on Desktop *and* Mobile. Use **never** to turn arrows off. Find more information on how to customize breakpoint thresholds on the [breakpoints page](/customizing/breakpoints)."""

    def __init__(
        self,
        children=None,
        symbol=None,
        model_value=None,
        tag="div",
        disabled=False,
        max=None,
        multiple=False,
        selected_class="v-slide-group-item--active",
        mandatory=False,
        content_class=None,
        direction="horizontal",
        mobile=None,
        next_icon="$next",
        prev_icon="$prev",
        mobile_breakpoint=None,
        center_active=False,
        scroll_to_active=True,
        show_arrows=False,
        **kwargs
    ):
        """Initialize a SlideGroup widget."""
        self.children = children
        self.symbol = symbol
        self.model_value = model_value
        self.tag = tag
        self.disabled = disabled
        self.max = max
        self.multiple = multiple
        self.selected_class = selected_class
        self.mandatory = mandatory
        self.content_class = content_class
        self.direction = direction
        self.mobile = mobile
        self.next_icon = next_icon
        self.prev_icon = prev_icon
        self.mobile_breakpoint = mobile_breakpoint
        self.center_active = center_active
        self.scroll_to_active = scroll_to_active
        self.show_arrows = show_arrows

        super().__init__(**kwargs)