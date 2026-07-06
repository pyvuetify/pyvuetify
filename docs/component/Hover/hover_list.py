import pyvuetify as v

v.Container(
    class_="pa-4 text-center",
    children=[
        v.Row(
            class_="fill-height align-center justify-center",
            children=[
                v.Html(
                    tag="template",
                    # JS expression, needs manual conversion
                    key="i",
                    children=[
                        v.Col(
                            cols="12",
                            md="4",
                            children=[
                                v.Hover(
                                    children=[
                                        v.Card(
                                            # JS expression, needs manual conversion
                                            class_="{ 'on-hover': isHovering }",
                                            # JS expression, needs manual conversion
                                            elevation="isHovering ? 12 : 2",
                                            children=[
                                                v.Img(
                                                    # JS expression, needs manual conversion
                                                    src="item.img",
                                                    height="225px",
                                                    cover=True,
                                                    children=[
                                                        v.CardTitle(
                                                            class_="text-title-large text-white d-flex flex-column",
                                                            children=[
                                                                v.Html(
                                                                    tag="p",
                                                                    class_="mt-4",
                                                                    children=["{{ item.title }}"],
                                                                ),
                                                                v.Html(
                                                                    tag="div",
                                                                    children=[
                                                                        v.Html(
                                                                            tag="p",
                                                                            class_=(
                                                                                "ma-0 text-body-large font-weight-bold"
                                                                            ),
                                                                            children=["{{ item.text }}"],
                                                                        ),
                                                                        v.Html(
                                                                            tag="p",
                                                                            class_=(
                                                                                "text-body-small font-weight-medium"
                                                                            ),
                                                                            children=["{{ item.subtext }}"],
                                                                        ),
                                                                    ],
                                                                ),
                                                            ],
                                                        ),
                                                        v.Html(
                                                            tag="div",
                                                            class_="align-self-center",
                                                            children=[
                                                                v.Btn(
                                                                    # JS expression, needs manual conversion
                                                                    key="index",
                                                                    # JS expression, needs manual conversion
                                                                    class_="{ 'show-btns': isHovering }",
                                                                    # JS expression, needs manual conversion
                                                                    color="transparent",
                                                                    # JS expression, needs manual conversion
                                                                    icon="icon",
                                                                    variant="text",
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
        ),
    ],
)
