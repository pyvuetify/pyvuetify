import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-space-around",
    children=[
        v.ColorPicker(
            v_model="picker",
            elevation="0",
        ),
        v.ColorPicker(
            v_model="picker",
            elevation="4",
        ),
    ],
)
