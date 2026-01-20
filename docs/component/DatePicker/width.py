import ipyvuetify as v

v.Container(
    class_="my-2",
    children=[
        v.DatePicker(
            v_model="2019-10-13",
            width="290",
            class_="mt-4",
        ),
        v.DatePicker(
            v_model="2019-10-13",
            full_width=True,
            class_="mt-4",
        ),
    ],
)
