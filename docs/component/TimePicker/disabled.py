import ipyvuetify as v

v.Container(
    class_="d-flex flex-row justify-space-around align-center",
    children=[
        v.TimePicker(
            v_model="10:10",
            disabled=True,
        ),
        v.TimePicker(
            v_model="10:10",
            landscape=True,
            disabled=True,
        ),
    ],
)
