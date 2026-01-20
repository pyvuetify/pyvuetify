import ipyvuetify as v

text = [
    "Preliminary report",
    "California is a state in the western United States",
    "Preliminary report",
    "Preliminary report",
]

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
                                    v_model=text[0],
                                    counter="25",
                                    hint="This field uses counter prop",
                                    label="Regular",
                                )
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    v_model=text[1],
                                    counter=True,
                                    maxlength="25",
                                    hint="This field uses maxlength attribute",
                                    label="Limit exceeded",
                                )
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    v_model=text[2],
                                    counter="5",
                                    hint="This field counts words instead of characters",
                                    label="Custom counter from prop",
                                    counter_value="v => v.trim().split(' ').length",
                                )
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    v_model=text[3],
                                    counter="5",
                                    hint="This field counts words instead of characters",
                                    label="Custom counter from slot",
                                    v_slots=[
                                        {
                                            "name": "counter",
                                            "children": v.Counter(
                                                value="v.trim().split(' ').length"
                                            ),
                                        }
                                    ],
                                )
                            ],
                        ),
                    ]
                )
            ]
        )
    ]
)
