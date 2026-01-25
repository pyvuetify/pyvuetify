import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ColorPicker(anywidget.AnyWidget):
    """The ColorPicker component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        title: Specify a title text for the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width of the color picker.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        location: Specifies the component's location. Can combine by using a space separated string.
        position: Sets the position for the component.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        disabled: Removes the ability to click or target the component.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        mode: The current selected input type. Syncable with `v-model:mode`.
        canvas_height: Height of canvas.
        dot_size: Changes the size of the selection dot on the canvas.
        hide_canvas: Hides canvas.
        hide_sliders: Hides sliders.
        hide_inputs: Hides inputs.
        modes: Sets available input types.
        show_swatches: Displays color swatches.
        swatches_max_height: Sets the maximum height of the swatches section.
        divided: Adds a divider between the header and controls.
        landscape: Puts the picker into landscape mode.
        hide_header: Hide the picker header.
        hide_title: Hide the picker title.
        hide_eye_dropper: Hides eyedropper icon.
        eye_dropper_icon: Icon used to trigger EyeDropper API.
        swatches: Sets the available color swatches to select from. 2D array of rows and columns, accepts any color format the picker does.

    Returns:
        A VColorPicker widget.

    seealso:
        `https://vuetifyjs.com/api/v-color-picker`__
    """

    _esm = bundled_path / "VColorPicker.js"
    _css = bundled_path / "VColorPicker-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

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
    """Sets the width of the color picker."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the component's location. Can combine by using a space separated string."""

    position = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the position for the component."""

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

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    mode = traitlets.Any(allow_none=True).tag(sync=True)
    """The current selected input type. Syncable with `v-model:mode`."""

    canvas_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Height of canvas."""

    dot_size = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the size of the selection dot on the canvas."""

    hide_canvas = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides canvas."""

    hide_sliders = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides sliders."""

    hide_inputs = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides inputs."""

    modes = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets available input types."""

    show_swatches = traitlets.Bool(allow_none=True).tag(sync=True)
    """Displays color swatches."""

    swatches_max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height of the swatches section."""

    divided = traitlets.Bool(allow_none=True).tag(sync=True)
    """Adds a divider between the header and controls."""

    landscape = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the picker into landscape mode."""

    hide_header = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the picker header."""

    hide_title = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the picker title."""

    hide_eye_dropper = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides eyedropper icon."""

    eye_dropper_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used to trigger EyeDropper API."""

    swatches = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the available color swatches to select from. 2D array of rows and columns, accepts any color format the picker does."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        title=None,
        border=False,
        model_value=None,
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        elevation=None,
        location=None,
        position=None,
        rounded=None,
        tile=False,
        tag="div",
        theme=None,
        color=None,
        disabled=False,
        bg_color=None,
        mode="rgba",
        canvas_height="150",
        dot_size="10",
        hide_canvas=False,
        hide_sliders=False,
        hide_inputs=False,
        modes="['rgb', 'rgba', 'hsl', 'hsla', 'hex', 'hexa']",
        show_swatches=False,
        swatches_max_height="150",
        divided=False,
        landscape=False,
        hide_header=True,
        hide_title=False,
        hide_eye_dropper=False,
        eye_dropper_icon="$eyeDropper",
        swatches=None,
        **kwargs
    ):
        """Initialize a ColorPicker widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.title = title
        self.border = border
        self.model_value = model_value
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.elevation = elevation
        self.location = location
        self.position = position
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.disabled = disabled
        self.bg_color = bg_color
        self.mode = mode
        self.canvas_height = canvas_height
        self.dot_size = dot_size
        self.hide_canvas = hide_canvas
        self.hide_sliders = hide_sliders
        self.hide_inputs = hide_inputs
        self.modes = modes
        self.show_swatches = show_swatches
        self.swatches_max_height = swatches_max_height
        self.divided = divided
        self.landscape = landscape
        self.hide_header = hide_header
        self.hide_title = hide_title
        self.hide_eye_dropper = hide_eye_dropper
        self.eye_dropper_icon = eye_dropper_icon
        self.swatches = swatches

        super().__init__(**kwargs)