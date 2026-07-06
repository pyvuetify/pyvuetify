import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Sparkline(
            # JS expression, needs manual conversion
            fill="fill",
            # JS expression, needs manual conversion
            gradient="selectedGradient",
            # JS expression, needs manual conversion
            line_width="lineWidth",
            # JS expression, needs manual conversion
            model_value="value",
            # JS expression, needs manual conversion
            padding="padding",
            # JS expression, needs manual conversion
            smooth="smooth",
            auto_draw=True,
        ),
        v.Divider(),
        v.Row(
            children=[
                v.Col(
                    cols="12",
                    md="6",
                    children=[
                        v.Row(
                            class_="fill-height align-center",
                            children=[
                                v.ItemGroup(
                                    v_model="selectedGradient",
                                    mandatory=True,
                                    children=[
                                        v.Row(
                                            class_="pt-6 pl-6",
                                            children=[
                                                v.Item(
                                                    # JS expression, needs manual conversion
                                                    key="i",
                                                    # JS expression, needs manual conversion
                                                    value="gradient",
                                                    children=[
                                                        v.Card(
                                                            style_="""{
                                                                background: gradient.length > 1
                                                                ? `linear-gradient(0deg, ${gradient})`
                                                                : gradient[0],
                                                                border: '2px solid',
                                                                borderColor: active ? '#222' : 'white'
                                                            # JS expression, needs manual conversion

                                                            }""",
                                                            class_="me-2",
                                                            height="30",
                                                            width="30",
                                                        ),
                                                    ],
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.Row(
            class_="mt-5",
            children=[
                v.Col(
                    cols="2",
                    children=["Filled"],
                ),
                v.Col(
                    cols="3",
                    children=[
                        v.Switch(
                            v_model="fill",
                            class_="switch",
                        ),
                    ],
                ),
                v.Col(
                    cols="3",
                    children=["Line width"],
                ),
                v.Col(
                    cols="3",
                    children=[
                        v.Slider(
                            v_model="lineWidth",
                            max="10",
                            min="0.1",
                            step="0.1",
                            thumb_label=True,
                        ),
                    ],
                ),
            ],
        ),
        v.Row(
            children=[
                v.Col(
                    cols="2",
                    children=["Smooth"],
                ),
                v.Col(
                    cols="3",
                    children=[
                        v.Switch(
                            v_model="smooth",
                            class_="switch",
                        ),
                    ],
                ),
                v.Col(
                    cols="3",
                    children=["Padding"],
                ),
                v.Col(
                    cols="3",
                    children=[
                        v.Slider(
                            v_model="padding",
                            cols="3",
                            max="25",
                            min="0",
                            thumb_label=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
