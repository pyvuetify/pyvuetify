import ipyvuetify as v

v.Card(
    children=[
        v.Container(
            fluid=True,
            children=[
                v.Row(
                    align="center",
                    children=[
                        v.Col(
                            cols=12,
                            children=[
                                v.Autocomplete(
                                    v_model=["foo", "bar"],
                                    items=["foo", "bar", "fizz", "buzz"],
                                    outlined=True,
                                    dense=True,
                                    chips=True,
                                    small_chips=True,
                                    label="Outlined",
                                    multiple=True,
                                )
                            ],
                        ),
                        v.Col(
                            cols=12,
                            children=[
                                v.Autocomplete(
                                    v_model=["foo", "bar"],
                                    items=["foo", "bar", "fizz", "buzz"],
                                    dense=True,
                                    chips=True,
                                    small_chips=True,
                                    label="Solo",
                                    multiple=True,
                                    solo=True,
                                )
                            ],
                        ),
                        v.Col(
                            cols=12,
                            children=[
                                v.Autocomplete(
                                    items=["foo", "bar", "fizz", "buzz"],
                                    dense=True,
                                    filled=True,
                                    label="Filled",
                                )
                            ],
                        ),
                    ],
                )
            ],
        )
    ]
)
