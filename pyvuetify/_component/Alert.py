import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Alert(anywidget.AnyWidget):
    """The Alert component.



    Args:
        children: The child nodes of the DOM element.
        title: Specify a title text for the component.
        text: Specify content text for the component.
        border: Adds a colored border to the component.
        border_color: Specifies the color of the border. Only used in combination with **border** prop. Accepts any color value.
        closable: Adds a close icon that can hide the alert.
        close_icon: Change the default icon used for **closable** alerts.
        type: Create a specialized alert that uses a contextual color and has a pre-defined icon.
        close_label: Text used for *aria-label* on **closable** alerts. Can also be customized globally in [Internationalization](/customization/internationalization).
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.
        model_value: Controls whether the component is visible or hidden.
        prominent: Displays a larger vertically centered icon to draw more attention.
        density: Adjusts the vertical height used by the component.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        icon_sizes: An array of tuples that define the icon sizes for each named size.
        icon_size: The specific size of the icon, can use named sizes.
        location: Specifies the component's location. Can combine by using a space separated string.
        position: Sets the position for the component.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes the component's border-radius.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.

    Returns:
        A VAlert widget.

    seealso:
        `https://vuetifyjs.com/api/v-alert`__
    """

    _esm = bundled_path / "VAlert.mjs"
    _css = bundled_path / "VAlert.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Adds a colored border to the component."""

    border_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specifies the color of the border. Only used in combination with **border** prop. Accepts any color value."""

    closable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Adds a close icon that can hide the alert."""

    close_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Change the default icon used for **closable** alerts."""

    type = traitlets.Any(allow_none=True).tag(sync=True)
    """Create a specialized alert that uses a contextual color and has a pre-defined icon."""

    close_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text used for *aria-label* on **closable** alerts. Can also be customized globally in [Internationalization](/customization/internationalization)."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

    model_value = traitlets.Bool(allow_none=True).tag(sync=True)
    """Controls whether the component is visible or hidden."""

    prominent = traitlets.Bool(allow_none=True).tag(sync=True)
    """Displays a larger vertically centered icon to draw more attention."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

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

    icon_sizes = traitlets.Any(allow_none=True).tag(sync=True)
    """An array of tuples that define the icon sizes for each named size."""

    icon_size = traitlets.Any(allow_none=True).tag(sync=True)
    """The specific size of the icon, can use named sizes."""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the component's location. Can combine by using a space separated string."""

    position = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the position for the component."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the component's border-radius."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    def __init__(
        self,
        children=None,
        title=None,
        text=None,
        border=False,
        border_color=None,
        closable=False,
        close_icon="$close",
        type=None,
        close_label="$vuetify.close",
        icon=None,
        model_value=True,
        prominent=False,
        density="default",
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        elevation=None,
        icon_sizes="[['x-small', 10],['small', 16],['default', 24],['large', 28],['x-large', 32]]",
        icon_size=None,
        location=None,
        position=None,
        rounded=None,
        tile=False,
        tag="div",
        theme=None,
        color=None,
        variant="flat",
        **kwargs
    ):
        """Initialize a Alert widget."""
        self.children = children
        self.title = title
        self.text = text
        self.border = border
        self.border_color = border_color
        self.closable = closable
        self.close_icon = close_icon
        self.type = type
        self.close_label = close_label
        self.icon = icon
        self.model_value = model_value
        self.prominent = prominent
        self.density = density
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.elevation = elevation
        self.icon_sizes = icon_sizes
        self.icon_size = icon_size
        self.location = location
        self.position = position
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.variant = variant

        super().__init__(**kwargs)