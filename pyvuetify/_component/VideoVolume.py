import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class VideoVolume(anywidget.AnyWidget):
    """The VideoVolume component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        model_value: Volume value (0 ~ 100)
        label: Text to display in tooltip and passed to `aria-label`.
        menu_props: Props passed to VMenu containing volume slider. Useful to adjust **location** and control menu alignment
        direction: Switch between horizontal and vertical slider.
        inline: Display slider next to the icon. VMenu won't be displayed on click. Recomended to pair with **sliderProps** to configure slider width.
        slider_props: Selected props to customize volume slider.

    Returns:
        A VVideoVolume widget.

    seealso:
        `https://vuetifyjs.com/api/v-video-volume`__
    """

    _esm = bundled_path / "VVideoVolume.js"
    _css = bundled_path / "VVideoVolume-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    model_value = traitlets.Float(allow_none=True).tag(sync=True)
    """Volume value (0 ~ 100)"""

    label = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Text to display in tooltip and passed to `aria-label`."""

    menu_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Props passed to VMenu containing volume slider. Useful to adjust **location** and control menu alignment"""

    direction = traitlets.Any(allow_none=True).tag(sync=True)
    """Switch between horizontal and vertical slider."""

    inline = traitlets.Bool(allow_none=True).tag(sync=True)
    """Display slider next to the icon. VMenu won't be displayed on click. Recomended to pair with **sliderProps** to configure slider width."""

    slider_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Selected props to customize volume slider."""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        model_value="0",
        label=None,
        menu_props=None,
        direction="vertical",
        inline=False,
        slider_props=None,
        **kwargs
    ):
        """Initialize a VideoVolume widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.model_value = model_value
        self.label = label
        self.menu_props = menu_props
        self.direction = direction
        self.inline = inline
        self.slider_props = slider_props

        super().__init__(**kwargs)