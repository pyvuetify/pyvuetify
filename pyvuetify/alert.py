import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parent / "static"


class Alert(anywidget.AnyWidget):
    _esm = bundled_path / "alert.mjs"
    _css = bundled_path / "alert.css"
    type = traitlets.Unicode(allow_none=True).tag(sync=True)
