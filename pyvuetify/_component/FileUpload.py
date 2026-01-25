import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class FileUpload(anywidget.AnyWidget):
    """The FileUpload component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        title: Specify a title text for the component.
        length: Sets the dividers length. Default unit is px.
        border: Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders).
        icon: Apply a specific icon using the [v-icon](/components/icons/) component.
        model_value: The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array.
        density: Adjusts the vertical height used by the component.
        height: Sets the height for the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        width: Sets the width for the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        location: Specifies the component's location. Can combine by using a space separated string.
        position: Sets the position for the component.
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        tag: Specify a custom tag used on the root element.
        theme: Specify a theme for this component and all of its children.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        name: Sets the component's name attribute.
        disabled: Removes the ability to click or target the component.
        multiple: Allows multiple files to be uploaded.
        subtitle: Specify a subtitle text for the component.
        opacity: Sets the component's opacity value
        scrim: Determines whether an overlay is used when hovering over the component with files. Accepts true/false to enable background, and string to define color.
        close_delay: Milliseconds to wait before closing component. Only applies to hover and focus events.
        open_delay: Milliseconds to wait before opening component. Only applies to hover and focus events.
        clearable: Allows for the component to be cleared.
        thickness: Sets the dividers thickness. Default unit is px.
        show_size: Shows the size of the file.
        filter_by_type: Make the input accept only files matched by one or more [unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers). Applies to drag & drop and selecting folders. Emits `rejected` event when some files do not pass through to make it possible to notify user and deliver better user experience.
        browse_text: Text for the browse button.
        divider_text: Text in the divider.
        hide_browse: Hides the browse button.

    Returns:
        A VFileUpload widget.

    seealso:
        `https://vuetifyjs.com/api/v-file-upload`__
    """

    _esm = bundled_path / "VFileUpload.js"
    _css = bundled_path / "VFileUpload-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    title = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a title text for the component."""

    length = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the dividers length. Default unit is px."""

    border = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies utility border classes to the component. To use it, you need to omit the `border-` prefix, (for example use `border-sm` as `border="sm"`).  Find a list of the built-in border classes on the [borders page](/styles/borders)."""

    icon = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a specific icon using the [v-icon](/components/icons/) component."""

    model_value = traitlets.Any(allow_none=True).tag(sync=True)
    """The v-model value of the component. If component supports the **multiple** prop, this defaults to an empty array."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    location = traitlets.Any(allow_none=True).tag(sync=True)
    """Specifies the component's location. Can combine by using a space separated string."""

    position = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the position for the component."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    name = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Sets the component's name attribute."""

    disabled = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the ability to click or target the component."""

    multiple = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows multiple files to be uploaded."""

    subtitle = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a subtitle text for the component."""

    opacity = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the component's opacity value"""

    scrim = traitlets.Any(allow_none=True).tag(sync=True)
    """Determines whether an overlay is used when hovering over the component with files. Accepts true/false to enable background, and string to define color."""

    close_delay = traitlets.Any(allow_none=True).tag(sync=True)
    """Milliseconds to wait before closing component. Only applies to hover and focus events."""

    open_delay = traitlets.Any(allow_none=True).tag(sync=True)
    """Milliseconds to wait before opening component. Only applies to hover and focus events."""

    clearable = traitlets.Bool(allow_none=True).tag(sync=True)
    """Allows for the component to be cleared."""

    thickness = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the dividers thickness. Default unit is px."""

    show_size = traitlets.Bool(allow_none=True).tag(sync=True)
    """Shows the size of the file."""

    filter_by_type = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Make the input accept only files matched by one or more [unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers). Applies to drag & drop and selecting folders. Emits `rejected` event when some files do not pass through to make it possible to notify user and deliver better user experience."""

    browse_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text for the browse button."""

    divider_text = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text in the divider."""

    hide_browse = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides the browse button."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        title="$vuetify.fileUpload.title",
        length="150",
        border=False,
        icon="$upload",
        model_value=None,
        density="default",
        height=None,
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        width=None,
        elevation=None,
        location=None,
        position=None,
        rounded=None,
        tile=False,
        tag="div",
        theme=None,
        color=None,
        name=None,
        disabled=False,
        multiple=False,
        subtitle=None,
        opacity=None,
        scrim=True,
        close_delay=None,
        open_delay=None,
        clearable=False,
        thickness=None,
        show_size=False,
        filter_by_type=None,
        browse_text="$vuetify.fileUpload.browse",
        divider_text="$vuetify.fileUpload.divider",
        hide_browse=False,
        **kwargs
    ):
        """Initialize a FileUpload widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.title = title
        self.length = length
        self.border = border
        self.icon = icon
        self.model_value = model_value
        self.density = density
        self.height = height
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.width = width
        self.elevation = elevation
        self.location = location
        self.position = position
        self.rounded = rounded
        self.tile = tile
        self.tag = tag
        self.theme = theme
        self.color = color
        self.name = name
        self.disabled = disabled
        self.multiple = multiple
        self.subtitle = subtitle
        self.opacity = opacity
        self.scrim = scrim
        self.close_delay = close_delay
        self.open_delay = open_delay
        self.clearable = clearable
        self.thickness = thickness
        self.show_size = show_size
        self.filter_by_type = filter_by_type
        self.browse_text = browse_text
        self.divider_text = divider_text
        self.hide_browse = hide_browse

        super().__init__(**kwargs)