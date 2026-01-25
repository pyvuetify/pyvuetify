import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ConfirmEdit(anywidget.AnyWidget):
    """The ConfirmEdit component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        disabled: Control the disabled state of action buttons. If not provided, internal logic will be used to determine the disabled state.
        model_value: Represents the committed v-model value
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        cancel_text: Text for the cancel button
        ok_text: Text for the ok button
        hide_actions: Prevent showing the default actions buttons. Does not affect `<component :is="actions" />`

    Returns:
        A VConfirmEdit widget.

    seealso:
        `https://vuetifyjs.com/api/v-confirm-edit`__
    """

    _esm = bundled_path / "VConfirmEdit.js"
    _css = bundled_path / "VConfirmEdit-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    disabled = traitlets.Any(allow_none=True).tag(sync=True)
    """Control the disabled state of action buttons. If not provided, internal logic will be used to determine the disabled state."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """Represents the committed v-model value"""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    cancel_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text for the cancel button"""

    ok_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text for the ok button"""

    hide_actions = traitlets.Bool(allow_none=True).tag(sync=True)
    """Prevent showing the default actions buttons. Does not affect `<component :is="actions" />`"""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        disabled=None,
        model_value=None,
        color=None,
        cancel_text="$vuetify.confirmEdit.cancel",
        ok_text="$vuetify.confirmEdit.ok",
        hide_actions=False,
        **kwargs
    ):
        """Initialize a ConfirmEdit widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.disabled = disabled
        self.model_value = model_value
        self.color = color
        self.cancel_text = cancel_text
        self.ok_text = ok_text
        self.hide_actions = hide_actions

        super().__init__(**kwargs)