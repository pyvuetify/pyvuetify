import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Table(anywidget.AnyWidget):
    """The Table component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        density: Adjusts the vertical height used by the component.
        height: Use the height prop to set the height of the table.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        striped: Applies a background to either **even** or **odd** rows.
        hover: Will add a hover effect to a table's row when the mouse is over it.
        fixed_header: Use the fixed-header prop together with the height prop to fix the header to the top of the table.
        fixed_footer: Use the fixed-footer prop together with the height prop to fix the footer to the bottom of the table.

    Returns:
        A VTable widget.

    seealso:
        `https://vuetifyjs.com/api/v-table`__
    """

    _esm = bundled_path / "VTable.js"
    _css = bundled_path / "VTable-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Use the height prop to set the height of the table."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    striped = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a background to either **even** or **odd** rows."""

    hover = traitlets.Bool(allow_none=True).tag(sync=True)
    """Will add a hover effect to a table's row when the mouse is over it."""

    fixed_header = traitlets.Bool(allow_none=True).tag(sync=True)
    """Use the fixed-header prop together with the height prop to fix the header to the top of the table."""

    fixed_footer = traitlets.Bool(allow_none=True).tag(sync=True)
    """Use the fixed-footer prop together with the height prop to fix the footer to the bottom of the table."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        density="default",
        height=None,
        tag="div",
        theme=None,
        striped=None,
        hover=False,
        fixed_header=False,
        fixed_footer=False,
        **kwargs
    ):
        """Initialize a Table widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.density = density
        self.height = height
        self.tag = tag
        self.theme = theme
        self.striped = striped
        self.hover = hover
        self.fixed_header = fixed_header
        self.fixed_footer = fixed_footer

        super().__init__(**kwargs)