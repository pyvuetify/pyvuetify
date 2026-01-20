import ipyvuetify as v

colors = ["red", "red darken-3", "indigo", "indigo darken-3", "orange", "orange darken-3"]
theme = ["primary", "secondary", "success", "info", "warning", "error"]

v.Card(
    flat=True,
    children=[
        v.CardText(
            children=[
                v.Container(
                    fluid=True,
                    children=[
                        v.Row(
                            children=[
                                v.Col(
                                    cols=12,
                                    sm=6,
                                    md=6,
                                    children=[
                                        v.RadioGroup(
                                            v_model=colors[0],
                                            column=True,
                                            children=[
                                                v.Radio(
                                                    label=color,
                                                    color=color,
                                                    value=color,
                                                )
                                                for color in colors
                                            ],
                                        )
                                    ],
                                ),
                                v.Col(
                                    cols=12,
                                    sm=6,
                                    md=6,
                                    children=[
                                        v.RadioGroup(
                                            v_model=theme[0],
                                            column=True,
                                            children=[
                                                v.Radio(
                                                    label=t,
                                                    color=t,
                                                    value=t,
                                                )
                                                for t in theme
                                            ],
                                        )
                                    ],
                                ),
                            ]
                        )
                    ],
                )
            ]
        )
    ],
)
