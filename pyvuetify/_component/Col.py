import pathlib

import anywidget
import traitlets

bundled_path = pathlib.Path(__file__).parents[1] / "static"


class Col(anywidget.AnyWidget):
    """The Col component.

    

    Args:
        children: The child nodes of the DOM element.
        tag: Specify a custom tag used on the root element.
        order: Sets the default [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order) for the column.
        sm: Changes the number of columns on small and greater breakpoints.
        md: Changes the number of columns on medium and greater breakpoints.
        lg: Changes the number of columns on large and greater breakpoints.
        xl: Changes the number of columns on extra large and greater breakpoints.
        xxl: Changes the number of columns on extra extra large and greater breakpoints.
        offset: Sets the default offset for the column.
        cols: Sets the default number of columns the component extends. Available options are: **1 -> 12** and **auto**.
        offset_sm: Changes the offset of the component on small and greater breakpoints.
        offset_md: Changes the offset of the component on medium and greater breakpoints.
        offset_lg: Changes the offset of the component on large and greater breakpoints.
        offset_xl: Changes the offset of the component on extra large and greater breakpoints.
        offset_xxl: Changes the offset of the component on extra extra large and greater breakpoints.
        order_sm: Changes the order of the component on small and greater breakpoints.
        order_md: Changes the order of the component on medium and greater breakpoints.
        order_lg: Changes the order of the component on large and greater breakpoints.
        order_xl: Changes the order of the component on extra large and greater breakpoints.
        order_xxl: Changes the order of the component on extra extra large and greater breakpoints.
        align_self: Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are: **start**, **center**, **end**, **auto**, **baseline** and **stretch**.

    Returns:
        A VCol widget.

    seealso:
        `https://vuetifyjs.com/api/v-col`__
    """

    _esm = bundled_path / "VCol.js"
    _css = bundled_path / "VCol-pyvuetify.css"

    children = traitlets.Any(allow_none=True).tag(sync=True)
    """The child nodes of the DOM element."""

    tag = traitlets.Any(allow_none=True).tag(sync=True)
    """Specify a custom tag used on the root element."""

    order = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the default [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order) for the column."""

    sm = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the number of columns on small and greater breakpoints."""

    md = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the number of columns on medium and greater breakpoints."""

    lg = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the number of columns on large and greater breakpoints."""

    xl = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the number of columns on extra large and greater breakpoints."""

    xxl = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the number of columns on extra extra large and greater breakpoints."""

    offset = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the default offset for the column."""

    cols = traitlets.Any(allow_none=True).tag(sync=True)
    """Sets the default number of columns the component extends. Available options are: **1 -> 12** and **auto**."""

    offset_sm = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the offset of the component on small and greater breakpoints."""

    offset_md = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the offset of the component on medium and greater breakpoints."""

    offset_lg = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the offset of the component on large and greater breakpoints."""

    offset_xl = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the offset of the component on extra large and greater breakpoints."""

    offset_xxl = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the offset of the component on extra extra large and greater breakpoints."""

    order_sm = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the order of the component on small and greater breakpoints."""

    order_md = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the order of the component on medium and greater breakpoints."""

    order_lg = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the order of the component on large and greater breakpoints."""

    order_xl = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the order of the component on extra large and greater breakpoints."""

    order_xxl = traitlets.Any(allow_none=True).tag(sync=True)
    """Changes the order of the component on extra extra large and greater breakpoints."""

    align_self = traitlets.Any(allow_none=True).tag(sync=True)
    """Applies the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) css property. Available options are: **start**, **center**, **end**, **auto**, **baseline** and **stretch**."""

    def __init__(
        self,
        children=None,
        tag="div",
        order=None,
        sm=False,
        md=False,
        lg=False,
        xl=False,
        xxl=False,
        offset=None,
        cols=False,
        offset_sm=None,
        offset_md=None,
        offset_lg=None,
        offset_xl=None,
        offset_xxl=None,
        order_sm=None,
        order_md=None,
        order_lg=None,
        order_xl=None,
        order_xxl=None,
        align_self=None,
        **kwargs
    ):
        """Initialize a Col widget."""
        self.children = children
        self.tag = tag
        self.order = order
        self.sm = sm
        self.md = md
        self.lg = lg
        self.xl = xl
        self.xxl = xxl
        self.offset = offset
        self.cols = cols
        self.offset_sm = offset_sm
        self.offset_md = offset_md
        self.offset_lg = offset_lg
        self.offset_xl = offset_xl
        self.offset_xxl = offset_xxl
        self.order_sm = order_sm
        self.order_md = order_md
        self.order_lg = order_lg
        self.order_xl = order_xl
        self.order_xxl = order_xxl
        self.align_self = align_self

        super().__init__(**kwargs)