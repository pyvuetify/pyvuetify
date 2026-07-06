import pyvuetify as v

v.Carousel(
    height="400",
    show_arrows="hover",
    cycle=True,
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
