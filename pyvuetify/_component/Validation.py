import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Validation(anywidget.AnyWidget):
    """The Validation component.

    

    Args:
        children: The child nodes of the DOM element.
        name: Sets the component's name attribute.
        error: Puts the input in a manual error state.
        label: Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.
        disabled: Removes the ability to click or target the component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        readonly: Puts input in readonly state.
        error_messages: Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation.
        max_errors: Control the maximum number of shown errors from validation.
        rules: Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`.
        validate_on: Change what type of event triggers validation to run.
        validation_value: The value used when applying validation rules.
        focused: Forces a focused state styling on the component.

    Returns:
        A VValidation widget.

    seealso:
        `https://vuetifyjs.com/api/v-validation`__
    """

    _esm = bundled_path / "VValidation.js"
    _css = bundled_path / "VValidation-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the component's name attribute."""

    error = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the input in a manual error state."""

    label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the text of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    readonly = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts input in readonly state."""

    error_messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation."""

    max_errors = traitlets.Any(allow_none=True).tag(sync=True)
    """Control the maximum number of shown errors from validation."""

    rules = traitlets.Any(allow_none=True).tag(sync=True)
    """Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`."""

    validate_on = traitlets.Any(allow_none=True).tag(sync=True)
    """Change what type of event triggers validation to run."""

    validation_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The value used when applying validation rules."""

    focused = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces a focused state styling on the component."""

    def __init__(
        self,
        children=None,
        name=None,
        error=False,
        label=None,
        disabled=None,
        model_value=None,
        readonly=None,
        error_messages="[]",
        max_errors="1",
        rules="[]",
        validate_on=None,
        validation_value=None,
        focused=False,
        **kwargs
    ):
        """Initialize a Validation widget."""
        self.children = children
        self.name = name
        self.error = error
        self.label = label
        self.disabled = disabled
        self.model_value = model_value
        self.readonly = readonly
        self.error_messages = error_messages
        self.max_errors = max_errors
        self.rules = rules
        self.validate_on = validate_on
        self.validation_value = validation_value
        self.focused = focused

        super().__init__(**kwargs)