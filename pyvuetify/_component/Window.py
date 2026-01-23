import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Window(anywidget.AnyWidget):
    """The Window component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        reverse: Reverse the normal transition direction.
        disabled: Removes the ability to click or target the component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        theme: Specify a theme for this component and all of its children.
        selected_class: Configure the active CSS class applied when an item is selected.
        mandatory: Forces at least one item to always be selected (if available).
        direction: The transition direction when changing windows.
        continuous: If `true`, window will "wrap around" from the last item to the first, and from the first item to the last.
        next_icon: Icon used for the "next" button if `show-arrows` is `true`.
        prev_icon: Icon used for the "prev" button if `show-arrows` is `true`.
        show_arrows: Display the "next" and "prev" buttons.
        touch: Provide a custom **left** and **right** function when swiped left or right.
        crossfade: Enables crossfade transition.
        transition_duration: Overrides transition duration. Does not work in firefox, safari <18, or with `prefers-reduced-motion: reduce`.
        vertical_arrows: MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VWindow.json))

    Returns:
        A VWindow widget.

    seealso:
        `https://vuetifyjs.com/api/v-window`__
    """

    _esm = bundled_path / "VWindow.js"
    _css = bundled_path / "VWindow-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    reverse = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reverse the normal transition direction."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    mandatory = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces at least one item to always be selected (if available)."""

    direction = traitlets.Any(allow_none=True).tag(sync=True)
    """The transition direction when changing windows."""

    continuous = traitlets.Bool(allow_none=True).tag(sync=True)
    """If `true`, window will "wrap around" from the last item to the first, and from the first item to the last."""

    next_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used for the "next" button if `show-arrows` is `true`."""

    prev_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon used for the "prev" button if `show-arrows` is `true`."""

    show_arrows = traitlets.Any(allow_none=True).tag(sync=True)
    """Display the "next" and "prev" buttons."""

    touch = traitlets.Any(allow_none=True).tag(sync=True)
    """Provide a custom **left** and **right** function when swiped left or right."""

    crossfade = traitlets.Bool(allow_none=True).tag(sync=True)
    """Enables crossfade transition."""

    transition_duration = traitlets.Float(allow_none=True).tag(sync=True)
    """Overrides transition duration. Does not work in firefox, safari <18, or with `prefers-reduced-motion: reduce`."""

    vertical_arrows = traitlets.Any(allow_none=True).tag(sync=True)
    """MISSING DESCRIPTION ([edit in github](https://github.com/vuetifyjs/vuetify/tree//packages/api-generator/src/locale/en/VWindow.json))"""

    def __init__(
        self,
        children=None,
        tag="div",
        reverse=False,
        disabled=False,
        model_value=None,
        theme=None,
        selected_class="v-window-item--active",
        mandatory="force",
        direction="horizontal",
        continuous=False,
        next_icon="$next",
        prev_icon="$prev",
        show_arrows=False,
        touch=None,
        crossfade=False,
        transition_duration=None,
        vertical_arrows=False,
        **kwargs
    ):
        """Initialize a Window widget."""
        self.children = children
        self.tag = tag
        self.reverse = reverse
        self.disabled = disabled
        self.model_value = model_value
        self.theme = theme
        self.selected_class = selected_class
        self.mandatory = mandatory
        self.direction = direction
        self.continuous = continuous
        self.next_icon = next_icon
        self.prev_icon = prev_icon
        self.show_arrows = show_arrows
        self.touch = touch
        self.crossfade = crossfade
        self.transition_duration = transition_duration
        self.vertical_arrows = vertical_arrows

        super().__init__(**kwargs)