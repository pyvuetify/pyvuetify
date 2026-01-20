import ipyvuetify as v

items = ["Foo", "Bar", "Fizz", "Buzz"]

v.Container(
    fluid=True,
    children=[
        v.Row(
            children=[
                v.Col(
                    class_="d-flex",
                    cols=12,
                    sm=6,
                    children=[
                        v.Select(
                            items=items,
                            label="Standard",
                            dense=True,
                        ),
                    ],
                ),
                v.Col(
                    class_="d-flex",
                    cols=12,
                    sm=6,
                    children=[
                        v.Select(
                            items=items,
                            filled=True,
                            label="Filled style",
                            dense=True,
                        )
                    ],
                ),
            ],
        ),
        v.Row(
            children=[
                v.Col(
                    class_="d-flex",
                    cols=12,
                    sm=6,
                    children=[
                        v.Select(
                            items=items,
                            label="Outlined style",
                            outlined=True,
                            dense=True,
                        ),
                    ],
                ),
                v.Col(
                    class_="d-flex",
                    cols=12,
                    sm=6,
                    children=[
                        v.Select(
                            items=items,
                            label="Solo field",
                            solo=True,
                            dense=True,
                        )
                    ],
                ),
            ],
        ),
    ],
)
