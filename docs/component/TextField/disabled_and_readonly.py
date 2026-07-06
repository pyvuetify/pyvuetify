import pyvuetify as v

v.Form(
    children=[
        v.Container(
            children=[
                v.Row(
                    children=[
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="Regular",
                                    model_value="John Doe",
                                    disabled=True,
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="Regular",
                                    model_value="John Doe",
                                    readonly=True,
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="Solo",
                                    model_value="John Doe",
                                    variant="solo",
                                    disabled=True,
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="Solo",
                                    model_value="John Doe",
                                    variant="solo",
                                    readonly=True,
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="Outlined",
                                    model_value="John Doe",
                                    variant="outlined",
                                    disabled=True,
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="Outlined",
                                    model_value="John Doe",
                                    variant="outlined",
                                    readonly=True,
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="underlined",
                                    model_value="John Doe",
                                    variant="underlined",
                                    disabled=True,
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="underlined",
                                    model_value="John Doe",
                                    variant="underlined",
                                    readonly=True,
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
