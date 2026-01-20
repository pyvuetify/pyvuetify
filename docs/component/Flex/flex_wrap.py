import ipyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Card(
            class_="d-flex flex-nowrap py-3",
            color="grey lighten-2",
            flat=True,
            tile=True,
            width="125",
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["Flex item"])
                for _ in range(5)
            ],
        )
    ],
)
