import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class EmptyState(anywidget.AnyWidget):
    """The EmptyState component.

    

    Args:
        children: The child nodes of the DOM element.
        title: Specify a title text for the component.
        text: Specify content text for the component.
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        size: The size used to control the dimensions of the media element inside the component. Can be specified as a number or a string (e.g., '50%', '100px').
        href: The URL the action button links to.
        to: The URL the action button links to.
        bg_color: Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        image: Apply a specific image using [v-img](/components/images/).
        headline: A large headline often used for 404 pages.
        action_text: The text used for the action button.
        justify: Control the justification of the text.
        text_width: Sets the width of the text container.

    Returns:
        A VEmptyState widget.

    seealso:
        `https://vuetifyjs.com/api/v-empty-state`__
    """

    _esm = bundled_path / "VEmptyState.js"
    _css = bundled_path / "VEmptyState-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify content text for the component."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

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

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """The size used to control the dimensions of the media element inside the component. Can be specified as a number or a string (e.g., '50%', '100px')."""

    href = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The URL the action button links to."""

    to = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The URL the action button links to."""

    bg_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control's background. Used on components that also support the **color** prop. - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    image = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Apply a specific image using [v-img](/components/images/)."""

    headline = traitlets.Unicode(allow_none=True).tag(sync=True)
    """A large headline often used for 404 pages."""

    action_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The text used for the action button."""

    justify = traitlets.Any(allow_none=True).tag(sync=True)
    """Control the justification of the text."""

    text_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width of the text container."""

    def __init__(
        self,
        children=None,
        title=None,
        text=None,
        icon=None,
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        theme=None,
        color=None,
        size=None,
        href=None,
        to=None,
        bg_color=None,
        image=None,
        headline=None,
        action_text=None,
        justify="center",
        text_width="500",
        **kwargs
    ):
        """Initialize a EmptyState widget."""
        self.children = children
        self.title = title
        self.text = text
        self.icon = icon
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.theme = theme
        self.color = color
        self.size = size
        self.href = href
        self.to = to
        self.bg_color = bg_color
        self.image = image
        self.headline = headline
        self.action_text = action_text
        self.justify = justify
        self.text_width = text_width

        super().__init__(**kwargs)