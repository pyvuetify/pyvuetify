import ipyvuetify as v

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
                                    elevation=elevation, class_="mx-auto", height=100, width=100
                                )
                            ],
                        )
                    ],
                )
                for elevation in [6, 12, 24]
            ],
        )
    ]
)
