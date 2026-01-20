import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            no_gutters=True,
            children=[
                v.Col(
                    order="last",
                    children=[
                        v.Card(
                            class_="pa-2", outlined=True, tile=True, children=["First, but last"]
                        )
                    ],
                ),
                v.Col(
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=["Second, but unordered"],
                        )
                    ]
                ),
                v.Col(
                    order="first",
                    children=[
                        v.Card(
                            class_="pa-2", outlined=True, tile=True, children=["Third, but first"]
                        )
                    ],
                ),
            ],
        )
    ],
)
