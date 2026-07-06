import pyvuetify as v

v.Carousel(
    height="400",
    progress="primary",
    hide_delimiters=True,
    children=[
        v.CarouselItem(
            # JS expression, needs manual conversion
            key="i",
            children=[
                v.Sheet(
                    height="100%",
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex fill-height justify-center align-center",
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="text-display-large",
                                    children=["{{ slide }} Slide"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
