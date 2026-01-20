import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            no_gutters=True,
            children=[
                v.Col(
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=["First, but unordered"],
                        )
                    ]
                ),
                v.Col(
                    order=12,
                    children=[
                        v.Card(
                            class_="pa-2", outlined=True, tile=True, children=["Second, but last"]
                        )
                    ],
                ),
                v.Col(
                    order=1,
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
