import pathlib

import anywidget

bundled_path = pathlib.Path(__file__).parent / "static"


class AppBarNavIcon(anywidget.AnyWidget):
    """The AppBarNavIcon component.

    A stylized icon button component used in app-bars to toggle navigation drawers. It displays the standard hamburger menu icon.

    Args:

    Returns:
        A AppBarNavIcon widget.
    """

    _esm = bundled_path / "AppBarNavIcon.mjs"
    _css = bundled_path / "AppBarNavIcon.css"

    def __init__(self, **kwargs):
        """Initialize a AppBarNavIcon widget."""

        super().__init__(**kwargs)
