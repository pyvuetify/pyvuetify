import ipyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Card(
            class_="d-flex align-start mb-6",
            color="grey lighten-2",
            flat=True,
            height="100",
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["align-start"])
                for n in range(1, 4)
            ],
        ),
        v.Card(
            class_="d-flex align-end mb-6",
            color="grey lighten-2",
            flat=True,
            height="100",
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["align-end"])
                for n in range(1, 4)
            ],
        ),
        v.Card(
            class_="d-flex align-center mb-6",
            color="grey lighten-2",
            flat=True,
            height="100",
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["align-center"])
                for n in range(1, 4)
            ],
        ),
        v.Card(
            class_="d-flex align-baseline mb-6",
            color="grey lighten-2",
            flat=True,
            height="100",
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["align-baseline"])
                for n in range(1, 4)
            ],
        ),
        v.Card(
            class_="d-flex align-stretch mb-6",
            color="grey lighten-2",
            flat=True,
            height="100",
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["align-stretch"])
                for n in range(1, 4)
            ],
        ),
    ],
)
