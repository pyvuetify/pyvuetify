import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parent / "static"


class Alert(anywidget.AnyWidget):
    """The Alert component.

    The v-alert component is used to convey important information to the user through contextual types, icons, and colors. These alerts are positioned to draw user attention.

    Args:
        border: Puts a border on the alert. Accepts **top** \\| **right** \\| **bottom** \\| **left**.
        close_label: Text used for *aria-label* on **dismissible** alerts. Can also be customizing globally in [Internationalization](/customization/internationalization).
        color: Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        colored_border: Applies the defined **color** to the alert's border.
        dark: Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).
        dense: Decreases component's height.
        dismissible: Adds a close icon that can hide the alert.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        height: Sets the height for the component.
        icon: Designates a specific icon.
        light: Applies the light theme variant to the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        mode: Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).
        origin: Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
        outlined: Makes the background transparent and applies a thin border.
        prominent: Displays a larger vertically centered icon to draw more attention.
        tag: Specify a custom tag used on the root element.
        text: Applies the defined **color** to text and a low opacity background of the same.
        tile: Removes the component's border-radius.
        transition: Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.
        type: Specify a **success**, **info**, **warning** or **error** alert. Uses the contextual color and has a pre-defined icon.
        value: Controls whether the component is visible or hidden.
        width: Sets the width for the component.

    Returns:
        A Alert widget.
    """

    _esm = bundled_path / "Alert.mjs"
    _css = bundled_path / "Alert.css"

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Puts a border on the alert. Accepts **top** \\| **right** \\| **bottom** \\| **left**."""

    close_label = traitlets.Any(allow_none=True).tag(sync=True)
    """Text used for *aria-label* on **dismissible** alerts. Can also be customizing globally in [Internationalization](/customization/internationalization)."""

    color = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    colored_border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the defined **color** to the alert's border."""

    dark = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html)."""

    dense = traitlets.Any(allow_none=True).tag(sync=True)
    """Decreases component's height."""

    dismissible = traitlets.Any(allow_none=True).tag(sync=True)
    """Adds a close icon that can hide the alert."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates a specific icon."""

    light = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the light theme variant to the component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    mode = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition)."""

    origin = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)."""

    outlined = traitlets.Any(allow_none=True).tag(sync=True)
    """Makes the background transparent and applies a thin border."""

    prominent = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays a larger vertically centered icon to draw more attention."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    text = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the defined **color** to text and a low opacity background of the same."""

    tile = traitlets.Any(allow_none=True).tag(sync=True)
    """Removes the component's border-radius."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own."""

    type = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a **success**, **info**, **warning** or **error** alert. Uses the contextual color and has a pre-defined icon."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls whether the component is visible or hidden."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    def __init__(
        self,
        border=None,
        close_label=None,
        color=None,
        colored_border=None,
        dark=None,
        dense=None,
        dismissible=None,
        elevation=None,
        height=None,
        icon=None,
        light=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        mode=None,
        origin=None,
        outlined=None,
        prominent=None,
        tag=None,
        text=None,
        tile=None,
        transition=None,
        type=None,
        value=None,
        width=None,
        **kwargs
    ):
        """Initialize a Alert widget."""

        self.border = border
        self.close_label = close_label
        self.color = color
        self.colored_border = colored_border
        self.dark = dark
        self.dense = dense
        self.dismissible = dismissible
        self.elevation = elevation
        self.height = height
        self.icon = icon
        self.light = light
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.mode = mode
        self.origin = origin
        self.outlined = outlined
        self.prominent = prominent
        self.tag = tag
        self.text = text
        self.tile = tile
        self.transition = transition
        self.type = type
        self.value = value
        self.width = width

        super().__init__(**kwargs)
