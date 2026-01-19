import ipyvuetify as v

v.Container(
    class_="my-2",
    children=[
        v.DatePicker(
            class_="mx-2",
            v_model="2022-06-15",
            events=["2022-06-10", "2022-06-15", "2022-06-20"],
            event_color="green lighten-1",
        ),
        v.DatePicker(
            class_="mx-2",
            v_model="2022-06-15",
            events=["2022-06-10", "2022-06-15", "2022-06-20"],
            event_color=["red", "blue", "green"],
        ),
    ],
)
