import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Item(anywidget.AnyWidget):
    """The Item component.

    

    Args:
        children: The child nodes of the DOM element.
        disabled: Removes the ability to click or target the component.
        value: The value used when the component is selected in a group. If not provided, a unique ID will be used.
        selected_class: Configure the active CSS class applied when an item is selected.

    Returns:
        A VItem widget.

    seealso:
        `https://vuetifyjs.com/api/v-item`__
    """

    _esm = bundled_path / "VItem.js"
    _css = bundled_path / "VItem-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """The value used when the component is selected in a group. If not provided, a unique ID will be used."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the active CSS class applied when an item is selected."""

    def __init__(
        self,
        children=None,
        disabled=False,
        value=None,
        selected_class=None,
        **kwargs
    ):
        """Initialize a Item widget."""
        self.children = children
        self.disabled = disabled
        self.value = value
        self.selected_class = selected_class

        super().__init__(**kwargs)