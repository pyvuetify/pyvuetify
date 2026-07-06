import pyvuetify as v

v.Row(
    class_="justify-center",
    children=[
        v.Col(
            cols="auto",
            children=[
                v.RadioGroup(
                    v_model="color",
                    hide_details=True,
                    inline=True,
                    children=[
                        v.Radio(
                            color="indigo",
                            label="indigo",
                            value="indigo",
                        ),
                        v.Radio(
                            color="indigo-darken-3",
                            label="indigo-darken-3",
                            value="indigo-darken-3",
                        ),
                        v.Radio(
                            color="primary",
                            label="primary",
                            value="primary",
                        ),
                        v.Radio(
                            color="secondary",
                            label="secondary",
                            value="secondary",
                        ),
                    ],
                ),
            ],
        ),
        v.Col(
            # JS expression, needs manual conversion
            key="col-{i}",
            cols="12",
            md="6",
            children=[
                v.Card(
                    # JS expression, needs manual conversion
                    color="{color}",
                    # JS expression, needs manual conversion
                    variant="{variant}",
                    class_="mx-auto",
                    children=[
                        v.CardItem(
                            children=[
                                v.Html(
                                    tag="div",
                                    children=[
                                        v.Html(
                                            tag="div",
                                            class_="text-label-medium text-uppercase mt-2 mb-3",
                                            children=["{variant}"],
                                        ),
                                        v.Html(
                                            tag="div",
                                            class_="text-title-large mb-1",
                                            children=["Headline"],
                                        ),
                                        v.Html(
                                            tag="div",
                                            class_="text-body-small",
                                            children=["Greyhound divisely hello coldly fonwderfully"],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                        v.CardActions(
                            children=[
                                v.Btn(children=["Button"]),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
