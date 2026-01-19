import ipyvuetify as v

v.Container(
    children=[
        v.Chip(
            class_="ma-2",
            color="indigo",
            text_color="white",
            children=[
                v.Avatar(left=True, children=[v.Icon(children=["mdi-account-circle"])]),
                "Mike",
            ],
        ),
        v.Chip(
            class_="ma-2",
            color="orange",
            text_color="white",
            children=["Premium", v.Icon(right=True, children=["mdi-star"])],
        ),
        v.Chip(
            class_="ma-2",
            color="primary",
            text_color="white",
            children=["1 Year", v.Icon(right=True, children=["mdi-cake-variant"])],
        ),
        v.Chip(
            class_="ma-2",
            color="green",
            text_color="white",
            children=[v.Avatar(left=True, class_="green darken-4", children=["1"]), "Years"],
        ),
        v.Chip(
            class_="ma-2",
            close_=True,
            color="teal",
            text_color="white",
            children=[
                v.Avatar(left=True, children=[v.Icon(children=["mdi-checkbox-marked-circle"])]),
                "Confirmed",
            ],
        ),
        v.Chip(
            class_="ma-2",
            close_=True,
            color="teal",
            text_color="white",
            children=[
                v.Avatar(left=True, children=[v.Icon(children=["mdi-checkbox-marked-circle"])]),
                "Confirmed",
            ],
        ),
    ]
)
