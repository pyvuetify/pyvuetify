import pyvuetify as v

v.Row(
    children=[
        v.Col(
            children=[
                v.Sheet(
                    height="500",
                    children=[
                        v.Calendar(
                            # JS expression, needs manual conversion
                            model_value="today",
                            # JS expression, needs manual conversion
                            now="today",
                            color="primary",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Row(
                                            class_="fill-height",
                                            children=[
                                                v.Html(
                                                    tag="template",
                                                    children=[
                                                        v.Sheet(
                                                            # JS expression, needs manual conversion
                                                            key="i",
                                                            # JS expression, needs manual conversion
                                                            color="colors[i]",
                                                            # JS expression, needs manual conversion
                                                            title="category[i]",
                                                            # JS expression, needs manual conversion
                                                            width="`${percent}%`",
                                                            height="100%",
                                                            tile=True,
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
