import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class SkeletonLoader(anywidget.AnyWidget):
    """The SkeletonLoader component.

    

    Args:
        children: The child nodes of the DOM element.
        type: A string delimited list of skeleton components to create such as `type="text@3"` or `type="card, list-item"`. Will recursively generate a corresponding skeleton from the provided string. Also supports short-hand for multiple elements such as **article@3** and **paragraph@2** which will generate 3 _article_ skeletons and 2 _paragraph_ skeletons. Please see below for a list of available pre-defined options.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        loading: Applies a loading animation with a on-hover loading cursor. A value of **false** will only work when there is content in the `default` slot.
        boilerplate: Remove the loading animation from the skeleton.
        loading_text: aria-label for the element in a loading state.

    Returns:
        A VSkeletonLoader widget.

    seealso:
        `https://vuetifyjs.com/api/v-skeleton-loader`__
    """

    _esm = bundled_path / "VSkeletonLoader.js"
    _css = bundled_path / "VSkeletonLoader-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    type = traitlets.Any(allow_none=True).tag(sync=True)
    """A string delimited list of skeleton components to create such as `type="text@3"` or `type="card, list-item"`. Will recursively generate a corresponding skeleton from the provided string. Also supports short-hand for multiple elements such as **article@3** and **paragraph@2** which will generate 3 _article_ skeletons and 2 _paragraph_ skeletons. Please see below for a list of available pre-defined options."""

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

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    loading = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies a loading animation with a on-hover loading cursor. A value of **false** will only work when there is content in the `default` slot."""

    boilerplate = traitlets.Bool(allow_none=True).tag(sync=True)
    """Remove the loading animation from the skeleton."""

    loading_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """aria-label for the element in a loading state."""

    def __init__(
        self,
        children=None,
        type="ossein",
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        elevation=None,
        theme=None,
        color=None,
        loading=False,
        boilerplate=False,
        loading_text="$vuetify.loading",
        **kwargs
    ):
        """Initialize a SkeletonLoader widget."""
        self.children = children
        self.type = type
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.elevation = elevation
        self.theme = theme
        self.color = color
        self.loading = loading
        self.boilerplate = boilerplate
        self.loading_text = loading_text

        super().__init__(**kwargs)