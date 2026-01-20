import ipyvuetify as v

colors = ["primary", "secondary", "error", "success", "warning"]

v.Carousel(
    height="400px",
    hide_delimiter_background=True,
    show_arrows_on_hover=True,
    children=[
        v.CarouselItem(
            children=[
                v.Sheet(
                    color=color,
                    height="100%",
                    children=[
                        v.Row(
                            class_="fill-height",
                            align="center",
                            justify="center",
                            children=[v.Html(tag="h2", children=[f"{i + 1} Slide"])],
                        )
                    ],
                )
            ]
        )
        for i, color in enumerate(colors)
    ],
    v_slots=[
        {
            "name": "prev",
            "variable": "var",
            "children": [
                v.Btn(
                    color="success", children=["Previous slide"], v_bind="var.attrs", v_on="var.on"
                )
            ],
        },
        {
            "name": "next",
            "variable": "var",
            "children": [
                v.Btn(color="info", children=["Next slide"], v_bind="var.attrs", v_on="var.on")
            ],
        },
    ],
)
