import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="justify-space-around",
            children=[
                v.DatePicker(color="primary"),
            ],
        ),
    ],
)
