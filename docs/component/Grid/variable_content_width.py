import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            class_="mb-6",
            justify="center",
            no_gutters=True,
            children=[
                v.Col(
                    lg=2,
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=["1 of 3"])],
                ),
                v.Col(
                    md="auto",
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=["Variable width content"],
                        )
                    ],
                ),
                v.Col(
                    lg=2,
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=["3 of 3"])],
                ),
            ],
        ),
        v.Row(
            no_gutters=True,
            children=[
                v.Col(
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=["1 of 3"])]
                ),
                v.Col(
                    md="auto",
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=["Variable width content"],
                        )
                    ],
                ),
                v.Col(
                    lg=2,
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=["3 of 3"])],
                ),
            ],
        ),
    ],
)
