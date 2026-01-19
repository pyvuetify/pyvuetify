import ipyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Card(
            class_="d-flex flex-wrap-reverse",
            color="grey lighten-2",
            flat=True,
            tile=True,
            children=[
                v.Card(
                    class_="order-3 pa-2", outlined=True, tile=True, children=["First flex item"]
                ),
                v.Card(
                    class_="order-1 pa-2", outlined=True, tile=True, children=["Second flex item"]
                ),
                v.Card(
                    class_="order-2 pa-2", outlined=True, tile=True, children=["Third flex item"]
                ),
            ],
        )
    ],
)
