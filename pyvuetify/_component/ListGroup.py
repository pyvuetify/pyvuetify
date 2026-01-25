import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class ListGroup(anywidget.AnyWidget):
    """The ListGroup component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        tag: Specify a custom tag used on the root element.
        title: Specify a title text for the component.
        disabled: Puts all children inputs into a disabled state.
        value: Expands / Collapse the list-group.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        base_color: Sets the color of component when not focused.
        active_color: Deprecated, use `color` instead.
        prepend_icon: Prepends an icon to the component, uses the same syntax as `v-icon`.
        append_icon: Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot.
        fluid: Removes the left padding assigned for action icons from group items.
        collapse_icon: Icon to display when the list item is expanded.
        expand_icon: Icon to display when the list item is collapsed.
        raw_id: Defines the root element's id attribute in the component. If it is provided, the id attribute will be dynamically generated in the format: "v-list-group--id-[rawId]".
        subgroup: Designate the component as nested list group.

    Returns:
        A VListGroup widget.

    seealso:
        `https://vuetifyjs.com/api/v-list-group`__
    """

    _esm = bundled_path / "VListGroup.js"
    _css = bundled_path / "VListGroup-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts all children inputs into a disabled state."""

    value = traitlets.Any(allow_none=True).tag(sync=True)
    """Expands / Collapse the list-group."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    base_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the color of component when not focused."""

    active_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Deprecated, use `color` instead."""

    prepend_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Prepends an icon to the component, uses the same syntax as `v-icon`."""

    append_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Creates a [v-icon](/api/v-icon/) component after default content in the **append** slot."""

    fluid = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the left padding assigned for action icons from group items."""

    collapse_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon to display when the list item is expanded."""

    expand_icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Icon to display when the list item is collapsed."""

    raw_id = traitlets.Any(allow_none=True).tag(sync=True)
    """Defines the root element's id attribute in the component. If it is provided, the id attribute will be dynamically generated in the format: "v-list-group--id-[rawId]"."""

    subgroup = traitlets.Bool(allow_none=True).tag(sync=True)
    """Designate the component as nested list group."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        tag="div",
        title=None,
        disabled=False,
        value=None,
        color=None,
        base_color=None,
        active_color=None,
        prepend_icon=None,
        append_icon=None,
        fluid=False,
        collapse_icon="$collapse",
        expand_icon="$expand",
        raw_id=None,
        subgroup=False,
        **kwargs
    ):
        """Initialize a ListGroup widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.tag = tag
        self.title = title
        self.disabled = disabled
        self.value = value
        self.color = color
        self.base_color = base_color
        self.active_color = active_color
        self.prepend_icon = prepend_icon
        self.append_icon = append_icon
        self.fluid = fluid
        self.collapse_icon = collapse_icon
        self.expand_icon = expand_icon
        self.raw_id = raw_id
        self.subgroup = subgroup

        super().__init__(**kwargs)