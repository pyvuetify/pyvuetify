import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class TimePicker(anywidget.AnyWidget):
    """The TimePicker component.

    

    Args:
        children: The child nodes of the DOM element.
        title: Specify a title text for the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        density: Adjusts the vertical height used by the component.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Width of the picker.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        location: Specifies the component's location. Can combine by using a space separated string.
        position: Sets the position for the component.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        variant: Applies a distinct style to the component.
        disabled: Removes the ability to click or target the component.
        max: Maximum allowed time.
        min: Minimum allowed time.
        readonly: Puts picker in readonly state.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        divided: Adds a divider between the header and controls.
        hide_header: Hide the picker header.
        hide_title: Hide the picker title.
        view_mode: The current view mode of the picker.`
        scrollable: Allows changing hour/minute with mouse scroll.
        format: Defines the format of a time displayed in picker. Available options are `ampm` and `24hr`.
        period: Sets period for 12hr format.
        use_seconds: Toggles the use of seconds in picker.
        allowed_hours: Restricts which hours can be selected.
        allowed_minutes: Restricts which minutes can be selected.
        allowed_seconds: Restricts which seconds can be selected.

    Returns:
        A VTimePicker widget.

    seealso:
        `https://vuetifyjs.com/api/v-time-picker`__
    """

    _esm = bundled_path / "VTimePicker.js"
    _css = bundled_path / "VTimePicker-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

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
    """Width of the picker."""

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

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    max = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Maximum allowed time."""

    min = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Minimum allowed time."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts picker in readonly state."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    divided = traitlets.Bool(allow_none=True).tag(sync=True)
    """Adds a divider between the header and controls."""

    hide_header = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the picker header."""

    hide_title = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide the picker title."""

    view_mode = traitlets.Any(allow_none=True).tag(sync=True)
    """The current view mode of the picker.`"""

    scrollable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows changing hour/minute with mouse scroll."""

    format = traitlets.Any(allow_none=True).tag(sync=True)
    """Defines the format of a time displayed in picker. Available options are `ampm` and `24hr`."""

    period = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets period for 12hr format."""

    use_seconds = traitlets.Bool(allow_none=True).tag(sync=True)
    """Toggles the use of seconds in picker."""

    allowed_hours = traitlets.Any(allow_none=True).tag(sync=True)
    """Restricts which hours can be selected."""

    allowed_minutes = traitlets.Any(allow_none=True).tag(sync=True)
    """Restricts which minutes can be selected."""

    allowed_seconds = traitlets.Any(allow_none=True).tag(sync=True)
    """Restricts which seconds can be selected."""

    def __init__(
        self,
        children=None,
        title="$vuetify.timePicker.title",
        border=False,
        model_value=None,
        density="default",
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
        variant="dial",
        disabled=False,
        max=None,
        min=None,
        readonly=False,
        bg_color=None,
        divided=False,
        hide_header=False,
        hide_title=False,
        view_mode="hour",
        scrollable=False,
        format="ampm",
        period="am",
        use_seconds=False,
        allowed_hours=None,
        allowed_minutes=None,
        allowed_seconds=None,
        **kwargs
    ):
        """Initialize a TimePicker widget."""
        self.children = children
        self.title = title
        self.border = border
        self.model_value = model_value
        self.density = density
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
        self.variant = variant
        self.disabled = disabled
        self.max = max
        self.min = min
        self.readonly = readonly
        self.bg_color = bg_color
        self.divided = divided
        self.hide_header = hide_header
        self.hide_title = hide_title
        self.view_mode = view_mode
        self.scrollable = scrollable
        self.format = format
        self.period = period
        self.use_seconds = use_seconds
        self.allowed_hours = allowed_hours
        self.allowed_minutes = allowed_minutes
        self.allowed_seconds = allowed_seconds

        super().__init__(**kwargs)