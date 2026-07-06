import pyvuetify as v

v.Window(
    show_arrows=True,
    children=[
        v.Html(
            tag="template",
            children=[
                v.Btn(
                    color="success",
                    children=["Previous slide"],
                ),
            ],
        ),
    ],
)
