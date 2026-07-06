import pyvuetify as v

v.Container(
    max_width="600",
    children=[
        v.Html(
            tag="div",
            class_="mb-1 mt-6",
            children=[
                v.Code(
                    class_="bg-purple-darken-2",
                    children=["default, slower"],
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="my-1 reduced-motion-info",
            children=[
                v.Code(
                    class_="bg-red",
                    children=["duration change suppressed - prefers-reduced-motion: reduce"],
                ),
            ],
        ),
        v.Carousel(
            height="200",
            transition_duration="600",
            children=[
                v.CarouselItem(
                    # JS expression, needs manual conversion
                    key="i",
                    # JS expression, needs manual conversion
                    src="src",
                    cover=True,
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="mb-1 mt-6",
            children=[
                v.Code(
                    class_="bg-purple-darken-2",
                    children=["crossfade"],
                ),
            ],
        ),
        v.Carousel(
            height="200",
            transition_duration="700",
            crossfade=True,
            children=[
                v.CarouselItem(
                    # JS expression, needs manual conversion
                    key="i",
                    # JS expression, needs manual conversion
                    src="src",
                    cover=True,
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="mb-1 mt-6",
            children=[
                v.Code(
                    class_="bg-purple-darken-2",
                    children=["cross-scale (custom)"],
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="my-1 reduced-motion-info",
            children=[
                v.Code(
                    class_="bg-red",
                    children=["scale suppressed - prefers-reduced-motion: reduce"],
                ),
            ],
        ),
        v.Carousel(
            height="200",
            children=[
                v.CarouselItem(
                    # JS expression, needs manual conversion
                    key="i",
                    # JS expression, needs manual conversion
                    src="src",
                    reverse_transition="cross-scale",
                    transition="cross-scale",
                    cover=True,
                ),
            ],
        ),
    ],
)
