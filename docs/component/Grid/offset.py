import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            class_="mb-6",
            no_gutters=True,
            children=[
                v.Col(
                    md=4,
                    children=[
                        v.Card(class_="pa-2", outlined=True, tile=True, children=[".col-md-4"])
                    ],
                ),
                v.Col(
                    md=4,
                    offset_md=4,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[".col-md-4 .offset-md-4"],
                        )
                    ],
                ),
            ],
        ),
        v.Row(
            class_="mb-6",
            no_gutters=True,
            children=[
                v.Col(
                    md=3,
                    offset_md=3,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[".col-md-3 .offset-md-3"],
                        )
                    ],
                ),
                v.Col(
                    md=3,
                    offset_md=3,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[".col-md-3 .offset-md-3"],
                        )
                    ],
                ),
            ],
        ),
        v.Row(
            no_gutters=True,
            children=[
                v.Col(
                    md=6,
                    offset_md=3,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[".col-md-6 .offset-md-3"],
                        )
                    ],
                )
            ],
        ),
    ],
)
