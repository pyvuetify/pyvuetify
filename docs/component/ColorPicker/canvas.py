import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-space-around",
    children=[
        v.ColorPicker(
            v_model="c1",
            hide_canvas=True,
            hide_sliders=True,
        ),
        v.ColorPicker(
            v_model="c2",
            hide_inputs=True,
            show_swatches=True,
        ),
    ],
)
