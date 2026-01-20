import ipyvuetify as v

v.Container(
    class_="d-flex flex-row justify-space-around align-center",
    children=[
        v.TimePicker(
            use_seconds=True,
        ),
        v.TimePicker(
            landscape=True,
            use_seconds=True,
        ),
    ],
)
