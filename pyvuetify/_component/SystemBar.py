import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class SystemBar(anywidget.AnyWidget):
    """The SystemBar component.

    

    Args:
        children: The child nodes of the DOM element.
        height: Sets the height for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        absolute: Applies **position: absolute** to the component.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        name: Assign a specific name for layout registration.
        order: Adjust the order of the component in relation to its registration order.
        window: Increases the system bar height to 32px (24px default).

    Returns:
        A VSystemBar widget.

    seealso:
        `https://vuetifyjs.com/api/v-system-bar`__
    """

    _esm = bundled_path / "VSystemBar.js"
    _css = bundled_path / "VSystemBar-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    absolute = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies **position: absolute** to the component."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Assign a specific name for layout registration."""

    order = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjust the order of the component in relation to its registration order."""

    window = traitlets.Bool(allow_none=True).tag(sync=True)
    """Increases the system bar height to 32px (24px default)."""

    def __init__(
        self,
        children=None,
        height=None,
        elevation=None,
        absolute=False,
        rounded=None,
        tile=False,
        tag="div",
        theme=None,
        color=None,
        name=None,
        order="0",
        window=False,
        **kwargs
    ):
        """Initialize a SystemBar widget."""
        self.children = children
        self.height = height
        self.elevation = elevation
        self.absolute = absolute
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.name = name
        self.order = order
        self.window = window

        super().__init__(**kwargs)