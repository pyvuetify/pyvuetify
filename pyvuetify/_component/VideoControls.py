import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class VideoControls(anywidget.AnyWidget):
    """The VideoControls component.

    

    Args:
        children: The child nodes of the DOM element.
        density: Adjusts the vertical height used by the component.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        theme: Specify a theme for this component and all of its children.
        color: General color applied to icons and sliders.
        variant: Applies a distinct style to the component.
        playing: Applies correct icon of the default play button.
        progress: Controls main slider value (0 ~ 100)
        fullscreen: Applies correct icon on the default fullscreen button.
        floating: Introduces visual spacing from the video boundaries.
        track_color: Passed to the main slider `color` prop.
        background_color: Container background color.
        hide_play: Hides default play button.
        hide_volume: Hides default volume control.
        hide_fullscreen: Hides default fullscreen button.
        split_time: Splits time into elapsed and remaining on each side of the main slider.
        pills: Makes the container transparent and shows inner actions in separated boxes.
        detached: Moves the container below so it won't obstruct the video.
        duration: Total duration of the video used to calculate displayed time.
        volume: Volume value passed to the underlying control and slots.
        volume_props: Props passed down to the VVideoVolume component.

    Returns:
        A VVideoControls widget.

    seealso:
        `https://vuetifyjs.com/api/v-video-controls`__
    """

    _esm = bundled_path / "VVideoControls.js"
    _css = bundled_path / "VVideoControls-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """General color applied to icons and sliders."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    playing = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies correct icon of the default play button."""

    progress = traitlets.Float(allow_none=True).tag(sync=True)
    """Controls main slider value (0 ~ 100)"""

    fullscreen = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies correct icon on the default fullscreen button."""

    floating = traitlets.Bool(allow_none=True).tag(sync=True)
    """Introduces visual spacing from the video boundaries."""

    track_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Passed to the main slider `color` prop."""

    background_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Container background color."""

    hide_play = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides default play button."""

    hide_volume = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides default volume control."""

    hide_fullscreen = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides default fullscreen button."""

    split_time = traitlets.Bool(allow_none=True).tag(sync=True)
    """Splits time into elapsed and remaining on each side of the main slider."""

    pills = traitlets.Bool(allow_none=True).tag(sync=True)
    """Makes the container transparent and shows inner actions in separated boxes."""

    detached = traitlets.Bool(allow_none=True).tag(sync=True)
    """Moves the container below so it won't obstruct the video."""

    duration = traitlets.Float(allow_none=True).tag(sync=True)
    """Total duration of the video used to calculate displayed time."""

    volume = traitlets.Any(allow_none=True).tag(sync=True)
    """Volume value passed to the underlying control and slots."""

    volume_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Props passed down to the VVideoVolume component."""

    def __init__(
        self,
        children=None,
        density="default",
        elevation=None,
        theme=None,
        color=None,
        variant="default",
        playing=False,
        progress="0",
        fullscreen=False,
        floating=False,
        track_color=None,
        background_color=None,
        hide_play=False,
        hide_volume=False,
        hide_fullscreen=False,
        split_time=False,
        pills=False,
        detached=False,
        duration="0",
        volume=None,
        volume_props=None,
        **kwargs
    ):
        """Initialize a VideoControls widget."""
        self.children = children
        self.density = density
        self.elevation = elevation
        self.theme = theme
        self.color = color
        self.variant = variant
        self.playing = playing
        self.progress = progress
        self.fullscreen = fullscreen
        self.floating = floating
        self.track_color = track_color
        self.background_color = background_color
        self.hide_play = hide_play
        self.hide_volume = hide_volume
        self.hide_fullscreen = hide_fullscreen
        self.split_time = split_time
        self.pills = pills
        self.detached = detached
        self.duration = duration
        self.volume = volume
        self.volume_props = volume_props

        super().__init__(**kwargs)