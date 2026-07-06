import pyvuetify as v

v.Card(
    class_="mx-auto",
    elevation="5",
    max_width="444",
    children=[
        v.Carousel(
            continuous=False,
            show_arrows=False,
            delimiter_icon="mdi-square",
            height="300",
            hide_delimiter_background=True,
            children=[
                v.CarouselItem(
                    # JS expression, needs manual conversion
                    key="i",
                    children=[
                        v.Sheet(
                            # JS expression, needs manual conversion
                            color="colors[i]",
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
                                            children=["{{ slide }} Slide"],
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
