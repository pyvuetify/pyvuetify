import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            class_="mb-6",
            no_gutters=True,
            children=[
                v.Col(
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=["1 of 3"])]
                ),
                v.Col(
                    cols=6,
                    children=[
                        v.Card(class_="pa-2", outlined=True, tile=True, children=["2 of 3 (wider)"])
                    ],
                ),
                v.Col(
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=["3 of 3"])]
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
                    cols=5,
                    children=[
                        v.Card(class_="pa-2", outlined=True, tile=True, children=["2 of 3 (wider)"])
                    ],
                ),
                v.Col(
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=["3 of 3"])]
                ),
            ],
        ),
    ],
)
