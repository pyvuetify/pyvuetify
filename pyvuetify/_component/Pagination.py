import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Pagination(anywidget.AnyWidget):
    """The Pagination component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        length: The number of pages.
        tag: Specify a custom tag used on the root element.
        disabled: Removes the ability to click or target the component.
        size: Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**.
        aria_label: Label for the root element.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        start: Specify the starting page.
        color: Applies specified color to the selected page button - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        variant: Applies a distinct style to the component.
        active_color: The applied color when the component is in an active state.
        next_icon: The icon to use for the next button.
        prev_icon: The icon to use for the prev button.
        first_icon: The icon to use for the first button.
        last_icon: The icon to use for the last button.
        total_visible: Specify the total visible pagination numbers.
        page_aria_label: Label for each page button.
        current_page_aria_label: Label for the currently selected page.
        first_aria_label: Label for the go to first button.
        previous_aria_label: Label for the previous button.
        next_aria_label: Label for the next button.
        last_aria_label: Label for the go to last button.
        ellipsis: Text to show between page buttons when truncating the list.
        show_first_last_page: Show buttons for going to first and last page.

    Returns:
        A VPagination widget.

    seealso:
        `https://vuetifyjs.com/api/v-pagination`__
    """

    _esm = bundled_path / "VPagination.js"
    _css = bundled_path / "VPagination-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    length = traitlets.Any(allow_none=True).tag(sync=True)
    """The number of pages."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: **x-small**, **small**, **default**, **large**, and **x-large**."""

    aria_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for the root element."""

    model_value = traitlets.Float(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    start = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify the starting page."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the selected page button - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    active_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The applied color when the component is in an active state."""

    next_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The icon to use for the next button."""

    prev_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The icon to use for the prev button."""

    first_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The icon to use for the first button."""

    last_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """The icon to use for the last button."""

    total_visible = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify the total visible pagination numbers."""

    page_aria_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for each page button."""

    current_page_aria_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for the currently selected page."""

    first_aria_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for the go to first button."""

    previous_aria_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for the previous button."""

    next_aria_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for the next button."""

    last_aria_label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Label for the go to last button."""

    ellipsis = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text to show between page buttons when truncating the list."""

    show_first_last_page = traitlets.Bool(allow_none=True).tag(sync=True)
    """Show buttons for going to first and last page."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        length="1",
        tag="nav",
        disabled=False,
        size="default",
        aria_label="$vuetify.pagination.ariaLabel.root",
        model_value=None,
        start="1",
        color=None,
        density="default",
        border=False,
        elevation=None,
        rounded=None,
        tile=False,
        theme=None,
        variant="text",
        active_color=None,
        next_icon="$next",
        prev_icon="$prev",
        first_icon="$first",
        last_icon="$last",
        total_visible=None,
        page_aria_label="$vuetify.pagination.ariaLabel.page",
        current_page_aria_label="$vuetify.pagination.ariaLabel.currentPage",
        first_aria_label="$vuetify.pagination.ariaLabel.first",
        previous_aria_label="$vuetify.pagination.ariaLabel.previous",
        next_aria_label="$vuetify.pagination.ariaLabel.next",
        last_aria_label="$vuetify.pagination.ariaLabel.last",
        ellipsis="...",
        show_first_last_page=False,
        **kwargs
    ):
        """Initialize a Pagination widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.length = length
        self.tag = tag
        self.disabled = disabled
        self.size = size
        self.aria_label = aria_label
        self.model_value = model_value
        self.start = start
        self.color = color
        self.density = density
        self.border = border
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.variant = variant
        self.active_color = active_color
        self.next_icon = next_icon
        self.prev_icon = prev_icon
        self.first_icon = first_icon
        self.last_icon = last_icon
        self.total_visible = total_visible
        self.page_aria_label = page_aria_label
        self.current_page_aria_label = current_page_aria_label
        self.first_aria_label = first_aria_label
        self.previous_aria_label = previous_aria_label
        self.next_aria_label = next_aria_label
        self.last_aria_label = last_aria_label
        self.ellipsis = ellipsis
        self.show_first_last_page = show_first_last_page

        super().__init__(**kwargs)