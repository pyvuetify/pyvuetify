import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DatePickerHeader(anywidget.AnyWidget):
    """The DatePickerHeader component.

    

    Args:
        children: The child nodes of the DOM element.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        header: Sets the header content.
        transition: Sets the transition when the header changes.

    Returns:
        A VDatePickerHeader widget.

    seealso:
        `https://vuetifyjs.com/api/v-date-picker-header`__
    """

    _esm = bundled_path / "VDatePickerHeader.js"
    _css = bundled_path / "VDatePickerHeader-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot."""

    header = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the header content."""

    transition = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the transition when the header changes."""

    def __init__(
        self,
        children=None,
        color=None,
        append_icon=None,
        header=None,
        transition=None,
        **kwargs
    ):
        """Initialize a DatePickerHeader widget."""
        self.children = children
        self.color = color
        self.append_icon = append_icon
        self.header = header
        self.transition = transition

        super().__init__(**kwargs)