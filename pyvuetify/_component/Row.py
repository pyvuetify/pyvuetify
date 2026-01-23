import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Row(anywidget.AnyWidget):
    """The Row component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        align: Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are: **start**, **center**, **end**, **baseline** and **stretch**.
        dense: Reduces the gutter between `v-col`s.
        no_gutters: Removes the gutter between `v-col`s.
        align_sm: Changes the **align-items** property on small and greater breakpoints.
        align_md: Changes the **align-items** property on medium and greater breakpoints.
        align_lg: Changes the **align-items** property on large and greater breakpoints.
        align_xl: Changes the **align-items** property on extra large and greater breakpoints.
        align_xxl: Changes the **align-items** property on extra extra large and greater breakpoints.
        justify_sm: Changes the **justify-content** property on small and greater breakpoints.
        justify_md: Changes the **justify-content** property on medium and greater breakpoints.
        justify_lg: Changes the **justify-content** property on large and greater breakpoints.
        justify_xl: Changes the **justify-content** property on extra large and greater breakpoints.
        justify_xxl: Changes the **justify-content** property on extra extra large and greater breakpoints.
        align_content_sm: Changes the **align-content** property on small and greater breakpoints.
        align_content_md: Changes the **align-content** property on medium and greater breakpoints.
        align_content_lg: Changes the **align-content** property on large and greater breakpoints.
        align_content_xl: Changes the **align-content** property on extra large and greater breakpoints.
        align_content_xxl: Changes the **align-content** property on extra extra large and greater breakpoints.
        justify: Applies the [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) css property. Available options are: **start**, **center**, **end**, **space-between** and **space-around**.
        align_content: Applies the [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) css property. Available options are: **start**, **center**, **end**, **space-between**, **space-around** and **stretch**.

    Returns:
        A VRow widget.

    seealso:
        `https://vuetifyjs.com/api/v-row`__
    """

    _esm = bundled_path / "VRow.js"
    _css = bundled_path / "VRow-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    align = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are: **start**, **center**, **end**, **baseline** and **stretch**."""

    dense = traitlets.Bool(allow_none=True).tag(sync=True)
    """Reduces the gutter between `v-col`s."""

    no_gutters = traitlets.Bool(allow_none=True).tag(sync=True)
    """Removes the gutter between `v-col`s."""

    align_sm = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **align-items** property on small and greater breakpoints."""

    align_md = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **align-items** property on medium and greater breakpoints."""

    align_lg = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **align-items** property on large and greater breakpoints."""

    align_xl = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **align-items** property on extra large and greater breakpoints."""

    align_xxl = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **align-items** property on extra extra large and greater breakpoints."""

    justify_sm = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **justify-content** property on small and greater breakpoints."""

    justify_md = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **justify-content** property on medium and greater breakpoints."""

    justify_lg = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **justify-content** property on large and greater breakpoints."""

    justify_xl = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **justify-content** property on extra large and greater breakpoints."""

    justify_xxl = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **justify-content** property on extra extra large and greater breakpoints."""

    align_content_sm = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **align-content** property on small and greater breakpoints."""

    align_content_md = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **align-content** property on medium and greater breakpoints."""

    align_content_lg = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **align-content** property on large and greater breakpoints."""

    align_content_xl = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **align-content** property on extra large and greater breakpoints."""

    align_content_xxl = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the **align-content** property on extra extra large and greater breakpoints."""

    justify = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) css property. Available options are: **start**, **center**, **end**, **space-between** and **space-around**."""

    align_content = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) css property. Available options are: **start**, **center**, **end**, **space-between**, **space-around** and **stretch**."""

    def __init__(
        self,
        children=None,
        tag="div",
        align=None,
        dense=False,
        no_gutters=False,
        align_sm=None,
        align_md=None,
        align_lg=None,
        align_xl=None,
        align_xxl=None,
        justify_sm=None,
        justify_md=None,
        justify_lg=None,
        justify_xl=None,
        justify_xxl=None,
        align_content_sm=None,
        align_content_md=None,
        align_content_lg=None,
        align_content_xl=None,
        align_content_xxl=None,
        justify=None,
        align_content=None,
        **kwargs
    ):
        """Initialize a Row widget."""
        self.children = children
        self.tag = tag
        self.align = align
        self.dense = dense
        self.no_gutters = no_gutters
        self.align_sm = align_sm
        self.align_md = align_md
        self.align_lg = align_lg
        self.align_xl = align_xl
        self.align_xxl = align_xxl
        self.justify_sm = justify_sm
        self.justify_md = justify_md
        self.justify_lg = justify_lg
        self.justify_xl = justify_xl
        self.justify_xxl = justify_xxl
        self.align_content_sm = align_content_sm
        self.align_content_md = align_content_md
        self.align_content_lg = align_content_lg
        self.align_content_xl = align_content_xl
        self.align_content_xxl = align_content_xxl
        self.justify = justify
        self.align_content = align_content

        super().__init__(**kwargs)