import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ExpansionPanel(anywidget.AnyWidget):
    """The ExpansionPanel component.

    

    Args:
        children: The child nodes of the DOM element.
        title: Specify a title text for the component.
        text: Specify content text for the component.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        static: Remove title size expansion when selected.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        disabled: Disables the expansion-panel content.
        value: Controls the opened/closed state of content.
        readonly: Makes the expansion panel content read only.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        selected_class: Configure the active CSS class applied when an item is selected.
        eager: Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        expand_icon: Icon used when the expansion panel is in a expandable state.
        collapse_icon: Icon used when the expansion panel is in a collapsable state.
        hide_actions: Hide the expand icon in the content title.
        focusable: Makes the expansion panel content focusable.

    Returns:
        A VExpansionPanel widget.

    seealso:
        `https://vuetifyjs.com/api/v-expansion-panel`__
    """

    _esm = bundled_path / "VExpansionPanel.js"
    _css = bundled_path / "VExpansionPanel-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

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

    static = traitlets.Bool(allow_none=True).tag(sync=True)
    """Remove title size expansion when selected."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Disables the expansion-panel content."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls the opened/closed state of content."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes the expansion panel content read only."""

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

    hide_actions = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the expand icon in the content title."""

    focusable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes the expansion panel content focusable."""

    def __init__(
        self,
        children=None,
        title=None,
        text=None,
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        elevation=None,
        static=False,
        rounded=None,
        tile=False,
        tag="div",
        color=None,
        disabled=False,
        value=None,
        readonly=False,
        ripple=False,
        selected_class=None,
        eager=False,
        bg_color=None,
        expand_icon="$expand",
        collapse_icon="$collapse",
        hide_actions=False,
        focusable=False,
        **kwargs
    ):
        """Initialize a ExpansionPanel widget."""
        self.children = children
        self.title = title
        self.text = text
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.elevation = elevation
        self.static = static
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.color = color
        self.disabled = disabled
        self.value = value
        self.readonly = readonly
        self.ripple = ripple
        self.selected_class = selected_class
        self.eager = eager
        self.bg_color = bg_color
        self.expand_icon = expand_icon
        self.collapse_icon = collapse_icon
        self.hide_actions = hide_actions
        self.focusable = focusable

        super().__init__(**kwargs)