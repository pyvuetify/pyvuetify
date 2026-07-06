import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="justify-space-around",
            children=[
                v.TimePicker(color="green-lighten-1"),
                v.TimePicker(color="primary"),
            ],
        ),
    ],
)
