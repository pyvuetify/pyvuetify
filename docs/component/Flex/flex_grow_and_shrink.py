import ipyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Container(
            class_="grey lighten-5",
            children=[
                v.Row(
                    no_gutters=True,
                    style_="flex-wrap: nowrap;",
                    children=[
                        v.Col(
                            cols=2,
                            class_="flex-grow-0 flex-shrink-0",
                            children=[
                                v.Card(
                                    class_="pa-2",
                                    outlined=True,
                                    tile=True,
                                    children=["I'm 2 column wide"],
                                )
                            ],
                        ),
                        v.Col(
                            cols=1,
                            style_="min-width: 100px; max-width: 100%;",
                            class_="flex-grow-1 flex-shrink-0",
                            children=[
                                v.Card(
                                    class_="pa-2",
                                    outlined=True,
                                    tile=True,
                                    children=["I'm 1 column wide and I grow to take all the space"],
                                )
                            ],
                        ),
                        v.Col(
                            cols=5,
                            style_="min-width: 100px;",
                            class_="flex-grow-0 flex-shrink-1",
                            children=[
                                v.Card(
                                    class_="pa-2",
                                    outlined=True,
                                    tile=True,
                                    children=[
                                        "I'm 5 column wide and I shrink if there's not enough space"
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
