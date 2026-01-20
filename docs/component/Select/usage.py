import ipyvuetify as v

items = [f"Item {i}" for i in range(1, 6)]

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
                            label="Outlined style",
                            outlined=True,
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
                        ),
                    ],
                ),
            ],
        )
    ],
)
