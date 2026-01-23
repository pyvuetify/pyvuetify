import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class PullToRefresh(anywidget.AnyWidget):
    """The PullToRefresh component.

    

    Args:
        children: The child nodes of the DOM element.
        disabled: Removes the ability to click or target the component.
        pull_down_threshold: The distance the user must pull down to trigger a refresh.

    Returns:
        A VPullToRefresh widget.

    seealso:
        `https://vuetifyjs.com/api/v-pull-to-refresh`__
    """

    _esm = bundled_path / "VPullToRefresh.js"
    _css = bundled_path / "VPullToRefresh-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    pull_down_threshold = traitlets.Float(allow_none=True).tag(sync=True)
    """The distance the user must pull down to trigger a refresh."""

    def __init__(
        self,
        children=None,
        disabled=False,
        pull_down_threshold="64",
        **kwargs
    ):
        """Initialize a PullToRefresh widget."""
        self.children = children
        self.disabled = disabled
        self.pull_down_threshold = pull_down_threshold

        super().__init__(**kwargs)