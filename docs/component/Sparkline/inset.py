import pyvuetify as v

v.Container(
    children=[
        v.Card(
            class_="pa-5 mx-auto",
            color="#0a0a1a",
            height="190",
            rounded="lg",
            width="388",
            children=[
                v.Html(
                    tag="div",
                    class_="d-flex align-start mb-2",
                    children=[
                        v.Html(
                            tag="div",
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="text-body-medium font-weight-bold text-cyan",
                                    children=["Expenses YTD"],
                                ),
                            ],
                        ),
                        v.Html(
                            tag="div",
                            class_="font-weight-bold ml-auto",
                            children=["${{ sum }}"],
                        ),
                    ],
                ),
                v.Sparkline(
                    gradient=["#00e5ff99", "#00e5ff11"],
                    # JS expression, needs manual conversion
                    model_value="values",
                    # JS expression, needs manual conversion
                    tooltip="{ class: 'pl-0 bg-grey-darken-4' }",
                    class_="mb-n1",
                    color="cyan",
                    height="125",
                    line_width="1",
                    marker_size="10",
                    marker_stroke="#0a0a1a",
                    min="0",
                    style_="position: absolute; left: 0px; bottom: 0px; height: 125px;",
                    width="388",
                    auto_draw=True,
                    fill=True,
                    inset=True,
                    interactive=True,
                    show_markers=True,
                    smooth=True,
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.ListItem(
                                    density="compact",
                                    lines="two",
                                    children=[
                                        v.Html(
                                            tag="template",
                                            children=[
                                                v.Avatar(
                                                    color=(
                                                        "trend[index] === 'up' ? 'success' : 'warning'"
                                                        # JS expression, needs manual conversion
                                                    ),
                                                    variant="tonal",
                                                    children=[
                                                        v.Icon(
                                                            # JS expression, needs manual conversion
                                                            icon="trend[index] === 'up' ? 'mdi-arrow-up' : 'mdi-arrow-down'",  # noqa: E501
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
    ],
)
