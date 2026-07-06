import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-space-around",
    children=[
        v.ColorPicker(
            class_="ma-2",
            swatches_max_height="400px",
            show_swatches=True,
        ),
        v.ColorPicker(
            # JS expression, needs manual conversion
            swatches="swatches",
            class_="ma-2",
            show_swatches=True,
        ),
    ],
)
