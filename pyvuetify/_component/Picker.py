import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Picker(anywidget.AnyWidget):
    """The Picker component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        title: Specify a title text for the component.
        height: Sets the height for the component.
        width: Sets the width for the component.
        location: Specifies the component's location. Can combine by using a space separated string.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        position: Sets the position for the component.
        divided: Adds a divider between the header and controls.
        hide_header: Hide the picker header.
        landscape: Puts the picker into landscape mode.
        hide_title: Hide the picker title.

    Returns:
        A VPicker widget.

    seealso:
        `https://vuetifyjs.com/api/v-picker`__
    """

    _esm = bundled_path / "VPicker.js"
    _css = bundled_path / "VPicker-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the component's location. Can combine by using a space separated string."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

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

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    position = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the position for the component."""

    divided = traitlets.Bool(allow_none=True).tag(sync=True)
    """Adds a divider between the header and controls."""

    hide_header = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the picker header."""

    landscape = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the picker into landscape mode."""

    hide_title = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the picker title."""

    def __init__(
        self,
        children=None,
        tag="div",
        title=None,
        height=None,
        width=None,
        location=None,
        color=None,
        border=False,
        elevation=None,
        rounded=None,
        tile=False,
        theme=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        bg_color=None,
        position=None,
        divided=False,
        hide_header=False,
        landscape=False,
        hide_title=False,
        **kwargs
    ):
        """Initialize a Picker widget."""
        self.children = children
        self.tag = tag
        self.title = title
        self.height = height
        self.width = width
        self.location = location
        self.color = color
        self.border = border
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.bg_color = bg_color
        self.position = position
        self.divided = divided
        self.hide_header = hide_header
        self.landscape = landscape
        self.hide_title = hide_title

        super().__init__(**kwargs)