import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ExpansionPanels(anywidget.AnyWidget):
    """The ExpansionPanels component.

    

    Args:
        children: The child nodes of the DOM element.
        flat: Removes the expansion-panel's elevation and borders.
        model_value: Controls expanded panel(s). Defaults to an empty array when using **multiple** prop. It is recommended to set unique `value` prop for the panels inside, otherwise index is used instead.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        static: Remove title size expansion when selected.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes the border-radius.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.
        disabled: Puts all children components into a disabled state.
        max: Sets a maximum number of selections that can be made.
        multiple: Allows one to select multiple items.
        readonly: Makes the entire expansion panel read only.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        selected_class: Configure the active CSS class applied when an item is selected.
        eager: Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        expand_icon: Icon used when the expansion panel is in a expandable state.
        collapse_icon: Icon used when the expansion panel is in a collapsable state.
        mandatory: Forces at least one item to always be selected (if available).
        hide_actions: Hide the expand icon in the content title.
        focusable: Makes the expansion-panel headers focusable.

    Returns:
        A VExpansionPanels widget.

    seealso:
        `https://vuetifyjs.com/api/v-expansion-panels`__
    """

    _esm = bundled_path / "VExpansionPanels.js"
    _css = bundled_path / "VExpansionPanels-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the expansion-panel's elevation and borders."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls expanded panel(s). Defaults to an empty array when using **multiple** prop. It is recommended to set unique `value` prop for the panels inside, otherwise index is used instead."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    static = traitlets.Bool(allow_none=True).tag(sync=True)
    """Remove title size expansion when selected."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the border-radius."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts all children components into a disabled state."""

    max = traitlets.Float(allow_none=True).tag(sync=True)
    """Sets a maximum number of selections that can be made."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows one to select multiple items."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes the entire expansion panel read only."""

    ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    eager = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    expand_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used when the expansion panel is in a expandable state."""

    collapse_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used when the expansion panel is in a collapsable state."""

    mandatory = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces at least one item to always be selected (if available)."""

    hide_actions = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the expand icon in the content title."""

    focusable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes the expansion-panel headers focusable."""

    def __init__(
        self,
        children=None,
        flat=False,
        model_value=None,
        elevation=None,
        static=False,
        rounded=None,
        tile=False,
        tag="div",
        theme=None,
        color=None,
        variant="default",
        disabled=False,
        max=None,
        multiple=False,
        readonly=False,
        ripple=False,
        selected_class=None,
        eager=False,
        bg_color=None,
        expand_icon="$expand",
        collapse_icon="$collapse",
        mandatory=False,
        hide_actions=False,
        focusable=False,
        **kwargs
    ):
        """Initialize a ExpansionPanels widget."""
        self.children = children
        self.flat = flat
        self.model_value = model_value
        self.elevation = elevation
        self.static = static
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.variant = variant
        self.disabled = disabled
        self.max = max
        self.multiple = multiple
        self.readonly = readonly
        self.ripple = ripple
        self.selected_class = selected_class
        self.eager = eager
        self.bg_color = bg_color
        self.expand_icon = expand_icon
        self.collapse_icon = collapse_icon
        self.mandatory = mandatory
        self.hide_actions = hide_actions
        self.focusable = focusable

        super().__init__(**kwargs)