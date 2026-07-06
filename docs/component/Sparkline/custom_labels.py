import pyvuetify as v

v.Card(
    class_="mx-auto text-center",
    color="green",
    max_width="600",
    dark=True,
    children=[
        v.CardText(
            children=[
                v.Sheet(
                    color="rgba(0, 0, 0, .12)",
                    children=[
                        v.Sparkline(
                            # JS expression, needs manual conversion
                            model_value="value",
                            color="rgba(255, 255, 255, .7)",
                            height="100",
                            padding="24",
                            stroke_linecap="round",
                            smooth=True,
                            children=[
                                v.Html(
                                    tag="template",
                                    children=["${{ item.value }}"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
