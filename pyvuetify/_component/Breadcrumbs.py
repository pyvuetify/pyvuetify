import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Breadcrumbs(anywidget.AnyWidget):
    """The Breadcrumbs component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        tag: Specify a custom tag used on the root element.
        disabled: Removes the ability to click or target the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        divider: Specifies the dividing character between items.
        active_class: The class applied to the component when it is in an active state.
        active_color: The applied color when the component is in an active state.
        items: An array of strings or objects used for automatically generating children components.

    Returns:
        A VBreadcrumbs widget.

    seealso:
        `https://vuetifyjs.com/api/v-breadcrumbs`__
    """

    _esm = bundled_path / "VBreadcrumbs.js"
    _css = bundled_path / "VBreadcrumbs-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    divider = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specifies the dividing character between items."""

    active_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The class applied to the component when it is in an active state."""

    active_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The applied color when the component is in an active state."""

    items = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of strings or objects used for automatically generating children components."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        tag="ul",
        disabled=False,
        color=None,
        density="default",
        rounded=None,
        tile=False,
        icon=None,
        bg_color=None,
        divider="/",
        active_class=None,
        active_color=None,
        items="[]",
        **kwargs
    ):
        """Initialize a Breadcrumbs widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.tag = tag
        self.disabled = disabled
        self.color = color
        self.density = density
        self.rounded = rounded
        self.tile = tile
        self.icon = icon
        self.bg_color = bg_color
        self.divider = divider
        self.active_class = active_class
        self.active_color = active_color
        self.items = items

        super().__init__(**kwargs)