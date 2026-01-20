import ipyvuetify as v

v.Container(
    class_="d-flex flex-row justify-space-around align-center",
    children=[
        v.TimePicker(
            ampm_in_title=True,
        ),
        v.TimePicker(
            landscape=True,
            ampm_in_title=True,
        ),
    ],
)
