import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Video(anywidget.AnyWidget):
    """The Video component.

    

    Args:
        children: The child nodes of the DOM element.
        type: Media file type (optional)
        playing: Applies correct icon of the default play button.
        progress: Controls main slider value (0 ~ 100)
        height: Sets the height for the component.
        src: Media file URL
        width: Sets the width for the component.
        image: Apply a specific image as cover before the video is loaded.
        color: General color applied to icons and sliders.
        density: Adjusts the vertical height used by the component.
        floating: Introduces visual spacing from the video boundaries.
        elevation: Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation).
        rounded: Applies a border radius to the video container and the controls. Accepts array of two values to customize elements separately.
        theme: Specify a theme for this component and all of its children.
        variant: Applies a distinct style to the component.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        eager: Silently loades the media file without waiting for user to click.
        aspect_ratio: Sets the aspect ratio for the playback, calculated as width/height.
        autoplay: Starts loading the media file without waiting for user to click. Playback begins once enough data is loaded.
        muted: Hides volume control and disables the playback sound.
        hide_overlay: Hide center play icon.
        no_fullscreen: Disable fullscreen and hide the default fullscreen button.
        start_at: Moves progress to the specified time (in seconds) once the media file is loaded.
        controls_transition: The reveal transition applied to the VVideoControls component once the media file is loaded.
        controls_variant: Variant passed to the VVideoControls component.
        controls_props: Pass props through to the `v-video-controls` component. Accepts an object with anything from [v-video-controls](/api/v-video-controls/#props) props, camelCase keys are recommended.
        background_color: Container background color.
        track_color: Passed to the main slider `color` prop.
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
        A VVideo widget.

    seealso:
        `https://vuetifyjs.com/api/v-video`__
    """

    _esm = bundled_path / "VVideo.js"
    _css = bundled_path / "VVideo-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    type = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Media file type (optional)"""

    playing = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies correct icon of the default play button."""

    progress = traitlets.Float(allow_none=True).tag(sync=True)
    """Controls main slider value (0 ~ 100)"""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    src = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Media file URL"""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    image = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Apply a specific image as cover before the video is loaded."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """General color applied to icons and sliders."""

    density = traitlets.Any(allow_none=True).tag(sync=True)
    """Adjusts the vertical height used by the component."""

    floating = traitlets.Bool(allow_none=True).tag(sync=True)
    """Introduces visual spacing from the video boundaries."""

    elevation = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a border radius to the video container and the controls. Accepts array of two values to customize elements separately."""

    theme = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Specify a theme for this component and all of its children."""

    variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies a distinct style to the component."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    eager = traitlets.Bool(allow_none=True).tag(sync=True)
    """Silently loades the media file without waiting for user to click."""

    aspect_ratio = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the aspect ratio for the playback, calculated as width/height."""

    autoplay = traitlets.Bool(allow_none=True).tag(sync=True)
    """Starts loading the media file without waiting for user to click. Playback begins once enough data is loaded."""

    muted = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hides volume control and disables the playback sound."""

    hide_overlay = traitlets.Bool(allow_none=True).tag(sync=True)
    """Hide center play icon."""

    no_fullscreen = traitlets.Bool(allow_none=True).tag(sync=True)
    """Disable fullscreen and hide the default fullscreen button."""

    start_at = traitlets.Any(allow_none=True).tag(sync=True)
    """Moves progress to the specified time (in seconds) once the media file is loaded."""

    controls_transition = traitlets.Any(allow_none=True).tag(sync=True)
    """The reveal transition applied to the VVideoControls component once the media file is loaded."""

    controls_variant = traitlets.Any(allow_none=True).tag(sync=True)
    """Variant passed to the VVideoControls component."""

    controls_props = traitlets.Any(allow_none=True).tag(sync=True)
    """Pass props through to the `v-video-controls` component. Accepts an object with anything from [v-video-controls](/api/v-video-controls/#props) props, camelCase keys are recommended."""

    background_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Container background color."""

    track_color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Passed to the main slider `color` prop."""

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
        type=None,
        playing=False,
        progress="0",
        height=None,
        src=None,
        width=None,
        image=None,
        color=None,
        density="default",
        floating=False,
        elevation=None,
        rounded=False,
        theme=None,
        variant="player",
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        eager=False,
        aspect_ratio=None,
        autoplay=False,
        muted=False,
        hide_overlay=False,
        no_fullscreen=False,
        start_at=None,
        controls_transition=False,
        controls_variant="default",
        controls_props=None,
        background_color=None,
        track_color=None,
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
        """Initialize a Video widget."""
        self.children = children
        self.type = type
        self.playing = playing
        self.progress = progress
        self.height = height
        self.src = src
        self.width = width
        self.image = image
        self.color = color
        self.density = density
        self.floating = floating
        self.elevation = elevation
        self.rounded = rounded
        self.theme = theme
        self.variant = variant
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.eager = eager
        self.aspect_ratio = aspect_ratio
        self.autoplay = autoplay
        self.muted = muted
        self.hide_overlay = hide_overlay
        self.no_fullscreen = no_fullscreen
        self.start_at = start_at
        self.controls_transition = controls_transition
        self.controls_variant = controls_variant
        self.controls_props = controls_props
        self.background_color = background_color
        self.track_color = track_color
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