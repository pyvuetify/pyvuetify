import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class LocaleProvider(anywidget.AnyWidget):
    """The LocaleProvider component.

    

    Args:
        children: The child nodes of the DOM element.
        locale: Specify a locale to use.
        rtl: Specify a RTL mode.
        messages: Displays a list of messages or a single message if using a string.
        fallback_locale: Specify a fallback locale to use when a locale is not found.

    Returns:
        A VLocaleProvider widget.

    seealso:
        `https://vuetifyjs.com/api/v-locale-provider`__
    """

    _esm = bundled_path / "VLocaleProvider.js"
    _css = bundled_path / "VLocaleProvider-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    locale = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a locale to use."""

    rtl = traitlets.Bool(allow_none=True).tag(sync=True)
    """Specify a RTL mode."""

    messages = traitlets.Any(allow_none=True).tag(sync=True)
    """Displays a list of messages or a single message if using a string."""

    fallback_locale = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a fallback locale to use when a locale is not found."""

    def __init__(
        self,
        children=None,
        locale=None,
        rtl=None,
        messages=None,
        fallback_locale=None,
        **kwargs
    ):
        """Initialize a LocaleProvider widget."""
        self.children = children
        self.locale = locale
        self.rtl = rtl
        self.messages = messages
        self.fallback_locale = fallback_locale

        super().__init__(**kwargs)