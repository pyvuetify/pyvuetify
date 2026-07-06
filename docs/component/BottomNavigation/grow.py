import pyvuetify as v

v.Layout(
    style_="height: 56px;",
    children=[
        v.BottomNavigation(
            v_model="value",
            color="teal",
            grow=True,
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
