import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Footer(anywidget.AnyWidget):
    """The Footer component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        height: Sets the height for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        absolute: Applies **position: absolute** to the component.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        name: Assign a specific name for layout registration.
        app: Determines the position of the footer. If true, the footer would be given a fixed position at the bottom of the viewport. If false, the footer is set to the bottom of the page.
        order: Adjust the order of the component in relation to its registration order.

    Returns:
        A VFooter widget.

    seealso:
        `https://vuetifyjs.com/api/v-footer`__
    """

    _esm = bundled_path / "VFooter.js"
    _css = bundled_path / "VFooter-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

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

    app = traitlets.Bool(allow_none=True).tag(sync=True)
    """Determines the position of the footer. If true, the footer would be given a fixed position at the bottom of the viewport. If false, the footer is set to the bottom of the page."""

    order = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjust the order of the component in relation to its registration order."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        border=False,
        height="auto",
        elevation=None,
        absolute=False,
        rounded=None,
        tile=False,
        tag="footer",
        theme=None,
        color=None,
        name=None,
        app=False,
        order="0",
        **kwargs
    ):
        """Initialize a Footer widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.border = border
        self.height = height
        self.elevation = elevation
        self.absolute = absolute
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.name = name
        self.app = app
        self.order = order

        super().__init__(**kwargs)