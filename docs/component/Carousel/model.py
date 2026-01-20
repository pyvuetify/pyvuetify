import ipyvuetify as v

colors = ["primary", "secondary", "error", "success", "warning"]

v.Carousel(
    v_model=2,
    children=[
        v.CarouselItem(
            children=[
                v.Sheet(
                    color=color,
                    height="100%",
                    tile=True,
                    children=[
                        v.Row(
                            class_="fill-height",
                            align="center",
                            justify="center",
                            children=[v.Html(tag="h1", children=[f"Slide {i + 1}"])],
                        )
                    ],
                )
            ]
        )
        for i, color in enumerate(colors)
    ],
)
