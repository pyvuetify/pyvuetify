import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ItemGroup(anywidget.AnyWidget):
    """The ItemGroup component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        disabled: Puts all children components into a disabled state.
        max: Sets a maximum number of selections that can be made.
        multiple: Allows one to select multiple items.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        theme: Specify a theme for this component and all of its children.
        selected_class: Configure the selected CSS class. This class will be available in `v-item` default scoped slot.
        mandatory: Forces at least one item to always be selected (if available).

    Returns:
        A VItemGroup widget.

    seealso:
        `https://vuetifyjs.com/api/v-item-group`__
    """

    _esm = bundled_path / "VItemGroup.js"
    _css = bundled_path / "VItemGroup-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts all children components into a disabled state."""

    max = traitlets.Float(allow_none=True).tag(sync=True)
    """Sets a maximum number of selections that can be made."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows one to select multiple items."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    selected_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Configure the selected CSS class. This class will be available in `v-item` default scoped slot."""

    mandatory = traitlets.Any(allow_none=True).tag(sync=True)
    """Forces at least one item to always be selected (if available)."""

    def __init__(
        self,
        children=None,
        tag="div",
        disabled=False,
        max=None,
        multiple=False,
        model_value=None,
        theme=None,
        selected_class="v-item--selected",
        mandatory=False,
        **kwargs
    ):
        """Initialize a ItemGroup widget."""
        self.children = children
        self.tag = tag
        self.disabled = disabled
        self.max = max
        self.multiple = multiple
        self.model_value = model_value
        self.theme = theme
        self.selected_class = selected_class
        self.mandatory = mandatory

        super().__init__(**kwargs)