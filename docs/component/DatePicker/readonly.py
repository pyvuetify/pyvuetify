import ipyvuetify as v

v.Container(
    class_="my-2",
    children=[
        v.DatePicker(
            v_model="2019-10-13",
            readonly=True,
        ),
    ],
)
