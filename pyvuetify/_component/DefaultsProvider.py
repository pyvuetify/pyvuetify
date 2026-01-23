import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class DefaultsProvider(anywidget.AnyWidget):
    """The DefaultsProvider component.

    

    Args:
        children: The child nodes of the DOM element.
        disabled: Turns off all calculations of new default values for improved performance in situations where defaults propagation isn't necessary.
        root: Force current defaults to match the application root defaults.
        reset: Reset the default values up the nested chain by {n} amount.
        scoped: Prevents the ability for default values to be inherited from parent components.
        defaults: Specify new default prop values for components. Keep in mind that this will be merged with previously defined values.

    Returns:
        A VDefaultsProvider widget.

    seealso:
        `https://vuetifyjs.com/api/v-defaults-provider`__
    """

    _esm = bundled_path / "VDefaultsProvider.js"
    _css = bundled_path / "VDefaultsProvider-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Turns off all calculations of new default values for improved performance in situations where defaults propagation isn't necessary."""

    root = traitlets.Any(allow_none=True).tag(sync=True)
    """Force current defaults to match the application root defaults."""

    reset = traitlets.Any(allow_none=True).tag(sync=True)
    """Reset the default values up the nested chain by {n} amount."""

    scoped = traitlets.Bool(allow_none=True).tag(sync=True)
    """Prevents the ability for default values to be inherited from parent components."""

    defaults = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify new default prop values for components. Keep in mind that this will be merged with previously defined values."""

    def __init__(
        self,
        children=None,
        disabled=False,
        root=False,
        reset=None,
        scoped=False,
        defaults=None,
        **kwargs
    ):
        """Initialize a DefaultsProvider widget."""
        self.children = children
        self.disabled = disabled
        self.root = root
        self.reset = reset
        self.scoped = scoped
        self.defaults = defaults

        super().__init__(**kwargs)