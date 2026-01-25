import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class StepperWindow(anywidget.AnyWidget):
    """The StepperWindow component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        reverse: Reverse the normal transition direction.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        disabled: Removes the ability to click or target the component.
        selected_class: Configure the active CSS class applied when an item is selected.
        direction: The transition direction when changing windows.
        crossfade: Enables crossfade transition.
        transition_duration: Overrides transition duration. Does not work in firefox, safari <18, or with `prefers-reduced-motion: reduce`.
        vertical_arrows: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VWindow.json))

    Returns:
        A VStepperWindow widget.

    seealso:
        `https://vuetifyjs.com/api/v-stepper-window`__
    """

    _esm = bundled_path / "VStepperWindow.js"
    _css = bundled_path / "VStepperWindow-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    reverse = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reverse the normal transition direction."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    direction = traitlets.Any(allow_none=True).tag(sync=True)
    """The transition direction when changing windows."""

    crossfade = traitlets.Bool(allow_none=True).tag(sync=True)
    """Enables crossfade transition."""

    transition_duration = traitlets.Float(allow_none=True).tag(sync=True)
    """Overrides transition duration. Does not work in firefox, safari <18, or with `prefers-reduced-motion: reduce`."""

    vertical_arrows = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VWindow.json))"""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        model_value=None,
        reverse=False,
        tag="div",
        theme=None,
        disabled=False,
        selected_class="v-window-item--active",
        direction="horizontal",
        crossfade=False,
        transition_duration=None,
        vertical_arrows=False,
        **kwargs
    ):
        """Initialize a StepperWindow widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.model_value = model_value
        self.reverse = reverse
        self.tag = tag
        self.theme = theme
        self.disabled = disabled
        self.selected_class = selected_class
        self.direction = direction
        self.crossfade = crossfade
        self.transition_duration = transition_duration
        self.vertical_arrows = vertical_arrows

        super().__init__(**kwargs)