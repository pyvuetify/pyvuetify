import ipyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Card(
            class_="d-flex align-content-space-between flex-wrap",
            color="grey lighten-2",
            flat=True,
            tile=True,
            min_height="200",
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["Flex item"])
                for _ in range(20)
            ],
        )
    ],
)
