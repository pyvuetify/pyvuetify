import pyvuetify as v

v.Container(
    children=[
        v.Html(
            tag="div",
            class_="text-center mb-12",
            children=[
                v.Btn(
                    size="x-large",
                    children=["Toggle Loading"],
                ),
            ],
        ),
        v.Row(
            class_="justify-center",
            children=[
                v.Col(
                    class_="mb-12",
                    cols="12",
                    md="6",
                    children=[
                        v.Html(
                            tag="div",
                            class_="text-headline-small text-center",
                            children=["Using slot"],
                        ),
                        v.SkeletonLoader(
                            # JS expression, needs manual conversion
                            loading="loading",
                            type="list-item-two-line",
                            children=[
                                v.ListItem(
                                    lines="two",
                                    subtitle="Subtitle",
                                    title="Title",
                                    rounded=True,
                                ),
                            ],
                        ),
                    ],
                ),
                v.Col(
                    cols="12",
                    md="6",
                    children=[
                        v.Html(
                            tag="div",
                            class_="text-headline-small text-center",
                            children=["Using if"],
                        ),
                        v.SkeletonLoader(type="list-item-two-line"),
                        v.ListItem(
                            lines="two",
                            subtitle="Subtitle",
                            title="Title",
                            rounded=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
