import ipyvuetify as v

v.Container(
    class_="d-flex flex-row justify-center",
    children=[
        v.TimePicker(
            v_model="13:30",
            format="24hr",
        ),
    ],
)
