import ipyvuetify as v

bottom_nav = v.BottomNavigation(
    v_model="recent",
    children=[
        v.Btn(
            value="recent",
            children=[v.Html(tag="span", children=["Recent"]), v.Icon(children=["mdi-history"])],
        ),
        v.Btn(
            value="favorites",
            children=[v.Html(tag="span", children=["Favorites"]), v.Icon(children=["mdi-heart"])],
        ),
        v.Btn(
            value="nearby",
            children=[v.Html(tag="span", children=["Nearby"]), v.Icon(children=["mdi-map-marker"])],
        ),
    ],
)

v.Container(children=[bottom_nav])
