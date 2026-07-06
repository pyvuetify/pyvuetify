import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Html(
            tag="div",
            class_="text-center",
            children=[
                v.Btn(
                    class_="mb-12",
                    size="x-large",
                    children=["Toggle Loading"],
                ),
            ],
        ),
        v.Card(
            max_width="800",
            rounded="lg",
            theme="dark",
            children=[
                v.Container(
                    children=[
                        v.Row(
                            children=[
                                v.Col(
                                    # JS expression, needs manual conversion
                                    key="title",
                                    cols="12",
                                    lg="4",
                                    md="6",
                                    children=[
                                        v.SkeletonLoader(
                                            # JS expression, needs manual conversion
                                            loading="loading",
                                            height="240",
                                            type="image, list-item-two-line",
                                            children=[
                                                v.Responsive(
                                                    children=[
                                                        v.Img(
                                                            # JS expression, needs manual conversion
                                                            src="src",
                                                            class_="rounded-lg mb-2",
                                                            height="184",
                                                            cover=True,
                                                        ),
                                                        v.ListItem(
                                                            # JS expression, needs manual conversion
                                                            subtitle="subtitle",
                                                            # JS expression, needs manual conversion
                                                            title="title",
                                                            class_="px-0",
                                                        ),
                                                    ],
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                        v.Chip(
                            prepend_icon="mdi-check-circle",
                            size="large",
                            variant="text",
                            border=True,
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Icon(color="disabled"),
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
