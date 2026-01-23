import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class WindowItem(anywidget.AnyWidget):
    """The WindowItem component.

    

    Args:
        children: The child nodes of the DOM element.
        disabled: Prevents the item from becoming active when using the "next" and "prev" buttons or the `toggle` method.
        value: The value used when the component is selected in a group. If not provided, a unique ID will be used.
        selected_class: Configure the active CSS class applied when an item is selected.
        eager: Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
        transition: The transition used when the component progressing through items. Can be one of the [built in](/styles/transitions/) or custom transition.
        reverse_transition: Sets the reverse transition.

    Returns:
        A VWindowItem widget.

    seealso:
        `https://vuetifyjs.com/api/v-window-item`__
    """

    _esm = bundled_path / "VWindowItem.js"
    _css = bundled_path / "VWindowItem-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Prevents the item from becoming active when using the "next" and "prev" buttons or the `toggle` method."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """The value used when the component is selected in a group. If not provided, a unique ID will be used."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    eager = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """The transition used when the component progressing through items. Can be one of the [built in](/styles/transitions/) or custom transition."""

    reverse_transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the reverse transition."""

    def __init__(
        self,
        children=None,
        disabled=False,
        value=None,
        selected_class=None,
        eager=False,
        transition=None,
        reverse_transition=None,
        **kwargs
    ):
        """Initialize a WindowItem widget."""
        self.children = children
        self.disabled = disabled
        self.value = value
        self.selected_class = selected_class
        self.eager = eager
        self.transition = transition
        self.reverse_transition = reverse_transition

        super().__init__(**kwargs)