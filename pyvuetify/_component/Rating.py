import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Rating(anywidget.AnyWidget):
    """The Rating component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        length: The amount of items to show.
        tag: Specify a custom tag used on the root element.
        name: Sets the component's name attribute.
        disabled: Removes the ability to click or target the component.
        size: Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        theme: Specify a theme for this component and all of its children.
        active_color: The applied color when the component is in an active state.
        readonly: Removes all hover effects and pointer events.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        hover: Provides visual feedback when hovering over icons.
        clearable: Allows for the component to be cleared by clicking on the current value.
        item_aria_label: The **aria-label** used for each item.
        empty_icon: The icon displayed when empty.
        full_icon: The icon displayed when full.
        half_increments: Allows the selection of half increments.
        item_label_position: Position of item labels. Accepts 'top' and 'bottom'.
        item_labels: Array of labels to display next to each item..

    Returns:
        A VRating widget.

    seealso:
        `https://vuetifyjs.com/api/v-rating`__
    """

    _esm = bundled_path / "VRating.js"
    _css = bundled_path / "VRating-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    length = traitlets.Any(allow_none=True).tag(sync=True)
    """The amount of items to show."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the component's name attribute."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    active_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The applied color when the component is in an active state."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes all hover effects and pointer events."""

    ripple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    hover = traitlets.Bool(allow_none=True).tag(sync=True)
    """Provides visual feedback when hovering over icons."""

    clearable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows for the component to be cleared by clicking on the current value."""

    item_aria_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The **aria-label** used for each item."""

    empty_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The icon displayed when empty."""

    full_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The icon displayed when full."""

    half_increments = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows the selection of half increments."""

    item_label_position = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Position of item labels. Accepts 'top' and 'bottom'."""

    item_labels = traitlets.Any(allow_none=True).tag(sync=True)
    """Array of labels to display next to each item.."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        length="5",
        tag="div",
        name=None,
        disabled=False,
        size="default",
        model_value="0",
        color=None,
        density="default",
        theme=None,
        active_color=None,
        readonly=False,
        ripple=False,
        hover=False,
        clearable=False,
        item_aria_label="$vuetify.rating.ariaLabel.item",
        empty_icon="$ratingEmpty",
        full_icon="$ratingFull",
        half_increments=False,
        item_label_position="top",
        item_labels=None,
        **kwargs
    ):
        """Initialize a Rating widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.length = length
        self.tag = tag
        self.name = name
        self.disabled = disabled
        self.size = size
        self.model_value = model_value
        self.color = color
        self.density = density
        self.theme = theme
        self.active_color = active_color
        self.readonly = readonly
        self.ripple = ripple
        self.hover = hover
        self.clearable = clearable
        self.item_aria_label = item_aria_label
        self.empty_icon = empty_icon
        self.full_icon = full_icon
        self.half_increments = half_increments
        self.item_label_position = item_label_position
        self.item_labels = item_labels

        super().__init__(**kwargs)