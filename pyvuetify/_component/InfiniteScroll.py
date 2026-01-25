import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class InfiniteScroll(anywidget.AnyWidget):
    """The InfiniteScroll component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        tag: Specify a custom tag used on the root element.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        mode: Specifies if content should load automatically when scrolling (**intersect**) or manually (**manual**).
        direction: Specifies if scroller is **vertical** or **horizontal**.
        side: Specifies the side where new content should appear. Either the **start**, **end**, or **both** sides.
        margin: Value sent to the intersection observer. Will make the observer trigger earlier, by the margin (px) value supplied.
        load_more_text: Text shown in default load more button, when in manual mode.
        empty_text: Text shown when there is no more content to load.

    Returns:
        A VInfiniteScroll widget.

    seealso:
        `https://vuetifyjs.com/api/v-infinite-scroll`__
    """

    _esm = bundled_path / "VInfiniteScroll.js"
    _css = bundled_path / "VInfiniteScroll-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    mode = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies if content should load automatically when scrolling (**intersect**) or manually (**manual**)."""

    direction = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies if scroller is **vertical** or **horizontal**."""

    side = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the side where new content should appear. Either the **start**, **end**, or **both** sides."""

    margin = traitlets.Any(allow_none=True).tag(sync=True)
    """Value sent to the intersection observer. Will make the observer trigger earlier, by the margin (px) value supplied."""

    load_more_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text shown in default load more button, when in manual mode."""

    empty_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text shown when there is no more content to load."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        tag="div",
        color=None,
        mode="intersect",
        direction="vertical",
        side="end",
        margin=None,
        load_more_text="$vuetify.infiniteScroll.loadMore",
        empty_text="$vuetify.infiniteScroll.empty",
        **kwargs
    ):
        """Initialize a InfiniteScroll widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.tag = tag
        self.color = color
        self.mode = mode
        self.direction = direction
        self.side = side
        self.margin = margin
        self.load_more_text = load_more_text
        self.empty_text = empty_text

        super().__init__(**kwargs)