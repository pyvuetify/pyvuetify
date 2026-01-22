import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class AppBar(anywidget.AnyWidget):
    """The AppBar component.

    

    Args:
        children: The child nodes of the DOM element.
        flat: Removes the component's **box-shadow**.
        tag: Specify a custom tag used on the root element.
        name: Assign a specific name for layout registration.
        title: Specify a title text for the component.
        height: Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc.
        image: Specifies a [v-img](/components/images) as the component's background.
        collapse: Morphs the component into a collapsed state, reducing its maximum width.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        location: Aligns the component towards the top or bottom.
        absolute: Applies position: absolute to the component.
        collapse_position: Specifies side to attach the collapsed toolbar.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        extended: Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop. When false, will not show extension slot even if content is present.
        extension_height: Designate an explicit height for the `extension` slot.
        floating: Applies **display: inline-flex** to the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.
        order: Adjust the order of the component in relation to its registration order.
        scroll_target: The element to target for scrolling events. Uses `window` by default.
        scroll_threshold: The amount of scroll distance down before **scroll-behavior** activates.
        scroll_behavior: Specify an action to take when the scroll position of **scroll-target** reaches **scroll-threshold**. Accepts any combination of hide, inverted, collapse, elevate, and fade-image. Multiple values can be used, separated by a space.

    Returns:
        A VAppBar widget.

    seealso:
        `https://vuetifyjs.com/api/v-app-bar`__
    """

    _esm = bundled_path / "VAppBar.mjs"
    _css = bundled_path / "VAppBar.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the component's **box-shadow**."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Assign a specific name for layout registration."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc."""

    image = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specifies a [v-img](/components/images) as the component's background."""

    collapse = traitlets.Bool(allow_none=True).tag(sync=True)
    """Morphs the component into a collapsed state, reducing its maximum width."""

    model_value = traitlets.Bool(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Aligns the component towards the top or bottom."""

    absolute = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies position: absolute to the component."""

    collapse_position = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies side to attach the collapsed toolbar."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    extended = traitlets.Bool(allow_none=True).tag(sync=True)
    """Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop. When false, will not show extension slot even if content is present."""

    extension_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Designate an explicit height for the `extension` slot."""

    floating = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies **display: inline-flex** to the component."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    order = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjust the order of the component in relation to its registration order."""

    scroll_target = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The element to target for scrolling events. Uses `window` by default."""

    scroll_threshold = traitlets.Any(allow_none=True).tag(sync=True)
    """The amount of scroll distance down before **scroll-behavior** activates."""

    scroll_behavior = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify an action to take when the scroll position of **scroll-target** reaches **scroll-threshold**. Accepts any combination of hide, inverted, collapse, elevate, and fade-image. Multiple values can be used, separated by a space."""

    def __init__(
        self,
        children=None,
        flat=False,
        tag="header",
        name=None,
        title=None,
        height="64",
        image=None,
        collapse=False,
        model_value=True,
        location="top",
        absolute=False,
        collapse_position="start",
        color=None,
        density="default",
        extended=None,
        extension_height="48",
        floating=False,
        border=False,
        elevation=None,
        rounded=None,
        tile=False,
        theme=None,
        order="0",
        scroll_target=None,
        scroll_threshold="300",
        scroll_behavior=None,
        **kwargs
    ):
        """Initialize a AppBar widget."""
        self.children = children
        self.flat = flat
        self.tag = tag
        self.name = name
        self.title = title
        self.height = height
        self.image = image
        self.collapse = collapse
        self.model_value = model_value
        self.location = location
        self.absolute = absolute
        self.collapse_position = collapse_position
        self.color = color
        self.density = density
        self.extended = extended
        self.extension_height = extension_height
        self.floating = floating
        self.border = border
        self.elevation = elevation
        self.rounded = rounded
        self.tile = tile
        self.theme = theme
        self.order = order
        self.scroll_target = scroll_target
        self.scroll_threshold = scroll_threshold
        self.scroll_behavior = scroll_behavior

        super().__init__(**kwargs)