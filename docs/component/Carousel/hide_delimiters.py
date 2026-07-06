import pyvuetify as v

v.Carousel(
    hide_delimiters=True,
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
