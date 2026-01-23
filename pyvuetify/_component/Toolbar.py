import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Toolbar(anywidget.AnyWidget):
    """The Toolbar component.

    

    Args:
        children: The child nodes of the DOM element.
        flat: Removes the toolbar's box-shadow.
        tag: Specify a custom tag used on the root element.
        title: Specify a title text for the component.
        height: Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc.
        image: Specifies a [v-img](/components/images) as the component's background.
        collapse: Puts the toolbar into a collapsed state reducing its maximum width.
        absolute: Applies position: absolute to the component.
        collapse_position: Specifies side to attach the collapsed toolbar.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        density: Adjusts the vertical height used by the component.
        extended: Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop. When false, will not show extension slot even if content is present.
        extension_height: Specify an explicit height for the `extension` slot.
        floating: Applies **display: inline-flex** to the component.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        theme: Specify a theme for this component and all of its children.

    Returns:
        A VToolbar widget.

    seealso:
        `https://vuetifyjs.com/api/v-toolbar`__
    """

    _esm = bundled_path / "VToolbar.js"
    _css = bundled_path / "VToolbar-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    flat = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the toolbar's box-shadow."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc."""

    image = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specifies a [v-img](/components/images) as the component's background."""

    collapse = traitlets.Bool(allow_none=True).tag(sync=True)
    """Puts the toolbar into a collapsed state reducing its maximum width."""

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
    """Specify an explicit height for the `extension` slot."""

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

    def __init__(
        self,
        children=None,
        flat=False,
        tag="header",
        title=None,
        height="64",
        image=None,
        collapse=False,
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
        **kwargs
    ):
        """Initialize a Toolbar widget."""
        self.children = children
        self.flat = flat
        self.tag = tag
        self.title = title
        self.height = height
        self.image = image
        self.collapse = collapse
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

        super().__init__(**kwargs)