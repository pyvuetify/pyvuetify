import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DataTableFooter(anywidget.AnyWidget):
    """The DataTableFooter component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        next_icon: Next icon.
        prev_icon: Previous icon.
        first_icon: First icon.
        last_icon: Last icon.
        items_per_page_text: Text for items-per-page dropdown.
        page_text: Label for page number.
        first_page_label: Label for first page.
        prev_page_label: Label for previous page.
        next_page_label: Label for next page.
        last_page_label: Label for last page.
        items_per_page_options: Array of options to show in the items-per-page dropdown.
        show_current_page: Show current page number between prev/next icons.

    Returns:
        A VDataTableFooter widget.

    seealso:
        `https://vuetifyjs.com/api/v-data-table-footer`__
    """

    _esm = bundled_path / "VDataTableFooter.js"
    _css = bundled_path / "VDataTableFooter-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    next_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Next icon."""

    prev_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Previous icon."""

    first_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """First icon."""

    last_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Last icon."""

    items_per_page_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text for items-per-page dropdown."""

    page_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for page number."""

    first_page_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for first page."""

    prev_page_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for previous page."""

    next_page_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for next page."""

    last_page_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for last page."""

    items_per_page_options = traitlets.Any(allow_none=True).tag(sync=True)
    """Array of options to show in the items-per-page dropdown."""

    show_current_page = traitlets.Bool(allow_none=True).tag(sync=True)
    """Show current page number between prev/next icons."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        color=None,
        next_icon="$next",
        prev_icon="$prev",
        first_icon="$first",
        last_icon="$last",
        items_per_page_text="$vuetify.dataFooter.itemsPerPageText",
        page_text="$vuetify.dataFooter.pageText",
        first_page_label="$vuetify.dataFooter.firstPage",
        prev_page_label="$vuetify.dataFooter.prevPage",
        next_page_label="$vuetify.dataFooter.nextPage",
        last_page_label="$vuetify.dataFooter.lastPage",
        items_per_page_options="[  {value: 10, title: '10'},  {value: 25, title: '25'},  {value: 50, title: '50'},  {value: 100, title: '100'},  {value: -1, title: '$vuetify.dataFooter.itemsPerPageAll'}]",
        show_current_page=False,
        **kwargs
    ):
        """Initialize a DataTableFooter widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.color = color
        self.next_icon = next_icon
        self.prev_icon = prev_icon
        self.first_icon = first_icon
        self.last_icon = last_icon
        self.items_per_page_text = items_per_page_text
        self.page_text = page_text
        self.first_page_label = first_page_label
        self.prev_page_label = prev_page_label
        self.next_page_label = next_page_label
        self.last_page_label = last_page_label
        self.items_per_page_options = items_per_page_options
        self.show_current_page = show_current_page

        super().__init__(**kwargs)