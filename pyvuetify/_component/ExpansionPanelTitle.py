import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ExpansionPanelTitle(anywidget.AnyWidget):
    """The ExpansionPanelTitle component.

    

    Args:
        children: The child nodes of the DOM element.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        static: Remove title size expansion when selected.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        readonly: Makes the expansion panel content read only.
        ripple: Applies the [v-ripple](/directives/ripple) directive.
        expand_icon: Icon used when the expansion panel is in a expandable state.
        collapse_icon: Icon used when the expansion panel is in a collapsable state.
        hide_actions: Hide the expand icon in the content title.
        focusable: Makes the expansion panel headers focusable.

    Returns:
        A VExpansionPanelTitle widget.

    seealso:
        `https://vuetifyjs.com/api/v-expansion-panel-title`__
    """

    _esm = bundled_path / "VExpansionPanelTitle.js"
    _css = bundled_path / "VExpansionPanelTitle-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

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

    static = traitlets.Bool(allow_none=True).tag(sync=True)
    """Remove title size expansion when selected."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes the expansion panel content read only."""

    ripple = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [v-ripple](/directives/ripple) directive."""

    expand_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used when the expansion panel is in a expandable state."""

    collapse_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used when the expansion panel is in a collapsable state."""

    hide_actions = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the expand icon in the content title."""

    focusable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes the expansion panel headers focusable."""

    def __init__(
        self,
        children=None,
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        static=False,
        color=None,
        readonly=False,
        ripple=False,
        expand_icon="$expand",
        collapse_icon="$collapse",
        hide_actions=False,
        focusable=False,
        **kwargs
    ):
        """Initialize a ExpansionPanelTitle widget."""
        self.children = children
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.static = static
        self.color = color
        self.readonly = readonly
        self.ripple = ripple
        self.expand_icon = expand_icon
        self.collapse_icon = collapse_icon
        self.hide_actions = hide_actions
        self.focusable = focusable

        super().__init__(**kwargs)