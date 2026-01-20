import ipyvuetify as v

v.Container(
    children=[
        v.Row(
            justify="space-between",
            children=[
                v.Col(
                    cols=12,
                    md=4,
                    children=[
                        v.Form(
                            ref="form",
                            children=[
                                v.TextField(
                                    v_model="",
                                    counter=20,
                                    # rules will be set in Vue template
                                    label="First name",
                                )
                            ],
                        )
                    ],
                ),
                v.Col(
                    cols=12,
                    md=6,
                    children=[
                        v.Slider(
                            v_model=20,
                            label="Max characters",
                        ),
                        v.Checkbox(
                            v_model=True,
                            label="Allow spaces",
                        ),
                        v.TextField(
                            v_model="",
                            label="Value must match",
                        ),
                    ],
                ),
            ],
        )
    ]
)
