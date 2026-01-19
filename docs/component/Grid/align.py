import ipyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Container(
            class_="ma-0",
            children=[
                v.Row(
                    class_="grey lighten-5 mb-3",
                    align=align,
                    no_gutters=True,
                    style_="height: 150px;",
                    children=[
                        v.Col(
                            children=[
                                v.Card(
                                    class_="pa-2 ma-2",
                                    outlined=True,
                                    tile=True,
                                    children=["One of three columns"],
                                )
                            ]
                        )
                        for n in range(3)
                    ],
                )
                for align in ["start", "center", "end", "stretch"]
            ]
            + [
                v.Row(
                    class_="grey lighten-5",
                    no_gutters=True,
                    style_="height: 150px;",
                    children=[
                        v.Col(
                            align_self=align,
                            children=[
                                v.Card(
                                    class_="pa-2 ma-2",
                                    outlined=True,
                                    tile=True,
                                    children=["One of three columns"],
                                )
                            ],
                        )
                        for align in ["start", "center", "end"]
                    ],
                )
            ],
        )
    ],
)
