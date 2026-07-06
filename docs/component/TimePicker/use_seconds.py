import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="justify-center",
            children=[
                v.TimePicker(use_seconds=True),
            ],
        ),
    ],
)
