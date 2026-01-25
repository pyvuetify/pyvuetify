import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ListSubheader(anywidget.AnyWidget):
    """The ListSubheader component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        title: Specify a title text for the component.
        sticky: Sticks the header to the top of the table.
        tag: Specify a custom tag used on the root element.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        inset: Insets the subheader without additional spacing, aligning it flush with the surrounding content.

    Returns:
        A VListSubheader widget.

    seealso:
        `https://vuetifyjs.com/api/v-list-subheader`__
    """

    _esm = bundled_path / "VListSubheader.js"
    _css = bundled_path / "VListSubheader-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    sticky = traitlets.Bool(allow_none=True).tag(sync=True)
    """Sticks the header to the top of the table."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    inset = traitlets.Bool(allow_none=True).tag(sync=True)
    """Insets the subheader without additional spacing, aligning it flush with the surrounding content."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        title=None,
        sticky=False,
        tag="div",
        color=None,
        inset=False,
        **kwargs
    ):
        """Initialize a ListSubheader widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.title = title
        self.sticky = sticky
        self.tag = tag
        self.color = color
        self.inset = inset

        super().__init__(**kwargs)