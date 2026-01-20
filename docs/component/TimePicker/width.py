import ipyvuetify as v

v.Container(
    class_="d-flex flex-row justify-space-around align-center",
    children=[
        v.TimePicker(
            width=200,
            class_="mr-4",
        ),
        v.TimePicker(
            landscape=True,
            full_width=True,
        ),
    ],
)
