import ipyvuetify as v

v.Container(
    class_="text-center",
    children=[
        v.Dialog(
            v_model=False,
            max_width=600,
            children=[
                v.Card(
                    children=[
                        v.CardTitle(
                            class_="text-h5",
                            children=["User Profile"],
                        ),
                        v.CardText(
                            children=[
                                v.Container(
                                    children=[
                                        v.Row(
                                            children=[
                                                v.Col(
                                                    cols=12,
                                                    sm=6,
                                                    md=4,
                                                    children=[
                                                        v.TextField(
                                                            label="Legal first name*",
                                                            required=True,
                                                        )
                                                    ],
                                                ),
                                                v.Col(
                                                    cols=12,
                                                    sm=6,
                                                    md=4,
                                                    children=[
                                                        v.TextField(
                                                            label="Legal middle name",
                                                            hint="example of helper text only on focus",
                                                        )
                                                    ],
                                                ),
                                                v.Col(
                                                    cols=12,
                                                    sm=6,
                                                    md=4,
                                                    children=[
                                                        v.TextField(
                                                            label="Legal last name*",
                                                            hint="example of persistent helper text",
                                                            persistent_hint=True,
                                                            required=True,
                                                        )
                                                    ],
                                                ),
                                                v.Col(
                                                    cols=12,
                                                    children=[
                                                        v.TextField(
                                                            label="Email*",
                                                            required=True,
                                                        )
                                                    ],
                                                ),
                                                v.Col(
                                                    cols=12,
                                                    children=[
                                                        v.TextField(
                                                            label="Password*",
                                                            type_="password",
                                                            required=True,
                                                        )
                                                    ],
                                                ),
                                                v.Col(
                                                    cols=12,
                                                    sm=6,
                                                    children=[
                                                        v.Select(
                                                            items=["0-17", "18-29", "30-54", "54+"],
                                                            label="Age*",
                                                            required=True,
                                                        )
                                                    ],
                                                ),
                                                v.Col(
                                                    cols=12,
                                                    sm=6,
                                                    children=[
                                                        v.Autocomplete(
                                                            items=[
                                                                "Skiing",
                                                                "Ice hockey",
                                                                "Soccer",
                                                                "Basketball",
                                                                "Hockey",
                                                                "Reading",
                                                                "Writing",
                                                                "Coding",
                                                                "Basejump",
                                                            ],
                                                            label="Interests",
                                                            multiple=True,
                                                        )
                                                    ],
                                                ),
                                            ]
                                        ),
                                    ]
                                )
                            ]
                        ),
                        v.CardActions(
                            children=[
                                v.Spacer(),
                                v.Btn(
                                    text=True,
                                    color="blue darken-1",
                                    children=["Close"],
                                ),
                                v.Btn(
                                    text=True,
                                    color="blue darken-1",
                                    children=["Save"],
                                ),
                            ]
                        ),
                    ]
                )
            ],
            v_slots=[
                {
                    "name": "activator",
                    "variable": "dialog",
                    "children": v.Btn(
                        children=["Open Dialog"],
                        color="primary",
                        v_bind="dialog.attrs",
                        v_on="dialog.on",
                    ),
                }
            ],
        )
    ],
)
