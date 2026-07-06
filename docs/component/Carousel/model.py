import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Html(
            tag="div",
            class_="d-flex justify-space-around align-center py-4",
            children=[
                v.Btn(
                    icon="mdi-minus",
                    variant="text",
                ),
                "{{ model }}",
                v.Btn(
                    icon="mdi-plus",
                    variant="text",
                ),
            ],
        ),
        v.Carousel(
            v_model="model",
            children=[
                v.CarouselItem(
                    # JS expression, needs manual conversion
                    key="color",
                    # JS expression, needs manual conversion
                    value="i",
                    children=[
                        v.Sheet(
                            # JS expression, needs manual conversion
                            color="color",
                            height="100%",
                            tile=True,
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="d-flex fill-height justify-center align-center",
                                    children=[
                                        v.Html(
                                            tag="div",
                                            class_="text-display-large",
                                            children=["Slide {{ i + 1 }}"],
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
