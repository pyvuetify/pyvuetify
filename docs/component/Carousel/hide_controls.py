import pyvuetify as v

v.Carousel(
    show_arrows=False,
    children=[
        v.CarouselItem(
            # JS expression, needs manual conversion
            key="i",
            # JS expression, needs manual conversion
            src="item.src",
            cover=True,
        ),
    ],
)
