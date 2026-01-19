import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            no_gutters=True,
            children=[
                v.Col(
                    cols=12,
                    sm=4,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=["One of three columns"],
                        )
                    ],
                )
                for n in range(3)
            ],
        )
    ],
)
