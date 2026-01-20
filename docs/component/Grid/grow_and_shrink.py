import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            class_="mb-6",
            no_gutters=True,
            children=[
                v.Col(children=[v.Card(class_="pa-2", outlined=True, tile=True, children=["col"])])
                for n in range(4)
            ],
        ),
        v.Row(
            no_gutters=True,
            children=[
                v.Col(
                    cols=8 if n == 1 else 4,
                    children=[
                        v.Card(
                            class_="pa-2",
                            outlined=True,
                            tile=True,
                            children=[f"col-{8 if n == 1 else 4}"],
                        )
                    ],
                )
                for n in range(2)
            ],
        ),
    ],
)
