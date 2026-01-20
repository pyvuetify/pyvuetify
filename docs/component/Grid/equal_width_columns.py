import ipyvuetify as v

v.Container(
    class_="grey lighten-5",
    children=[
        v.Row(
            no_gutters=True,
            children=[
                v.Col(
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=["Column"])]
                ),
                v.Col(
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=["Column"])]
                ),
                v.Responsive(v_if="n === 2", width="100%"),
                v.Col(
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=["Column"])]
                ),
                v.Col(
                    children=[v.Card(class_="pa-2", outlined=True, tile=True, children=["Column"])]
                ),
            ],
        )
    ],
)
