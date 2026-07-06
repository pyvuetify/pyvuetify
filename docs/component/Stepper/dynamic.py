import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Card(
            class_="mb-4",
            children=[
                v.CardText(
                    children=[
                        v.Select(
                            v_model="steps",
                            items=[2, 3, 4, 5, 6],
                            label="# of steps",
                        ),
                    ],
                ),
            ],
        ),
        v.Stepper(
            v_model="e1",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.StepperHeader(
                            children=[
                                v.Html(
                                    tag="template",
                                    # JS expression, needs manual conversion
                                    key="`${n}-step`",
                                    children=[
                                        v.StepperItem(
                                            # JS expression, needs manual conversion
                                            complete="e1 > n",
                                            # JS expression, needs manual conversion
                                            step="`Step {{ n }}`",
                                            # JS expression, needs manual conversion
                                            value="n",
                                            editable=True,
                                        ),
                                        # JS expression, needs manual conversion
                                        v.Divider(key="n"),
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
