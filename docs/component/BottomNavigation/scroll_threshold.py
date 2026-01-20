import ipyvuetify as v

v.Card(
    class_="mx-auto overflow-hidden my-2",
    height=200,
    width=500,
    children=[
        v.BottomNavigation(
            absolute=True,
            color="white",
            hide_on_scroll=True,
            horizontal=True,
            scroll_target="#scroll-threshold-example",
            scroll_threshold=500,
            children=[
                v.Btn(
                    children=[
                        v.Html(tag="span", children=["Recents"]),
                        v.Icon(children=["mdi-history"]),
                    ]
                ),
                v.Btn(
                    children=[
                        v.Html(tag="span", children=["Favorites"]),
                        v.Icon(children=["mdi-heart"]),
                    ]
                ),
                v.Btn(
                    children=[
                        v.Html(tag="span", children=["Nearby"]),
                        v.Icon(children=["mdi-map-marker"]),
                    ]
                ),
            ],
        ),
        v.Sheet(
            id="scroll-threshold-example",
            class_="overflow-y-auto pb-16",
            max_height=600,
            children=[v.Responsive(height=1500)],
        ),
    ],
)
