import ipyvuetify as v

v.Row(
    children=[
        v.Col(
            cols=12,
            sm=6,
            offset_sm=3,
            children=[
                v.Card(
                    children=[
                        v.Toolbar(
                            color="white",
                            flat=True,
                            children=[
                                v.Btn(
                                    icon=True,
                                    light=True,
                                    children=[
                                        v.Icon(color="grey darken-2", children=["mdi-arrow-left"])
                                    ],
                                ),
                                v.ToolbarTitle(
                                    class_="grey--text text--darken-4", children=["Albums"]
                                ),
                                v.Spacer(),
                                v.Btn(
                                    icon=True,
                                    light=True,
                                    children=[
                                        v.Icon(color="grey darken-2", children=["mdi-magnify"])
                                    ],
                                ),
                            ],
                        ),
                        v.Subheader(children=["May"]),
                        v.Container(
                            fluid=True,
                            children=[
                                v.Row(
                                    children=[
                                        v.Col(
                                            cols=4,
                                            children=[
                                                v.Img(
                                                    src=f"https://randomuser.me/api/portraits/men/{i + 20}.jpg",
                                                    alt="lorem",
                                                    class_="image",
                                                    height="100%",
                                                    width="100%",
                                                )
                                            ],
                                        )
                                        for i in range(1, 7)
                                    ]
                                )
                            ],
                        ),
                        v.Subheader(children=["June"]),
                        v.Container(
                            fluid=True,
                            children=[
                                v.Row(
                                    children=[
                                        v.Col(
                                            cols=4,
                                            children=[
                                                v.Img(
                                                    src=f"https://randomuser.me/api/portraits/women/{i + 5}.jpg",
                                                    alt="lorem",
                                                    class_="image",
                                                    height="100%",
                                                    width="100%",
                                                )
                                            ],
                                        )
                                        for i in range(1, 7)
                                    ]
                                )
                            ],
                        ),
                        v.Footer(class_="mt-12"),
                    ]
                )
            ],
        )
    ]
)
