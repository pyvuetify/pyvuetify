import ipyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Card(
            class_="d-flex mb-6",
            color="grey lighten-2",
            flat=True,
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["Flex item"])
                for _ in range(3)
            ],
        ),
        v.Card(
            class_="d-flex mb-6",
            color="grey lighten-2",
            flat=True,
            tile=True,
            children=[
                v.Card(class_="pa-2 mr-auto", outlined=True, tile=True, children=["Flex item"]),
                v.Card(class_="pa-2", outlined=True, tile=True, children=["Flex item"]),
                v.Card(class_="pa-2", outlined=True, tile=True, children=["Flex item"]),
            ],
        ),
        v.Card(
            class_="d-flex",
            color="grey lighten-2",
            flat=True,
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["Flex item"]),
                v.Card(class_="pa-2", outlined=True, tile=True, children=["Flex item"]),
                v.Card(class_="pa-2 ml-auto", outlined=True, tile=True, children=["Flex item"]),
            ],
        ),
    ],
)
