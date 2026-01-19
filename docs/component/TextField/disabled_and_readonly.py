import ipyvuetify as v

v.Container(
    children=[
        v.Row(
            children=[
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.TextField(
                            value="John Doe",
                            label="Regular",
                            disabled=True,
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.TextField(
                            value="John Doe",
                            label="Regular",
                            readonly=True,
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.TextField(
                            value="John Doe",
                            label="Solo",
                            solo=True,
                            disabled=True,
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.TextField(
                            value="John Doe",
                            label="Solo",
                            solo=True,
                            readonly=True,
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.TextField(
                            value="John Doe",
                            label="Filled",
                            filled=True,
                            disabled=True,
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.TextField(
                            value="John Doe",
                            label="Filled",
                            filled=True,
                            readonly=True,
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.TextField(
                            value="John Doe",
                            label="Outlined",
                            outlined=True,
                            disabled=True,
                        )
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.TextField(
                            value="John Doe",
                            label="Outlined",
                            outlined=True,
                            readonly=True,
                        )
                    ],
                ),
            ]
        )
    ]
)
