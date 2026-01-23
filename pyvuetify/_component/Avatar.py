import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Avatar(anywidget.AnyWidget):
    """The Avatar component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        size: Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**.
        image: Apply a specific image using [v-img](/components/images/).
        start: Applies margin at the end of the component.
        end: Applies margin at the start of the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        text: Specify content text for the component.
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.
        variant: Applies a distinct style to the component.

    Returns:
        A VAvatar widget.

    seealso:
        `https://vuetifyjs.com/api/v-avatar`__
    """

    _esm = bundled_path / "VAvatar.js"
    _css = bundled_path / "VAvatar-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**."""

    image = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Apply a specific image using [v-img](/components/images/)."""

    start = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies margin at the end of the component."""

    end = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies margin at the start of the component."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    def __init__(
        self,
        children=None,
        tag="div",
        size="default",
        image=None,
        start=False,
        end=False,
        color=None,
        density="default",
        border=False,
        rounded=None,
        tile=False,
        theme=None,
        text=None,
        icon=None,
        variant="flat",
        **kwargs
    ):
        """Initialize a Avatar widget."""
        self.children = children
        self.tag = tag
        self.size = size
        self.image = image
        self.start = start
        self.end = end
        self.color = color
        self.density = density
        self.border = border
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.text = text
        self.icon = icon
        self.variant = variant

        super().__init__(**kwargs)