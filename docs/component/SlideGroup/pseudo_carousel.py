import pyvuetify as v

v.Sheet(
    class_="mx-auto",
    elevation="3",
    max_width="800",
    children=[
        v.SlideGroup(
            v_model="model",
            class_="pa-4",
            selected_class="bg-primary",
            show_arrows=True,
            children=[
                v.SlideGroupItem(
                    # JS expression, needs manual conversion
                    key="n",
                    children=[
                        v.Card(
                            # JS expression, needs manual conversion
                            class_="['ma-4', selectedClass]",
                            color="grey-lighten-1",
                            height="200",
                            width="100",
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="d-flex fill-height align-center justify-center",
                                    children=[
                                        v.ScaleTransition(
                                            children=[
                                                v.Icon(
                                                    color="white",
                                                    icon="mdi-close-circle-outline",
                                                    size="48",
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
        v.ExpandTransition(
            children=[
                v.Sheet(
                    height="200",
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex fill-height align-center justify-center",
                            children=[
                                v.Html(
                                    tag="h3",
                                    class_="text-title-large my-0",
                                    children=["Selected {{ model }}"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
