import ipyvuetify as v

v.Html(
    class_="ma-2",
    tag="div",
    children=[
        v.Card(
            class_="d-flex justify-start mb-6",
            color="grey lighten-4",
            flat=True,
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["justify-start"])
                for n in range(1, 4)
            ],
        ),
        v.Card(
            class_="d-flex justify-end mb-6",
            color="grey lighten-4",
            flat=True,
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["justify-end"])
                for n in range(1, 4)
            ],
        ),
        v.Card(
            class_="d-flex justify-center mb-6",
            color="grey lighten-4",
            flat=True,
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["justify-center"])
                for n in range(1, 4)
            ],
        ),
        v.Card(
            class_="d-flex justify-space-between mb-6",
            color="grey lighten-4",
            flat=True,
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["justify-space-between"])
                for n in range(1, 4)
            ],
        ),
        v.Card(
            class_="d-flex justify-space-around mb-6",
            color="grey lighten-4",
            flat=True,
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["justify-space-around"])
                for n in range(1, 4)
            ],
        ),
    ],
)
