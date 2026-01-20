import ipyvuetify as v

v.Container(
    class_="d-flex flex-row justify-space-around align-center",
    children=[
        v.TimePicker(
            no_title=True,
        ),
        v.TimePicker(
            landscape=True,
            no_title=True,
        ),
    ],
)
