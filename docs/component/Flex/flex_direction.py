import ipyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Card(
            class_="d-flex flex-row mb-6",
            color="grey lighten-4",
            flat=True,
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=[f"Flex item {n}"])
                for n in range(1, 4)
            ],
        ),
        v.Card(
            class_="d-flex flex-row-reverse",
            color="grey lighten-4",
            flat=True,
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=[f"Flex item {n}"])
                for n in range(1, 4)
            ],
        ),
    ],
)
