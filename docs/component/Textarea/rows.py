import ipyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Row(
            children=[
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.Textarea(
                            label="One row",
                            auto_grow=True,
                            outlined=True,
                            rows="1",
                            row_height="15",
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.Textarea(
                            filled=True,
                            auto_grow=True,
                            label="Two rows",
                            rows="2",
                            row_height="20",
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.Textarea(
                            label="Three rows",
                            auto_grow=True,
                            outlined=True,
                            rows="3",
                            row_height="25",
                            shaped=True,
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.Textarea(
                            filled=True,
                            auto_grow=True,
                            label="Four rows",
                            rows="4",
                            row_height="30",
                            shaped=True,
                        )
                    ],
                ),
            ],
        )
    ],
)
