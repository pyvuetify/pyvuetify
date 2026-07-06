import pathlib

import anywidget
import anywidget._traits as _awt
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "pyvuetify" / "_static"


def _children_to_json(value, obj):
    """Serialize children: widget → 'anywidget:<id>', str → str, list → list."""
    if value is None:
        return None
    if isinstance(value, list):
        return [_children_to_json(item, obj) for item in value]
    return _awt._widget_to_json(value, obj)


def _children_from_json(value, obj):
    """Pass-through for incoming children state."""
    return value


class Html(anywidget.AnyWidget):
    """A raw HTML element widget.

    Renders an arbitrary HTML tag with optional CSS class and style,
    and supports nested children (strings or other widgets).

    Args:
        children: The child nodes of the DOM element.
        tag: The HTML tag to render (e.g. 'div', 'span', 'h5').
        klass: CSS classes to apply to the element.
        style: Inline CSS styles to apply to the element.
    """

    _esm = bundled_path / "Html.js"
    _css = bundled_path / "pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True, to_json=_children_to_json, from_json=_children_from_json)
    """The child nodes of the DOM element."""

    tag = traitlets.Unicode("div").tag(sync=True)
    """The HTML tag to render."""

    klass = traitlets.Unicode(allow_none=True).tag(sync=True)
    """CSS classes to apply to the element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Inline CSS styles to apply to the element."""

    def __init__(self, tag="div", children=None, klass=None, style=None, **kwargs):
        """Initialize an Html widget."""
        super().__init__(**kwargs)
        self.tag = tag
        self.children = children
        self.klass = klass
        self.style = style
