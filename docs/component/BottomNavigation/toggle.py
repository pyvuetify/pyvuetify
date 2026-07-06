import pyvuetify as v

v.Layout(
    class_="border rounded",
    style_="height: 128px;",
    children=[
        v.Html(
            tag="div",
            class_="mx-auto my-4",
            children=[
                v.Btn(
                    color="deep-purple",
                    variant="outlined",
                    children=["Toggle Navigation"],
                ),
            ],
        ),
        v.BottomNavigation(
            # JS expression, needs manual conversion
            active="active",
            color="indigo",
            children=[
                v.Btn(
                    children=[
                        v.Icon(children=["mdi-history"]),
                        "Recents",
                    ],
                ),
                v.Btn(
                    children=[
                        v.Icon(children=["mdi-heart"]),
                        "Favorites",
                    ],
                ),
                v.Btn(
                    children=[
                        v.Icon(children=["mdi-map-marker"]),
                        "Nearby",
                    ],
                ),
            ],
        ),
    ],
)
