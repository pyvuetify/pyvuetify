import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class BreadcrumbsDivider(anywidget.AnyWidget):
    """The BreadcrumbsDivider component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        divider: Specifies the dividing character between items.

    Returns:
        A VBreadcrumbsDivider widget.

    seealso:
        `https://vuetifyjs.com/api/v-breadcrumbs-divider`__
    """

    _esm = bundled_path / "VBreadcrumbsDivider.js"
    _css = bundled_path / "VBreadcrumbsDivider-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    divider = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the dividing character between items."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        divider=None,
        **kwargs
    ):
        """Initialize a BreadcrumbsDivider widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.divider = divider

        super().__init__(**kwargs)