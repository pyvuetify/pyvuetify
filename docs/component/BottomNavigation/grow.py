import ipyvuetify as v

v.BottomNavigation(
    value=1,
    color="teal",
    grow=True,
    children=[
        v.Btn(
            children=[v.Html(tag="span", children=["Recents"]), v.Icon(children=["mdi-history"])]
        ),
        v.Btn(
            children=[v.Html(tag="span", children=["Favorites"]), v.Icon(children=["mdi-heart"])]
        ),
        v.Btn(
            children=[v.Html(tag="span", children=["Nearby"]), v.Icon(children=["mdi-map-marker"])]
        ),
    ],
)
