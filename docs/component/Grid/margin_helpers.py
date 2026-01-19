import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            children=[
                v.Col(
                    md=4,
                    children=[
                        v.Card(class_="pa-2", outlined=True, tile=True, children=[".col-md-4"])
                    ],
                ),
                v.Col(
                    md=4,
                    class_="ml-auto",
                    children=[
                        v.Card(
                            class_="pa-2", outlined=True, tile=True, children=[".col-md-4 .ml-auto"]
                        )
                    ],
                ),
            ]
        ),
        v.Row(
            children=[
                v.Col(
                    md=3,
                    class_="ml-md-auto",
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[".col-md-3 .ml-md-auto"],
                        )
                    ],
                ),
                v.Col(
                    md=3,
                    class_="ml-md-auto",
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[".col-md-3 .ml-md-auto"],
                        )
                    ],
                ),
            ]
        ),
        v.Row(
            children=[
                v.Col(
                    cols="auto",
                    class_="mr-auto",
                    children=[
                        v.Card(
                            class_="pa-2", outlined=True, tile=True, children=[".col-auto .mr-auto"]
                        )
                    ],
                ),
                v.Col(
                    cols="auto",
                    children=[
                        v.Card(class_="pa-2", outlined=True, tile=True, children=[".col-auto"])
                    ],
                ),
            ]
        ),
    ],
)
