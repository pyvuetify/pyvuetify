import ipyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Card(
            class_="d-flex align-start flex-column mb-6",
            color="grey lighten-2",
            flat=True,
            tile=True,
            height="200",
            children=[
                v.Card(class_="pa-2 mb-auto", outlined=True, tile=True, children=["Flex item"]),
                v.Card(class_="pa-2", outlined=True, tile=True, children=["Flex item"]),
                v.Card(class_="pa-2", outlined=True, tile=True, children=["Flex item"]),
            ],
        ),
        v.Card(
            class_="d-flex align-end flex-column",
            color="grey lighten-2",
            flat=True,
            tile=True,
            height="200",
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["Flex item"]),
                v.Card(class_="pa-2", outlined=True, tile=True, children=["Flex item"]),
                v.Card(class_="pa-2 mt-auto", outlined=True, tile=True, children=["Flex item"]),
            ],
        ),
    ],
)
