import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ProgressCircular(anywidget.AnyWidget):
    """The ProgressCircular component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        tag: Specify a custom tag used on the root element.
        indeterminate: Constantly animates, use when loading progress is unknown. If set to the string `'disable-shrink'` it will use a simpler animation that does not run on the main thread.
        size: Sets the diameter of the circle in pixels.
        width: Sets the stroke of the circle in pixels.
        model_value: The percentage value for current progress.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        rounded: Rounds the ends of the progress arc for a softer appearance. When enabled, the progress stroke will have rounded caps instead of square ends.
        theme: Specify a theme for this component and all of its children.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        rotate: Rotates the circle start point in degrees.

    Returns:
        A VProgressCircular widget.

    seealso:
        `https://vuetifyjs.com/api/v-progress-circular`__
    """

    _esm = bundled_path / "VProgressCircular.js"
    _css = bundled_path / "VProgressCircular-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    indeterminate = traitlets.Any(allow_none=True).tag(sync=True)
    """Constantly animates, use when loading progress is unknown. If set to the string `'disable-shrink'` it will use a simpler animation that does not run on the main thread."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the diameter of the circle in pixels."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the stroke of the circle in pixels."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The percentage value for current progress."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    rounded = traitlets.Bool(allow_none=True).tag(sync=True)
    """Rounds the ends of the progress arc for a softer appearance. When enabled, the progress stroke will have rounded caps instead of square ends."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    rotate = traitlets.Any(allow_none=True).tag(sync=True)
    """Rotates the circle start point in degrees."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        tag="div",
        indeterminate=False,
        size="default",
        width="4",
        model_value="0",
        color=None,
        rounded=False,
        theme=None,
        bg_color=None,
        rotate="0",
        **kwargs
    ):
        """Initialize a ProgressCircular widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.tag = tag
        self.indeterminate = indeterminate
        self.size = size
        self.width = width
        self.model_value = model_value
        self.color = color
        self.rounded = rounded
        self.theme = theme
        self.bg_color = bg_color
        self.rotate = rotate

        super().__init__(**kwargs)