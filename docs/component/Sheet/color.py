import ipyvuetify as v

colors = ["red lighten-3", "pink lighten-3", "purple lighten-3", "deep-purple lighten-3"]

v.Container(
    children=[
        v.Row(
            justify="space-around",
            children=[
                v.Col(
                    cols=12,
                    md=4,
                    children=[
                        v.Sheet(
                            class_="pa-12",
                            color="grey lighten-3",
                            children=[
                                v.Sheet(
                                    color=color,
                                    elevation=12,
                                    class_="mx-auto",
                                    height=100,
                                    width=100,
                                )
                            ],
                        )
                    ],
                )
                for color in colors
            ],
        )
    ]
)
