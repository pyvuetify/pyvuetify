import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Carousel(anywidget.AnyWidget):
    """The Carousel component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        tag: Specify a custom tag used on the root element.
        reverse: Reverse the normal transition direction.
        progress: Displays a carousel progress bar. Requires the **cycle** prop and **interval**.
        disabled: Removes the ability to click or target the component.
        height: Sets the height for the component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        color: Applies a color to the navigation dots - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        theme: Specify a theme for this component and all of its children.
        selected_class: Configure the active CSS class applied when an item is selected.
        mandatory: Forces at least one item to always be selected (if available).
        direction: The transition direction when changing windows.
        interval: The duration between image cycles. Requires the **cycle** prop.
        cycle: Determines if the carousel should cycle through images.
        delimiter_icon: Sets icon for carousel delimiter.
        hide_delimiters: Hides the carousel's bottom delimiters.
        hide_delimiter_background: Hides the bottom delimiter background.
        continuous: Determines whether carousel is continuous.
        next_icon: The displayed icon for forcing pagination to the next item.
        prev_icon: The displayed icon for forcing pagination to the previous item.
        show_arrows: Displays arrows for next/previous navigation.
        touch: Provide a custom **left** and **right** function when swiped left or right.
        crossfade: Enables crossfade transition.
        transition_duration: Overrides transition duration. Does not work in firefox, safari <18, or with `prefers-reduced-motion: reduce`.
        vertical_arrows: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VWindow.json))
        vertical_delimiters: Displays carousel delimiters vertically.

    Returns:
        A VCarousel widget.

    seealso:
        `https://vuetifyjs.com/api/v-carousel`__
    """

    _esm = bundled_path / "VCarousel.js"
    _css = bundled_path / "VCarousel-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    reverse = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reverse the normal transition direction."""

    progress = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays a carousel progress bar. Requires the **cycle** prop and **interval**."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies a color to the navigation dots - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    mandatory = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces at least one item to always be selected (if available)."""

    direction = traitlets.Any(allow_none=True).tag(sync=True)
    """The transition direction when changing windows."""

    interval = traitlets.Any(allow_none=True).tag(sync=True)
    """The duration between image cycles. Requires the **cycle** prop."""

    cycle = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines if the carousel should cycle through images."""

    delimiter_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets icon for carousel delimiter."""

    hide_delimiters = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the carousel's bottom delimiters."""

    hide_delimiter_background = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the bottom delimiter background."""

    continuous = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines whether carousel is continuous."""

    next_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The displayed icon for forcing pagination to the next item."""

    prev_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The displayed icon for forcing pagination to the previous item."""

    show_arrows = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays arrows for next/previous navigation."""

    touch = traitlets.Any(allow_none=True).tag(sync=True)
    """Provide a custom **left** and **right** function when swiped left or right."""

    crossfade = traitlets.Bool(allow_none=True).tag(sync=True)
    """Enables crossfade transition."""

    transition_duration = traitlets.Float(allow_none=True).tag(sync=True)
    """Overrides transition duration. Does not work in firefox, safari <18, or with `prefers-reduced-motion: reduce`."""

    vertical_arrows = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VWindow.json))"""

    vertical_delimiters = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays carousel delimiters vertically."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        tag="div",
        reverse=False,
        progress=False,
        disabled=False,
        height="500",
        model_value=None,
        color=None,
        theme=None,
        selected_class="v-window-item--active",
        mandatory="force",
        direction="horizontal",
        interval="6000",
        cycle=False,
        delimiter_icon="$delimiter",
        hide_delimiters=False,
        hide_delimiter_background=False,
        continuous=True,
        next_icon="$next",
        prev_icon="$prev",
        show_arrows=True,
        touch=None,
        crossfade=False,
        transition_duration=None,
        vertical_arrows=False,
        vertical_delimiters=False,
        **kwargs
    ):
        """Initialize a Carousel widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.tag = tag
        self.reverse = reverse
        self.progress = progress
        self.disabled = disabled
        self.height = height
        self.model_value = model_value
        self.color = color
        self.theme = theme
        self.selected_class = selected_class
        self.mandatory = mandatory
        self.direction = direction
        self.interval = interval
        self.cycle = cycle
        self.delimiter_icon = delimiter_icon
        self.hide_delimiters = hide_delimiters
        self.hide_delimiter_background = hide_delimiter_background
        self.continuous = continuous
        self.next_icon = next_icon
        self.prev_icon = prev_icon
        self.show_arrows = show_arrows
        self.touch = touch
        self.crossfade = crossfade
        self.transition_duration = transition_duration
        self.vertical_arrows = vertical_arrows
        self.vertical_delimiters = vertical_delimiters

        super().__init__(**kwargs)