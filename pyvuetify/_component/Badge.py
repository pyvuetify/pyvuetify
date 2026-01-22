import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Badge(anywidget.AnyWidget):
    """The Badge component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        label: The **aria-label** used for the badge.
        height: Sets the height for the component.
        max: Sets the maximum number allowed when using the **content** prop with a `number` like value. If the content number exceeds the maximum value, a `+` suffix is added.
        width: Sets the width for the component.
        model_value: Controls whether the component is visible or hidden.
        location: Specifies the component's location. Can combine by using a space separated string.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        floating: Move the badge further away from the slotted content. Equivalent to an 8px offset.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.
        bordered: Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property.
        content: Text content to show in the badge.
        dot: Reduce the size of the badge and hide its contents.
        inline: Display as an inline block instead of absolute position. **location**, **floating**, and **offset** will have no effect.
        offset_x: Offset the badge on the x-axis.
        offset_y: Offset the badge on the y-axis.
        text_color: Applies a specified color to the control text - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        transition: Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.

    Returns:
        A VBadge widget.

    seealso:
        `https://vuetifyjs.com/api/v-badge`__
    """

    _esm = bundled_path / "VBadge.mjs"
    _css = bundled_path / "VBadge.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The **aria-label** used for the badge."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    max = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum number allowed when using the **content** prop with a `number` like value. If the content number exceeds the maximum value, a `+` suffix is added."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    model_value = traitlets.Bool(allow_none=True).tag(sync=True)
    """Controls whether the component is visible or hidden."""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the component's location. Can combine by using a space separated string."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    floating = traitlets.Bool(allow_none=True).tag(sync=True)
    """Move the badge further away from the slotted content. Equivalent to an 8px offset."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

    bordered = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property."""

    content = traitlets.Any(allow_none=True).tag(sync=True)
    """Text content to show in the badge."""

    dot = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reduce the size of the badge and hide its contents."""

    inline = traitlets.Bool(allow_none=True).tag(sync=True)
    """Display as an inline block instead of absolute position. **location**, **floating**, and **offset** will have no effect."""

    offset_x = traitlets.Any(allow_none=True).tag(sync=True)
    """Offset the badge on the x-axis."""

    offset_y = traitlets.Any(allow_none=True).tag(sync=True)
    """Offset the badge on the y-axis."""

    text_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies a specified color to the control text - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    def __init__(
        self,
        children=None,
        tag="div",
        label="$vuetify.badge",
        height=None,
        max=None,
        width=None,
        model_value=True,
        location="top end",
        color=None,
        floating=False,
        rounded=None,
        tile=False,
        theme=None,
        icon=None,
        bordered=False,
        content=None,
        dot=False,
        inline=False,
        offset_x=None,
        offset_y=None,
        text_color=None,
        transition="scale-rotate-transition",
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        **kwargs
    ):
        """Initialize a Badge widget."""
        self.children = children
        self.tag = tag
        self.label = label
        self.height = height
        self.max = max
        self.width = width
        self.model_value = model_value
        self.location = location
        self.color = color
        self.floating = floating
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.icon = icon
        self.bordered = bordered
        self.content = content
        self.dot = dot
        self.inline = inline
        self.offset_x = offset_x
        self.offset_y = offset_y
        self.text_color = text_color
        self.transition = transition
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width

        super().__init__(**kwargs)