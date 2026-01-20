import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            children=[
                v.Col(
                    cols=12,
                    md=8,
                    children=[
                        v.Card(
                            class_="pa-2", outlined=True, tile=True, children=[".col-12 .col-md-8"]
                        )
                    ],
                ),
                v.Col(
                    cols=6,
                    md=4,
                    children=[
                        v.Card(
                            class_="pa-2", outlined=True, tile=True, children=[".col-6 .col-md-4"]
                        )
                    ],
                ),
            ]
        ),
        v.Row(
            children=[
                v.Col(
                    cols=6,
                    md=4,
                    children=[
                        v.Card(
                            class_="pa-2", outlined=True, tile=True, children=[".col-6 .col-md-4"]
                        )
                    ],
                )
                for _ in range(3)
            ]
        ),
        v.Row(
            children=[
                v.Col(
                    cols=6,
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=[".col-6"])],
                )
                for _ in range(2)
            ]
        ),
    ],
)
