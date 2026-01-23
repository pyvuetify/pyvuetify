import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class BreadcrumbsDivider(anywidget.AnyWidget):
    """The BreadcrumbsDivider component.

    

    Args:
        children: The child nodes of the DOM element.
        divider: Specifies the dividing character between items.

    Returns:
        A VBreadcrumbsDivider widget.

    seealso:
        `https://vuetifyjs.com/api/v-breadcrumbs-divider`__
    """

    _esm = bundled_path / "VBreadcrumbsDivider.js"
    _css = bundled_path / "VBreadcrumbsDivider-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    divider = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the dividing character between items."""

    def __init__(
        self,
        children=None,
        divider=None,
        **kwargs
    ):
        """Initialize a BreadcrumbsDivider widget."""
        self.children = children
        self.divider = divider

        super().__init__(**kwargs)