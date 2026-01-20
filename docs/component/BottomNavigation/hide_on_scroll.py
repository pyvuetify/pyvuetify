import ipyvuetify as v

v.Card(
    class_="overflow-hidden my-2 mx-auto",
    border=True,
    height=200,
    width=500,
    children=[
        v.Responsive(
            id="hide-on-scroll-example",
            class_="overflow-y-auto",
            max_height=600,
            children=[v.Responsive(height=1500)],
        ),
        v.BottomNavigation(
            absolute=True,
            hide_on_scroll=True,
            horizontal=True,
            scroll_target="#hide-on-scroll-example",
            children=[
                v.Btn(
                    color="deep-purple accent-4",
                    text=True,
                    children=[
                        v.Html(tag="span", children=["Recents"]),
                        v.Icon(children=["mdi-history"]),
                    ],
                ),
                v.Btn(
                    color="deep-purple accent-4",
                    text=True,
                    children=[
                        v.Html(tag="span", children=["Favorites"]),
                        v.Icon(children=["mdi-heart"]),
                    ],
                ),
                v.Btn(
                    color="deep-purple accent-4",
                    text=True,
                    children=[
                        v.Html(tag="span", children=["Nearby"]),
                        v.Icon(children=["mdi-map-marker"]),
                    ],
                ),
            ],
        ),
    ],
)
