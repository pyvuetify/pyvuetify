import ipyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Card(
            class_="d-flex mb-6",
            color="grey lighten-2",
            flat=True,
            height="100",
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["flex item"]),
                v.Card(
                    class_="pa-2 align-self-start",
                    outlined=True,
                    tile=True,
                    children=["Aligned start"],
                ),
                v.Card(class_="pa-2", outlined=True, tile=True, children=["flex item"]),
            ],
        ),
        v.Card(
            class_="d-flex mb-6",
            color="grey lighten-2",
            flat=True,
            height="100",
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["flex item"]),
                v.Card(
                    class_="pa-2 align-self-center",
                    outlined=True,
                    tile=True,
                    children=["Aligned center"],
                ),
                v.Card(class_="pa-2", outlined=True, tile=True, children=["flex item"]),
            ],
        ),
        v.Card(
            class_="d-flex mb-6",
            color="grey lighten-2",
            flat=True,
            height="100",
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["flex item"]),
                v.Card(
                    class_="pa-2 align-self-end", outlined=True, tile=True, children=["Aligned end"]
                ),
                v.Card(class_="pa-2", outlined=True, tile=True, children=["flex item"]),
            ],
        ),
        v.Card(
            class_="d-flex mb-6",
            color="grey lighten-2",
            flat=True,
            height="100",
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["flex item"]),
                v.Card(
                    class_="pa-2 align-self-baseline",
                    outlined=True,
                    tile=True,
                    children=["Aligned baseline"],
                ),
                v.Card(class_="pa-2", outlined=True, tile=True, children=["flex item"]),
            ],
        ),
        v.Card(
            class_="d-flex mb-6",
            color="grey lighten-2",
            flat=True,
            height="100",
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["flex item"]),
                v.Card(
                    class_="pa-2 align-self-auto",
                    outlined=True,
                    tile=True,
                    children=["Aligned auto"],
                ),
                v.Card(class_="pa-2", outlined=True, tile=True, children=["flex item"]),
            ],
        ),
        v.Card(
            class_="d-flex mb-6",
            color="grey lighten-2",
            flat=True,
            height="100",
            tile=True,
            children=[
                v.Card(class_="pa-2", outlined=True, tile=True, children=["flex item"]),
                v.Card(
                    class_="pa-2 align-self-stretch",
                    outlined=True,
                    tile=True,
                    children=["Aligned stretch"],
                ),
                v.Card(class_="pa-2", outlined=True, tile=True, children=["flex item"]),
            ],
        ),
    ],
)
