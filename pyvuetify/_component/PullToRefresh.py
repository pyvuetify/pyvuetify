import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class PullToRefresh(anywidget.AnyWidget):
    """The PullToRefresh component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        disabled: Removes the ability to click or target the component.
        pull_down_threshold: The distance the user must pull down to trigger a refresh.

    Returns:
        A VPullToRefresh widget.

    seealso:
        `https://vuetifyjs.com/api/v-pull-to-refresh`__
    """

    _esm = bundled_path / "VPullToRefresh.js"
    _css = bundled_path / "VPullToRefresh-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    pull_down_threshold = traitlets.Float(allow_none=True).tag(sync=True)
    """The distance the user must pull down to trigger a refresh."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        disabled=False,
        pull_down_threshold="64",
        **kwargs
    ):
        """Initialize a PullToRefresh widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.disabled = disabled
        self.pull_down_threshold = pull_down_threshold

        super().__init__(**kwargs)