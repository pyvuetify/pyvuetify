import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    width=600,
    children=[
        v.Toolbar(
            flat=True,
            dense=True,
            children=[
                v.ToolbarTitle(
                    children=[v.Html(tag="span", class_="subheading", children=["METRONOME"])]
                ),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-share-variant"])]),
            ],
        ),
        v.CardText(
            children=[
                v.Row(
                    class_="mb-4",
                    justify="space-between",
                    children=[
                        v.Col(
                            class_="text-left",
                            children=[
                                v.Html(tag="h1", class_="font-weight-light", children=["120"]),
                                v.Html(
                                    tag="span",
                                    class_="subheading font-weight-light mr-1",
                                    children=["BPM"],
                                ),
                                v.FadeTransition(
                                    children=[
                                        v.Avatar(
                                            class_="mb-1 v-avatar--metronome",
                                            size=12,
                                            color="purple",
                                            style={"animationDuration": "500ms"},
                                        )
                                    ]
                                ),
                            ],
                        ),
                        v.Col(
                            class_="text-right",
                            children=[
                                v.Btn(
                                    depressed=True,
                                    fab=True,
                                    color="purple",
                                    dark=True,
                                    children=[v.Icon(large=True, children=["mdi-play"])],
                                )
                            ],
                        ),
                    ],
                ),
                v.Slider(
                    v_model=120,
                    color="purple",
                    track_color="grey lighten-2",
                    class_="align-center",
                    min=40,
                    max=218,
                    v_slots=[
                        {
                            "name": "append",
                            "children": v.Icon(class_="mr-2", small=True, children=["mdi-plus"]),
                        },
                        {
                            "name": "prepend",
                            "children": v.Icon(class_="ml-2", small=True, children=["mdi-minus"]),
                        },
                    ],
                ),
            ]
        ),
    ],
)
