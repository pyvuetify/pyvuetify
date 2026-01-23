import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class BtnToggle(anywidget.AnyWidget):
    """The BtnToggle component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        disabled: Puts all children components into a disabled state.
        max: Sets a maximum number of selections that can be made.
        multiple: Allows one to select multiple items.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Round edge buttons.
        tile: Removes the component's border-radius.
        theme: Specify a theme for this component and all of its children.
        variant: Applies a distinct style to the component.
        base_color: Sets the color of component when not focused.
        selected_class: Configure the active CSS class applied when an item is selected.
        mandatory: Forces at least one item to always be selected (if available).
        divided: Add dividers between children [v-btn](/components/buttons) components.
        direction: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VBtnGroup.json))

    Returns:
        A VBtnToggle widget.

    seealso:
        `https://vuetifyjs.com/api/v-btn-toggle`__
    """

    _esm = bundled_path / "VBtnToggle.js"
    _css = bundled_path / "VBtnToggle-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

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

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Round edge buttons."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the component's border-radius."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of component when not focused."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    mandatory = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces at least one item to always be selected (if available)."""

    divided = traitlets.Bool(allow_none=True).tag(sync=True)
    """Add dividers between children [v-btn](/components/buttons) components."""

    direction = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VBtnGroup.json))"""

    def __init__(
        self,
        children=None,
        tag="div",
        disabled=False,
        max=None,
        multiple=False,
        model_value=None,
        color=None,
        density="default",
        border=False,
        elevation=None,
        rounded=None,
        tile=False,
        theme=None,
        variant="elevated",
        base_color=None,
        selected_class=None,
        mandatory=False,
        divided=False,
        direction="horizontal",
        **kwargs
    ):
        """Initialize a BtnToggle widget."""
        self.children = children
        self.tag = tag
        self.disabled = disabled
        self.max = max
        self.multiple = multiple
        self.model_value = model_value
        self.color = color
        self.density = density
        self.border = border
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.variant = variant
        self.base_color = base_color
        self.selected_class = selected_class
        self.mandatory = mandatory
        self.divided = divided
        self.direction = direction

        super().__init__(**kwargs)