import pyvuetify as v

v.Row(
    class_="align-center justify-space-around",
    children=[
        v.TimePicker(
            v_model="picker",
            scrollable=True,
        ),
    ],
)
