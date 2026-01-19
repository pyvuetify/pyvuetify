import ipyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="light--text",
            children=[
                v.Col(cols=4, children=["on"]),
                v.Col(cols=4, children=["off"]),
                v.Col(cols=4, children=["indeterminate"]),
            ],
        ),
        v.Row(
            children=[
                v.Col(
                    cols=4,
                    children=[
                        v.Checkbox(
                            input_value=True,
                            value=True,
                        ),
                    ],
                ),
                v.Col(
                    cols=4,
                    children=[
                        v.Checkbox(
                            value=False,
                        ),
                    ],
                ),
                v.Col(
                    cols=4,
                    children=[
                        v.Checkbox(
                            value=True,
                            indeterminate=True,
                        ),
                    ],
                ),
            ]
        ),
        v.Row(
            class_="light--text",
            children=[
                v.Col(cols=4, children=["on disabled"]),
                v.Col(cols=4, children=["off disabled"]),
            ],
        ),
        v.Row(
            children=[
                v.Col(
                    cols=4,
                    children=[
                        v.Checkbox(
                            input_value=True,
                            value=True,
                            disabled=True,
                        ),
                    ],
                ),
                v.Col(
                    cols=4,
                    children=[
                        v.Checkbox(
                            value=False,
                            disabled=True,
                        ),
                    ],
                ),
            ]
        ),
    ]
)
