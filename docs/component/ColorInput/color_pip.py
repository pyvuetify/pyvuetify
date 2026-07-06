import pyvuetify as v

v.Container(
    children=[
        v.Row(
            children=[
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.ColorInput(
                            hide_details="auto",
                            label="Colored Pip",
                            model_value="#7C0799",
                            color_pip=True,
                            hide_actions=True,
                        ),
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.ColorInput(
                            hide_details="auto",
                            label="Colored Pip (tonal)",
                            model_value="#1493DB",
                            pip_variant="tonal",
                            color_pip=True,
                            hide_actions=True,
                        ),
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="6",
                    children=[
                        v.ColorInput(
                            hide_details="auto",
                            label="Colored Pip (flat)",
                            model_value="#74DB14",
                            pip_variant="flat",
                            color_pip=True,
                            hide_actions=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
