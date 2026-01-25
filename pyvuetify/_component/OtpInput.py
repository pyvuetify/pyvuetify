import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class OtpInput(anywidget.AnyWidget):
    """The OtpInput component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        length: The OTP field's length.
        type: Supported types: `text`, `password`, `number`.
        error: Puts the input in a manual error state.
        label: Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.
        disabled: Removes the ability to click or target the input.
        height: Sets the height for the component.
        placeholder: Sets the input’s placeholder text.
        width: Sets the width for the component.
        autofocus: Automatically focuses the first input on page load
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        theme: Specify a theme for this component and all of its children.
        variant: Applies a distinct style to the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        base_color: Sets the color of the input when it is not focused.
        divider: Specifies the dividing character between items.
        loading: Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color.
        focused: Forces a focused state styling on the component.
        focus_all: Puts all inputs into a focus state when any are focused

    Returns:
        A VOtpInput widget.

    seealso:
        `https://vuetifyjs.com/api/v-otp-input`__
    """

    _esm = bundled_path / "VOtpInput.js"
    _css = bundled_path / "VOtpInput-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    length = traitlets.Any(allow_none=True).tag(sync=True)
    """The OTP field's length."""

    type = traitlets.Any(allow_none=True).tag(sync=True)
    """Supported types: `text`, `password`, `number`."""

    error = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the input in a manual error state."""

    label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the input."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    placeholder = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the input’s placeholder text."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    autofocus = traitlets.Bool(allow_none=True).tag(sync=True)
    """Automatically focuses the first input on page load"""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

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

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of the input when it is not focused."""

    divider = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specifies the dividing character between items."""

    loading = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color."""

    focused = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces a focused state styling on the component."""

    focus_all = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts all inputs into a focus state when any are focused"""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        length="6",
        type="number",
        error=False,
        label="$vuetify.input.otp",
        disabled=None,
        height=None,
        placeholder=None,
        width=None,
        autofocus=False,
        model_value=None,
        color=None,
        rounded=None,
        theme=None,
        variant="outlined",
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        bg_color=None,
        base_color=None,
        divider=None,
        loading=False,
        focused=False,
        focus_all=False,
        **kwargs
    ):
        """Initialize a OtpInput widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.length = length
        self.type = type
        self.error = error
        self.label = label
        self.disabled = disabled
        self.height = height
        self.placeholder = placeholder
        self.width = width
        self.autofocus = autofocus
        self.model_value = model_value
        self.color = color
        self.rounded = rounded
        self.theme = theme
        self.variant = variant
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.bg_color = bg_color
        self.base_color = base_color
        self.divider = divider
        self.loading = loading
        self.focused = focused
        self.focus_all = focus_all

        super().__init__(**kwargs)