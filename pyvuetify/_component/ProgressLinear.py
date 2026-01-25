import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ProgressLinear(anywidget.AnyWidget):
    """The ProgressLinear component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        reverse: Displays reversed progress (right to left in LTR mode and left to right in RTL).
        height: Sets the height for the component.
        location: Specifies the component's location. Can combine by using a space separated string.
        absolute: Applies position: absolute to the component.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        indeterminate: Constantly animates, use when loading progress is unknown.
        max: Sets the maximum value the progress can reach.
        active: Reduce the height to 0, hiding component.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        opacity: Set the opacity of the progress bar.
        stream: An alternative style for portraying loading that works in tandem with **buffer-value**.
        bg_opacity: Background opacity, if null it defaults to 0.3 if background color is not specified or 1 otherwise.
        buffer_value: The percentage value for the buffer.
        buffer_color: Sets the color of the buffer bar.
        buffer_opacity: Set the opacity of the buffer bar.
        clickable: Clicking on the progress track will automatically set the value.
        striped: Adds a stripe background to the filled portion of the progress component.
        rounded_bar: Applies a border radius to the progress bar.
        chunk_count: Specifies amount of chunks to divide the bar into.
        chunk_width: Defines chunk absolute size. Useful when chunk is narrow.
        chunk_gap: Defines size of the gap between chunks.

    Returns:
        A VProgressLinear widget.

    seealso:
        `https://vuetifyjs.com/api/v-progress-linear`__
    """

    _esm = bundled_path / "VProgressLinear.js"
    _css = bundled_path / "VProgressLinear-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    reverse = traitlets.Bool(allow_none=True).tag(sync=True)
    """Displays reversed progress (right to left in LTR mode and left to right in RTL)."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the component's location. Can combine by using a space separated string."""

    absolute = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies position: absolute to the component."""

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

    indeterminate = traitlets.Bool(allow_none=True).tag(sync=True)
    """Constantly animates, use when loading progress is unknown."""

    max = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum value the progress can reach."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reduce the height to 0, hiding component."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    opacity = traitlets.Any(allow_none=True).tag(sync=True)
    """Set the opacity of the progress bar."""

    stream = traitlets.Bool(allow_none=True).tag(sync=True)
    """An alternative style for portraying loading that works in tandem with **buffer-value**."""

    bg_opacity = traitlets.Any(allow_none=True).tag(sync=True)
    """Background opacity, if null it defaults to 0.3 if background color is not specified or 1 otherwise."""

    buffer_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The percentage value for the buffer."""

    buffer_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of the buffer bar."""

    buffer_opacity = traitlets.Any(allow_none=True).tag(sync=True)
    """Set the opacity of the buffer bar."""

    clickable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Clicking on the progress track will automatically set the value."""

    striped = traitlets.Bool(allow_none=True).tag(sync=True)
    """Adds a stripe background to the filled portion of the progress component."""

    rounded_bar = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies a border radius to the progress bar."""

    chunk_count = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies amount of chunks to divide the bar into."""

    chunk_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Defines chunk absolute size. Useful when chunk is narrow."""

    chunk_gap = traitlets.Any(allow_none=True).tag(sync=True)
    """Defines size of the gap between chunks."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        model_value="0",
        reverse=False,
        height="4",
        location="top",
        absolute=False,
        rounded=None,
        tile=False,
        tag="div",
        theme=None,
        color=None,
        indeterminate=False,
        max="100",
        active=True,
        bg_color=None,
        opacity=None,
        stream=False,
        bg_opacity=None,
        buffer_value="0",
        buffer_color=None,
        buffer_opacity=None,
        clickable=False,
        striped=False,
        rounded_bar=False,
        chunk_count=None,
        chunk_width=None,
        chunk_gap="4",
        **kwargs
    ):
        """Initialize a ProgressLinear widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.model_value = model_value
        self.reverse = reverse
        self.height = height
        self.location = location
        self.absolute = absolute
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.indeterminate = indeterminate
        self.max = max
        self.active = active
        self.bg_color = bg_color
        self.opacity = opacity
        self.stream = stream
        self.bg_opacity = bg_opacity
        self.buffer_value = buffer_value
        self.buffer_color = buffer_color
        self.buffer_opacity = buffer_opacity
        self.clickable = clickable
        self.striped = striped
        self.rounded_bar = rounded_bar
        self.chunk_count = chunk_count
        self.chunk_width = chunk_width
        self.chunk_gap = chunk_gap

        super().__init__(**kwargs)