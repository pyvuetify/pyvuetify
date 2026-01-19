import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            class_="mb-6",
            no_gutters=True,
            children=[
                v.Col(
                    sm=5,
                    md=6,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[".col-sm-5 .col-md-6"],
                        )
                    ],
                ),
                v.Col(
                    sm=5,
                    offset_sm=2,
                    md=6,
                    offset_md=0,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[".col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0"],
                        )
                    ],
                ),
            ],
        ),
        v.Row(
            no_gutters=True,
            children=[
                v.Col(
                    sm=6,
                    md=5,
                    lg=6,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[".col-sm-6 .col-md-5 .col-lg-6"],
                        )
                    ],
                ),
                v.Col(
                    sm=6,
                    md=5,
                    offset_md=2,
                    lg=6,
                    offset_lg=0,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[".col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0"],
                        )
                    ],
                ),
            ],
        ),
    ],
)
