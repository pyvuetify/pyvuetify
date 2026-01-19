import ipyvuetify as v

v.Container(
    children=[
        v.Row(
            children=[
                v.Col(
                    cols=4,
                    children=[
                        v.Checkbox(
                            v_model="red",
                            label="red",
                            color="red",
                            value="red",
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model="red darken-3",
                            label="red darken-3",
                            color="red darken-3",
                            value="red darken-3",
                            hide_details=True,
                        ),
                    ],
                ),
                v.Col(
                    cols=4,
                    children=[
                        v.Checkbox(
                            v_model="indigo",
                            label="indigo",
                            color="indigo",
                            value="indigo",
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model="indigo darken-3",
                            label="indigo darken-3",
                            color="indigo darken-3",
                            value="indigo darken-3",
                            hide_details=True,
                        ),
                    ],
                ),
                v.Col(
                    cols=4,
                    children=[
                        v.Checkbox(
                            v_model="orange",
                            label="orange",
                            color="orange",
                            value="orange",
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model="orange darken-3",
                            label="orange darken-3",
                            color="orange darken-3",
                            value="orange darken-3",
                            hide_details=True,
                        ),
                    ],
                ),
            ]
        ),
        v.Row(
            class_="mt-12",
            children=[
                v.Col(
                    cols=4,
                    children=[
                        v.Checkbox(
                            v_model="primary",
                            label="primary",
                            color="primary",
                            value="primary",
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model="secondary",
                            label="secondary",
                            color="secondary",
                            value="secondary",
                            hide_details=True,
                        ),
                    ],
                ),
                v.Col(
                    cols=4,
                    children=[
                        v.Checkbox(
                            v_model="success",
                            label="success",
                            color="success",
                            value="success",
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model="info",
                            label="info",
                            color="info",
                            value="info",
                            hide_details=True,
                        ),
                    ],
                ),
                v.Col(
                    cols=4,
                    children=[
                        v.Checkbox(
                            v_model="warning",
                            label="warning",
                            color="warning",
                            value="warning",
                            hide_details=True,
                        ),
                        v.Checkbox(
                            v_model="error",
                            label="error",
                            color="error",
                            value="error",
                            hide_details=True,
                        ),
                    ],
                ),
            ],
        ),
    ]
)
