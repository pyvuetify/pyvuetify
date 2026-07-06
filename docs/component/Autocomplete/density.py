import pyvuetify as v

v.Card(
    children=[
        v.Container(
            fluid=True,
            children=[
                v.Row(
                    children=[
                        v.Col(
                            cols="12",
                            children=[
                                v.Autocomplete(
                                    v_model="values",
                                    # JS expression, needs manual conversion
                                    items="items",
                                    label="Default",
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            children=[
                                v.Autocomplete(
                                    v_model="values",
                                    # JS expression, needs manual conversion
                                    items="items",
                                    density="comfortable",
                                    label="Comfortable",
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            children=[
                                v.Autocomplete(
                                    v_model="values",
                                    # JS expression, needs manual conversion
                                    items="items",
                                    density="compact",
                                    label="Compact",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
