import pyvuetify as v

v.Card(
    flat=True,
    children=[
        v.CardText(
            children=[
                v.Html(
                    tag="div",
                    class_="d-flex justify-center align-center ga-4 mb-6",
                    children=[
                        v.BtnToggle(
                            v_model="variant",
                            variant="outlined",
                            divided=True,
                            mandatory=True,
                            children=[
                                v.Btn(
                                    value="default",
                                    children=["Default"],
                                ),
                                v.Btn(
                                    value="inset",
                                    children=["Inset"],
                                ),
                                v.Btn(
                                    value="material",
                                    children=["Material"],
                                ),
                                v.Btn(
                                    value="square",
                                    children=["Square"],
                                ),
                            ],
                        ),
                        v.Checkbox(
                            v_model="icons",
                            label="Icons",
                            hide_details=True,
                        ),
                    ],
                ),
                v.Container(
                    fluid=True,
                    children=[
                        v.Row(
                            # JS expression, needs manual conversion
                            key="i",
                            # JS expression, needs manual conversion
                            class_="{ 'mt-12': i > 0 }",
                            children=[
                                v.Col(
                                    # JS expression, needs manual conversion
                                    key="j",
                                    cols="12",
                                    md="4",
                                    sm="4",
                                    children=[
                                        v.Switch(
                                            # JS expression, needs manual conversion
                                            key="color",
                                            v_model="ex11",
                                            # JS expression, needs manual conversion
                                            color="color",
                                            # JS expression, needs manual conversion
                                            label="color",
                                            # JS expression, needs manual conversion
                                            value="color",
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
)
