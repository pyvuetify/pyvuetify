import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Hover(anywidget.AnyWidget):
    """The Hover component.

    

    Args:
        children: The child nodes of the DOM element.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        disabled: Removes hover functionality.
        close_delay: Milliseconds to wait before closing component. Only applies to hover and focus events.
        open_delay: Milliseconds to wait before opening component. Only applies to hover and focus events.

    Returns:
        A VHover widget.

    seealso:
        `https://vuetifyjs.com/api/v-hover`__
    """

    _esm = bundled_path / "VHover.js"
    _css = bundled_path / "VHover-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    model_value = traitlets.Bool(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes hover functionality."""

    close_delay = traitlets.Any(allow_none=True).tag(sync=True)
    """Milliseconds to wait before closing component. Only applies to hover and focus events."""

    open_delay = traitlets.Any(allow_none=True).tag(sync=True)
    """Milliseconds to wait before opening component. Only applies to hover and focus events."""

    def __init__(
        self,
        children=None,
        model_value=None,
        disabled=False,
        close_delay=None,
        open_delay=None,
        **kwargs
    ):
        """Initialize a Hover widget."""
        self.children = children
        self.model_value = model_value
        self.disabled = disabled
        self.close_delay = close_delay
        self.open_delay = open_delay

        super().__init__(**kwargs)