import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            children=[
                v.Col(
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=[".col"])]
                ),
                v.Spacer(),
                v.Col(
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=[".col"])]
                ),
            ]
        ),
        v.Row(
            children=[
                v.Col(
                    cols="auto",
                    lg=3,
                    children=[
                        v.Card(class_="pa-2", outlined=True, tile=True, children=[".col-auto"])
                    ],
                ),
                v.Spacer(),
                v.Col(
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=[".col"])]
                ),
                v.Spacer(),
                v.Col(
                    md=5,
                    children=[
                        v.Card(
                            class_="pa-2",
                            cols="auto",
                            outlined=True,
                            tile=True,
                            children=[".col-md-5"],
                        )
                    ],
                ),
            ]
        ),
    ],
)
