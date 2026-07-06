import pyvuetify as v

v.Carousel(
    height="400",
    hide_delimiter_background=True,
    show_arrows=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.Btn(
                    color="success",
                    variant="elevated",
                    children=["Previous slide"],
                ),
            ],
        ),
    ],
)
