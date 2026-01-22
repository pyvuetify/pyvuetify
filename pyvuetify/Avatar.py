import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parent / "static"


class Avatar(anywidget.AnyWidget):
    """The Avatar component.

    The v-avatar component is used to display circular user profile pictures. When used with the v-list component, avatars minimum width will be respected even if they contain smaller images.

    Args:
        color: Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        height: Sets the height for the component.
        left: Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons).
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        right: Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons).
        size: Sets the height and width of the component.
        tile: Removes the component's **border-radius**.
        width: Sets the width for the component.

    Returns:
        A Avatar widget.
    """

    _esm = bundled_path / "Avatar.mjs"
    _css = bundled_path / "Avatar.css"

    color = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    left = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons)."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    right = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons)."""

    size = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height and width of the component."""

    tile = traitlets.Any(allow_none=True).tag(sync=True)
    """Removes the component's **border-radius**."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    def __init__(
        self,
        color=None,
        height=None,
        left=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        right=None,
        size=None,
        tile=None,
        width=None,
        **kwargs
    ):
        """Initialize a Avatar widget."""

        self.color = color
        self.height = height
        self.left = left
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.right = right
        self.size = size
        self.tile = tile
        self.width = width

        super().__init__(**kwargs)
