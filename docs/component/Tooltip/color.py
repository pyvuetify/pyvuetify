import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center d-flex align-center justify-space-around",
    children=[
        v.Tooltip(
            color="#cc0",
            location="bottom",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(
                            color="#cc0",
                            text="Custom Hex",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
