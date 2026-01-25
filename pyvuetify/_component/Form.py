import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Form(anywidget.AnyWidget):
    """The Form component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        model_value: The value representing the validity of the form. If the value is `null` then no validation has taken place yet, or the form has been reset. Otherwise the value will be a `boolean` that indicates if validation has passed or not.
        disabled: Puts all children inputs into a disabled state.
        readonly: Puts all children inputs into a readonly state.
        validate_on: Changes the events in which validation occurs.
        fast_fail: Stop validation as soon as any rules fail.

    Returns:
        A VForm widget.

    seealso:
        `https://vuetifyjs.com/api/v-form`__
    """

    _esm = bundled_path / "VForm.js"
    _css = bundled_path / "VForm-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    model_value = traitlets.Bool(allow_none=True).tag(sync=True)
    """The value representing the validity of the form. If the value is `null` then no validation has taken place yet, or the form has been reset. Otherwise the value will be a `boolean` that indicates if validation has passed or not."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts all children inputs into a disabled state."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts all children inputs into a readonly state."""

    validate_on = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the events in which validation occurs."""

    fast_fail = traitlets.Bool(allow_none=True).tag(sync=True)
    """Stop validation as soon as any rules fail."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        model_value=None,
        disabled=False,
        readonly=False,
        validate_on="input",
        fast_fail=False,
        **kwargs
    ):
        """Initialize a Form widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.model_value = model_value
        self.disabled = disabled
        self.readonly = readonly
        self.validate_on = validate_on
        self.fast_fail = fast_fail

        super().__init__(**kwargs)