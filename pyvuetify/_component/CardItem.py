import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class CardItem(anywidget.AnyWidget):
    """The CardItem component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        title: Specify a title text for the component.
        density: Adjusts the vertical height used by the component.
        prepend_icon: Creates a [v-icon](/api/v-icon/) component in the **prepend** slot before default content.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        subtitle: Specify a subtitle text for the component.
        append_avatar: Appends a [v-avatar](/components/avatars/) component after default content in the **append** slot.
        prepend_avatar: Prepends a [v-avatar](/components/avatars/) component in the **prepend** slot before default content.

    Returns:
        A VCardItem widget.

    seealso:
        `https://vuetifyjs.com/api/v-card-item`__
    """

    _esm = bundled_path / "VCardItem.js"
    _css = bundled_path / "VCardItem-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    title = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    prepend_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component in the **prepend** slot before default content."""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot."""

    subtitle = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a subtitle text for the component."""

    append_avatar = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Appends a [v-avatar](/components/avatars/) component after default content in the **append** slot."""

    prepend_avatar = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Prepends a [v-avatar](/components/avatars/) component in the **prepend** slot before default content."""

    def __init__(
        self,
        children=None,
        tag="div",
        title=None,
        density="default",
        prepend_icon=None,
        append_icon=None,
        subtitle=None,
        append_avatar=None,
        prepend_avatar=None,
        **kwargs
    ):
        """Initialize a CardItem widget."""
        self.children = children
        self.tag = tag
        self.title = title
        self.density = density
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.subtitle = subtitle
        self.append_avatar = append_avatar
        self.prepend_avatar = prepend_avatar

        super().__init__(**kwargs)