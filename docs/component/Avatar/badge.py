import pyvuetify as v

v.Html(
    tag="div",
    class_="py-6",
    children=[
        v.Row(
            class_="ga-6 align-end justify-center",
            children=[
                v.Avatar(
                    # JS expression, needs manual conversion
                    key="i",
                    # JS expression, needs manual conversion
                    badge="colors[i]",
                    # JS expression, needs manual conversion
                    image="img",
                    # JS expression, needs manual conversion
                    size="sizes[i]",
                ),
            ],
        ),
        v.Row(
            class_="ga-6 mt-6 align-end justify-center",
            children=[
                v.Avatar(
                    # JS expression, needs manual conversion
                    key="i",
                    # JS expression, needs manual conversion
                    badge="{ color: colors[i], location: 'bottom end', floating: true }",
                    # JS expression, needs manual conversion
                    image="img",
                    # JS expression, needs manual conversion
                    size="sizes[i]",
                    rounded="lg",
                ),
            ],
        ),
        v.Row(
            class_="ga-6 mt-6 align-end justify-center",
            children=[
                v.Avatar(
                    # JS expression, needs manual conversion
                    key="i",
                    # JS expression, needs manual conversion
                    badge="{ color: colors[i], location: 'bottom end', floating: true }",
                    # JS expression, needs manual conversion
                    image="img",
                    # JS expression, needs manual conversion
                    size="sizes[i]",
                    rounded="lg",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                # JS expression, needs manual conversion
                                v.Icon(icon="icons[i]"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
