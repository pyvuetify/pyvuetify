import ipyvuetify as v

v.Card(
    class_="mx-auto",
    max_width=434,
    tile=True,
    children=[
        v.Img(
            height="100%",
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg",
            children=[
                v.Row(
                    align="end",
                    class_="fill-height",
                    children=[
                        v.Col(
                            align_self="start",
                            class_="pa-0",
                            cols=12,
                            children=[
                                v.Avatar(
                                    class_="profile",
                                    color="grey",
                                    size=164,
                                    tile=True,
                                    children=[
                                        v.Img(
                                            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                                        )
                                    ],
                                )
                            ],
                        ),
                        v.Col(
                            class_="py-0",
                            children=[
                                v.ListItem(
                                    color="rgba(0, 0, 0, .4)",
                                    dark=True,
                                    children=[
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(
                                                    class_="text-h6", children=["Marcus Obrien"]
                                                ),
                                                v.ListItemSubtitle(children=["Network Engineer"]),
                                            ]
                                        )
                                    ],
                                )
                            ],
                        ),
                    ],
                )
            ],
        )
    ],
)
