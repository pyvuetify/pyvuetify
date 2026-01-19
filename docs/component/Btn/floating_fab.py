import ipyvuetify as v

v.Container(
    children=[
        v.Btn(
            fab=True,
            dark=True,
            small=True,
            color="primary",
            children=[v.Icon(dark=True, children=["mdi-minus"])],
            class_="mx-2",
        ),
        v.Btn(
            fab=True,
            dark=True,
            small=True,
            color="pink",
            children=[v.Icon(dark=True, children=["mdi-heart"])],
            class_="mx-2",
        ),
        v.Btn(
            fab=True,
            dark=True,
            color="indigo",
            children=[v.Icon(dark=True, children=["mdi-plus"])],
            class_="mx-2",
        ),
        v.Btn(
            fab=True,
            dark=True,
            large=True,
            color="cyan",
            children=[v.Icon(dark=True, children=["mdi-pencil"])],
            class_="mx-2",
        ),
        v.Btn(
            fab=True,
            dark=True,
            large=True,
            color="purple",
            children=[v.Icon(dark=True, children=["mdi-android"])],
            class_="mx-2",
        ),
    ]
)
