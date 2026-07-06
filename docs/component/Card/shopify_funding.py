import pyvuetify as v

v.Container(
    children=[
        v.Card(
            children=[
                v.CardTitle(
                    children=[
                        v.Html(
                            tag="div",
                            class_="text-label-medium text-uppercase my-1",
                            children=["Progress"],
                        ),
                        v.Html(
                            tag="div",
                            class_="text-green-darken-3 text-display-medium font-weight-bold",
                            children=["90%"],
                        ),
                        v.Html(
                            tag="div",
                            class_="text-title-large text-medium-emphasis font-weight-regular",
                            children=["$2,938.00 remaining"],
                        ),
                    ],
                ),
                v.CardText(
                    class_="pt-2 mt-8",
                    children=[
                        v.Html(
                            tag="div",
                            # JS expression, needs manual conversion
                            style_="`right: calc(${review} - 32px)`",
                            class_="position-absolute mt-n8 text-body-small text-green-darken-3",
                            children=["Eligibility review"],
                        ),
                        v.ProgressLinear(
                            color="green-darken-3",
                            height="22",
                            model_value="90",
                            rounded="lg",
                            children=[
                                v.Badge(
                                    # JS expression, needs manual conversion
                                    style_="`right: ${review}`",
                                    class_="position-absolute",
                                    color="white",
                                    dot=True,
                                    inline=True,
                                ),
                            ],
                        ),
                        v.Html(
                            tag="div",
                            class_="d-flex justify-space-between py-3",
                            children=[
                                v.Html(
                                    tag="span",
                                    class_="text-green-darken-3 font-weight-medium",
                                    children=["$26,442.00 remitted"],
                                ),
                                v.Html(
                                    tag="span",
                                    class_="text-medium-emphasis",
                                    children=["$29,380.00 total"],
                                ),
                            ],
                        ),
                    ],
                ),
                v.Divider(),
                v.ListItem(
                    append_icon="mdi-chevron-right",
                    lines="two",
                    subtitle="Details and agreement",
                    link=True,
                ),
            ],
        ),
    ],
)
