import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class LayoutItem(anywidget.AnyWidget):
    """The LayoutItem component.

    

    Args:
        children: The child nodes of the DOM element.
        name: Assign a specific name for layout registration.
        size: Sets the height and width of the component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        absolute: Applies **position: absolute** to the component.
        order: Adjust the order of the component in relation to its registration order.
        position: The position of the item.

    Returns:
        A VLayoutItem widget.

    seealso:
        `https://vuetifyjs.com/api/v-layout-item`__
    """

    _esm = bundled_path / "VLayoutItem.js"
    _css = bundled_path / "VLayoutItem-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Assign a specific name for layout registration."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height and width of the component."""

    model_value = traitlets.Bool(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    absolute = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies **position: absolute** to the component."""

    order = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjust the order of the component in relation to its registration order."""

    position = traitlets.Any(allow_none=True).tag(sync=True)
    """The position of the item."""

    def __init__(
        self,
        children=None,
        name=None,
        size="300",
        model_value=False,
        absolute=False,
        order="0",
        position=None,
        **kwargs
    ):
        """Initialize a LayoutItem widget."""
        self.children = children
        self.name = name
        self.size = size
        self.model_value = model_value
        self.absolute = absolute
        self.order = order
        self.position = position

        super().__init__(**kwargs)