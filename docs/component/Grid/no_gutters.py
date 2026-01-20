import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            no_gutters=True,
            children=[
                v.Col(
                    cols=12,
                    sm=6,
                    md=8,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[".col-12 .col-sm-6 .col-md-8"],
                        )
                    ],
                ),
                v.Col(
                    cols=6,
                    md=4,
                    children=[
                        v.Card(
                            class_="pa-2", outlined=True, tile=True, children=[".col-6 .col-md-4"]
                        )
                    ],
                ),
            ],
        )
    ],
)
