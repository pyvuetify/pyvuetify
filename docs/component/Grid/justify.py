import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            key=j,
            justify=j,
            children=[
                v.Col(
                    md=4,
                    children=[
                        v.Card(
                            class_="pa-2", outlined=True, tile=True, children=["One of two columns"]
                        )
                    ],
                )
                for k in range(2)
            ],
        )
        for j in ["start", "center", "end", "space-between", "space-around", "space-evenly"]
    ],
)
