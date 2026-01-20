import ipyvuetify as v

v.Container(
    class_="my-2",
    children=[
        v.DatePicker(
            v_model="2019-10-13",
            year_icon="mdi-calendar-blank",
            prev_icon="mdi-skip-previous",
            next_icon="mdi-skip-next",
        ),
    ],
)
