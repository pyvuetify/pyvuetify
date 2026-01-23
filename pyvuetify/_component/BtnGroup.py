import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class BtnGroup(anywidget.AnyWidget):
    """The BtnGroup component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        variant: Applies a distinct style to the component.
        base_color: Sets the color of component when not focused.
        divided: Add dividers between children [v-btn](/components/buttons) components.
        direction: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VBtnGroup.json))

    Returns:
        A VBtnGroup widget.

    seealso:
        `https://vuetifyjs.com/api/v-btn-group`__
    """

    _esm = bundled_path / "VBtnGroup.js"
    _css = bundled_path / "VBtnGroup-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of component when not focused."""

    divided = traitlets.Bool(allow_none=True).tag(sync=True)
    """Add dividers between children [v-btn](/components/buttons) components."""

    direction = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VBtnGroup.json))"""

    def __init__(
        self,
        children=None,
        tag="div",
        color=None,
        density="default",
        border=False,
        elevation=None,
        rounded=None,
        tile=False,
        theme=None,
        variant="elevated",
        base_color=None,
        divided=False,
        direction="horizontal",
        **kwargs
    ):
        """Initialize a BtnGroup widget."""
        self.children = children
        self.tag = tag
        self.color = color
        self.density = density
        self.border = border
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.variant = variant
        self.base_color = base_color
        self.divided = divided
        self.direction = direction

        super().__init__(**kwargs)