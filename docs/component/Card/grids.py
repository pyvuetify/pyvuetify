import ipyvuetify as v

data = [
    {
        "title": "Pre-fab homes",
        "src": "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        "flex": 12,
    },
    {
        "title": "Favorite road trips",
        "src": "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        "flex": 6,
    },
    {
        "title": "Best airlines",
        "src": "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        "flex": 6,
    },
]

v.Card(
    class_="mx-auto my-2",
    max_width=500,
    children=[
        v.SystemBar(
            color="indigo darken-2",
            dark=True,
            children=[
                v.Spacer(),
                v.Icon(children=["mdi-window-minimize"]),
                v.Icon(children=["mdi-window-maximize"]),
                v.Icon(children=["mdi-close"]),
            ],
        ),
        v.Toolbar(
            color="indigo",
            dark=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Discover"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
            ],
        ),
        v.Container(
            fluid=True,
            children=[
                v.Row(
                    dense=True,
                    children=[
                        v.Col(
                            cols=card["flex"],
                            children=[
                                v.Card(
                                    children=[
                                        v.Img(
                                            src=card["src"],
                                            class_="white--text align-end",
                                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                            height="200px",
                                            children=[v.CardTitle(v_text=card["title"])],
                                        ),
                                        v.CardActions(
                                            children=[
                                                v.Spacer(),
                                                v.Btn(
                                                    icon=True,
                                                    children=[v.Icon(children=["mdi-heart"])],
                                                ),
                                                v.Btn(
                                                    icon=True,
                                                    children=[v.Icon(children=["mdi-bookmark"])],
                                                ),
                                                v.Btn(
                                                    icon=True,
                                                    children=[
                                                        v.Icon(children=["mdi-share-variant"])
                                                    ],
                                                ),
                                            ]
                                        ),
                                    ]
                                )
                            ],
                        )
                        for card in data
                    ],
                )
            ],
        ),
    ],
)
