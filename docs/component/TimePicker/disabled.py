import pyvuetify as v

v.Row(
    class_="align-center justify-space-around",
    children=[
        v.TimePicker(
            v_model="picker",
            disabled=True,
        ),
        v.TimePicker(
            v_model="picker",
            # JS expression, needs manual conversion
            landscape="$vuetify.display.smAndUp",
            disabled=True,
        ),
    ],
)
