import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class BreadcrumbsItem(anywidget.AnyWidget):
    """The BreadcrumbsItem component.

    

    Args:
        children: The child nodes of the DOM element.
        replace: Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation.
        tag: Specify a custom tag used on the root element.
        title: Specify a title text for the component.
        disabled: Removes the ability to click or target the component.
        width: Sets the width for the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        max_width: Sets the maximum width for the component.
        active: Controls the **active** state of the item. This is typically used to highlight the component.
        active_class: The class applied to the component when it matches the current route. Find more information about the [active-class prop](https://router.vuejs.org/api/#active-class) on the [vue-router](https://router.vuejs.org/) documentation.
        active_color: The applied color when the component is in an active state.
        href: Designates the component as anchor and applies the **href** attribute.
        to: Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.
        exact: Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.

    Returns:
        A VBreadcrumbsItem widget.

    seealso:
        `https://vuetifyjs.com/api/v-breadcrumbs-item`__
    """

    _esm = bundled_path / "VBreadcrumbsItem.js"
    _css = bundled_path / "VBreadcrumbsItem-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    replace = traitlets.Bool(allow_none=True).tag(sync=True)
    """Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [replace](https://router.vuejs.org/api/#replace) prop on the vue-router documentation."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    active = traitlets.Bool(allow_none=True).tag(sync=True)
    """Controls the **active** state of the item. This is typically used to highlight the component."""

    active_class = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The class applied to the component when it matches the current route. Find more information about the [active-class prop](https://router.vuejs.org/api/#active-class) on the [vue-router](https://router.vuejs.org/) documentation."""

    active_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The applied color when the component is in an active state."""

    href = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Designates the component as anchor and applies the **href** attribute."""

    to = traitlets.Any(allow_none=True).tag(sync=True)
    """Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation."""

    exact = traitlets.Bool(allow_none=True).tag(sync=True)
    """Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation."""

    def __init__(
        self,
        children=None,
        replace=False,
        tag="li",
        title=None,
        disabled=False,
        width=None,
        color=None,
        max_width=None,
        active=False,
        active_class=None,
        active_color=None,
        href=None,
        to=None,
        exact=False,
        **kwargs
    ):
        """Initialize a BreadcrumbsItem widget."""
        self.children = children
        self.replace = replace
        self.tag = tag
        self.title = title
        self.disabled = disabled
        self.width = width
        self.color = color
        self.max_width = max_width
        self.active = active
        self.active_class = active_class
        self.active_color = active_color
        self.href = href
        self.to = to
        self.exact = exact

        super().__init__(**kwargs)