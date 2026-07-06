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
                                    hint="For example, flowers or used cars",
                                    label="Your product or service",
                                    model_value="Grocery delivery",
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    hint="www.example.com/page",
                                    label="Your landing page",
                                    persistent_hint=True,
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    hint="For example, flowers or used cars",
                                    label="Your product or service",
                                    model_value="Grocery delivery",
                                    variant="solo",
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    hint="www.example.com/page",
                                    label="Your landing page",
                                    variant="solo",
                                    persistent_hint=True,
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    hint="For example, flowers or used cars",
                                    label="Your product or service",
                                    model_value="Grocery delivery",
                                    variant="outlined",
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    hint="www.example.com/page",
                                    label="Your landing page",
                                    variant="outlined",
                                    persistent_hint=True,
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
