import ipyvuetify as v

v.Container(
    class_="my-2",
    children=[
        v.DatePicker(
            class_="mx-2",
            v_model="2019-10-13",
            color="green lighten-1",
        ),
        v.DatePicker(
            class_="mx-2",
            v_model="2019-10-13",
            color="green lighten-1",
            header_color="primary",
        ),
    ],
)
