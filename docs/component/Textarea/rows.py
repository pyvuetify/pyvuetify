import pyvuetify as v

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
                            row_height="15",
                            rows="1",
                            variant="outlined",
                            auto_grow=True,
                        ),
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.Textarea(
                            label="Two rows",
                            row_height="20",
                            rows="2",
                            variant="filled",
                            auto_grow=True,
                        ),
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.Textarea(
                            label="Three rows",
                            row_height="25",
                            rows="3",
                            variant="outlined",
                            auto_grow=True,
                        ),
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.Textarea(
                            label="Four rows",
                            row_height="30",
                            rows="4",
                            variant="filled",
                            auto_grow=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
