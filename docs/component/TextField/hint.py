import ipyvuetify as v

v.Container(
    children=[
        v.Form(
            children=[
                v.Row(
                    children=[
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="Your product or service",
                                    value="Grocery delivery",
                                    hint="For example, flowers or used cars",
                                )
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="Your landing page",
                                    hint="www.example.com/page",
                                    persistent_hint=True,
                                )
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="Your product or service",
                                    value="Grocery delivery",
                                    hint="For example, flowers or used cars",
                                    filled=True,
                                )
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="Your landing page",
                                    hint="www.example.com/page",
                                    persistent_hint=True,
                                    filled=True,
                                )
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="Your product or service",
                                    value="Grocery delivery",
                                    hint="For example, flowers or used cars",
                                    outlined=True,
                                )
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    label="Your landing page",
                                    hint="www.example.com/page",
                                    persistent_hint=True,
                                    outlined=True,
                                )
                            ],
                        ),
                    ]
                )
            ]
        )
    ]
)
