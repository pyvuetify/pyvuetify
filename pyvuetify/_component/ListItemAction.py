import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ListItemAction(anywidget.AnyWidget):
    """The ListItemAction component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        tag: Specify a custom tag used on the root element.
        start: Applies margin at the end of the component.
        end: Applies margin at the start of the component.

    Returns:
        A VListItemAction widget.

    seealso:
        `https://vuetifyjs.com/api/v-list-item-action`__
    """

    _esm = bundled_path / "VListItemAction.js"
    _css = bundled_path / "VListItemAction-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    start = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies margin at the end of the component."""

    end = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies margin at the start of the component."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        tag="div",
        start=False,
        end=False,
        **kwargs
    ):
        """Initialize a ListItemAction widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.tag = tag
        self.start = start
        self.end = end

        super().__init__(**kwargs)