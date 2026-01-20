import ipyvuetify as v

v.Container(
    class_="fill-height",
    fluid=True,
    min_height="434px",
    children=[
        v.FadeTransition(
            mode="out-in",
            children=[
                v.Row(
                    children=[
                        v.Col(
                            cols=6,
                            children=[
                                v.Card(
                                    children=[
                                        v.Img(
                                            src="https://picsum.photos/350/165?random",
                                            height="125",
                                            class_="grey darken-4",
                                        ),
                                        v.CardTitle(class_="text-h6", children=["height"]),
                                    ]
                                )
                            ],
                        ),
                        v.Col(
                            cols=6,
                            children=[
                                v.Card(
                                    children=[
                                        v.Img(
                                            src="https://picsum.photos/350/165?random",
                                            height="125",
                                            contain=True,
                                            class_="grey darken-4",
                                        ),
                                        v.CardTitle(
                                            class_="text-h6", children=["height with contain"]
                                        ),
                                    ]
                                )
                            ],
                        ),
                        v.Col(
                            cols=6,
                            children=[
                                v.Card(
                                    children=[
                                        v.Img(
                                            src="https://picsum.photos/350/165?random",
                                            max_height="125",
                                            class_="grey darken-4",
                                        ),
                                        v.CardTitle(class_="text-h6", children=["max-height"]),
                                    ]
                                )
                            ],
                        ),
                        v.Col(
                            cols=6,
                            children=[
                                v.Card(
                                    children=[
                                        v.Img(
                                            src="https://picsum.photos/350/165?random",
                                            max_height="125",
                                            contain=True,
                                            class_="grey darken-4",
                                        ),
                                        v.CardTitle(
                                            class_="text-h6", children=["max-height with contain"]
                                        ),
                                    ]
                                )
                            ],
                        ),
                    ]
                )
            ],
        )
    ],
)
