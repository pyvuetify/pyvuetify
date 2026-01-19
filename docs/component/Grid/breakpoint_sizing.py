import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            key=n,
            class_="mb-6" if n == 1 else "",
            no_gutters=True,
            children=[
                v.Col(
                    key=k,
                    children=[
                        v.Card(
                            class_="pa-2", outlined=True, tile=True, children=[f"{k} of {n + 1}"]
                        )
                    ],
                )
                for k in range(1, n + 2)
            ],
        )
        for n in range(1, 3)
    ],
)
