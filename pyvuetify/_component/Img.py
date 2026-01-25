import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Img(anywidget.AnyWidget):
    """The Img component.

    

    Args:
        v_model: Two-way binding for the component's value.
        children: The child nodes of the DOM element.
        style: Custom CSS styles to apply to the component.
        alt: Alternate text for screen readers. Leave empty for decorative images.
        height: Sets the height for the component.
        src: The image URL. This prop is mandatory.
        width: Sets the width for the component.
        draggable: Controls the `draggable` behavior of the image. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable).
        absolute: Applies position: absolute to the component.
        color: Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
        rounded: Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius).
        tile: Removes any applied **border-radius** from the component.
        inline: Display as an inline element instead of a block, also disables flex-grow.
        transition: The transition to use when switching from `lazy-src` to `src`. Can be one of the [built in](/styles/transitions/) or custom transition.
        max_height: Sets the maximum height for the component.
        max_width: Sets the maximum width for the component.
        min_height: Sets the minimum height for the component.
        min_width: Sets the minimum width for the component.
        position: Applies [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) styles to the image and placeholder elements.
        content_class: Apply a custom class to the internal content element.
        eager: Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.
        options: Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor.
        cover: Resizes the background image to cover the entire container.
        gradient: The gradient to apply to the image. Only supports [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) syntax, anything else should be done with classes.
        lazy_src: Something to show while waiting for the main image to load, typically a small base64-encoded thumbnail. Has a slight blur filter applied.  
NOTE: This prop has no effect unless either `height` or `aspect-ratio` are provided.
        sizes: For use with `srcset`, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes).
        srcset: A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset).
        aspect_ratio: Calculated as `width/height`, so for a 1920x1080px image this will be `1.7778`. Will be calculated automatically if omitted.
        crossorigin: Specify that images should be fetched with CORS enabled [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#crossorigin)
        referrerpolicy: Define which referrer is sent when fetching the resource [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#referrerpolicy)

    Returns:
        A VImg widget.

    seealso:
        `https://vuetifyjs.com/api/v-img`__
    """

    _esm = bundled_path / "VImg.js"
    _css = bundled_path / "VImg-pyvuetify.css"

    v_model = traitlets.Any(allow_none=True).tag(sync=True)
    """Two-way binding for the component's value."""

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    style = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Custom CSS styles to apply to the component."""

    alt = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Alternate text for screen readers. Leave empty for decorative images."""

    height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the height for the component."""

    src = traitlets.Any(allow_none=True).tag(sync=True)
    """The image URL. This prop is mandatory."""

    width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the width for the component."""

    draggable = traitlets.Any(allow_none=True).tag(sync=True)
    """Controls the `draggable` behavior of the image. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable)."""

    absolute = traitlets.Bool(allow_none=True).tag(sync=True)
    """Applies position: absolute to the component."""

    color = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies specified color to the control - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors)."""

    rounded = traitlets.Any(allow_none=True).tag(sync=True)
    """Designates the **border-radius** applied to the component. This can be **0**, **xs**, **sm**, true, **lg**, **xl**, **pill**, **circle**, and **shaped**. Find more information on available border radius classes on the [Border Radius page](/styles/border-radius)."""

    tile = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes any applied **border-radius** from the component."""

    inline = traitlets.Bool(allow_none=True).tag(sync=True)
    """Display as an inline element instead of a block, also disables flex-grow."""

    transition = traitlets.Any(allow_none=True).tag(sync=True)
    """The transition to use when switching from `lazy-src` to `src`. Can be one of the [built in](/styles/transitions/) or custom transition."""

    max_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum height for the component."""

    max_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the maximum width for the component."""

    min_height = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum height for the component."""

    min_width = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the minimum width for the component."""

    position = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Applies [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) styles to the image and placeholder elements."""

    content_class = traitlets.Any(allow_none=True).tag(sync=True)
    """Apply a custom class to the internal content element."""

    eager = traitlets.Bool(allow_none=True).tag(sync=True)
    """Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."""

    options = traitlets.Any(allow_none=True).tag(sync=True)
    """Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor."""

    cover = traitlets.Bool(allow_none=True).tag(sync=True)
    """Resizes the background image to cover the entire container."""

    gradient = traitlets.Unicode(allow_none=True).tag(sync=True)
    """The gradient to apply to the image. Only supports [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) syntax, anything else should be done with classes."""

    lazy_src = traitlets.Unicode(allow_none=True).tag(sync=True)
    """Something to show while waiting for the main image to load, typically a small base64-encoded thumbnail. Has a slight blur filter applied.  
NOTE: This prop has no effect unless either `height` or `aspect-ratio` are provided."""

    sizes = traitlets.Unicode(allow_none=True).tag(sync=True)
    """For use with `srcset`, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes)."""

    srcset = traitlets.Unicode(allow_none=True).tag(sync=True)
    """A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)."""

    aspect_ratio = traitlets.Any(allow_none=True).tag(sync=True)
    """Calculated as `width/height`, so for a 1920x1080px image this will be `1.7778`. Will be calculated automatically if omitted."""

    crossorigin = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify that images should be fetched with CORS enabled [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#crossorigin)"""

    referrerpolicy = traitlets.Any(allow_none=True).tag(sync=True)
    """Define which referrer is sent when fetching the resource [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#referrerpolicy)"""

    def __init__(
        self,
        v_model=None,
        children=None,
        style=None,
        alt=None,
        height=None,
        src="",
        width=None,
        draggable=None,
        absolute=False,
        color=None,
        rounded=None,
        tile=False,
        inline=False,
        transition="fade-transition",
        max_height=None,
        max_width=None,
        min_height=None,
        min_width=None,
        position=None,
        content_class=None,
        eager=False,
        options="{  root: undefined,  rootMargin: undefined,  threshold: undefined}",
        cover=False,
        gradient=None,
        lazy_src=None,
        sizes=None,
        srcset=None,
        aspect_ratio=None,
        crossorigin=None,
        referrerpolicy=None,
        **kwargs
    ):
        """Initialize a Img widget."""
        self.v_model = v_model
        self.children = children
        self.style = style
        self.alt = alt
        self.height = height
        self.src = src
        self.width = width
        self.draggable = draggable
        self.absolute = absolute
        self.color = color
        self.rounded = rounded
        self.tile = tile
        self.inline = inline
        self.transition = transition
        self.max_height = max_height
        self.max_width = max_width
        self.min_height = min_height
        self.min_width = min_width
        self.position = position
        self.content_class = content_class
        self.eager = eager
        self.options = options
        self.cover = cover
        self.gradient = gradient
        self.lazy_src = lazy_src
        self.sizes = sizes
        self.srcset = srcset
        self.aspect_ratio = aspect_ratio
        self.crossorigin = crossorigin
        self.referrerpolicy = referrerpolicy

        super().__init__(**kwargs)