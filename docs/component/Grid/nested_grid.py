import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            children=[
                v.Col(
                    sm=9,
                    children=[
                        v.Card(
                            class_="pa-2", outlined=True, tile=True, children=["Level 1: .col-sm-9"]
                        ),
                        v.Row(
                            no_gutters=True,
                            children=[
                                v.Col(
                                    cols=8,
                                    sm=6,
                                    children=[
                                        v.Card(
                                            class_="pa-2",
                                            outlined=True,
                                            tile=True,
                                            style_="background-color: lightgrey;",
                                            children=["Level 2: .col-8 .col-sm-6"],
                                        )
                                    ],
                                ),
                                v.Col(
                                    cols=4,
                                    sm=6,
                                    children=[
                                        v.Card(
                                            class_="pa-2",
                                            outlined=True,
                                            tile=True,
                                            style_="background-color: lightgrey;",
                                            children=["Level 3: .col-4 .col-sm-6"],
                                        )
                                    ],
                                ),
                            ],
                        ),
                    ],
                )
            ]
        )
    ],
)
