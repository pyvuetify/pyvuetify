import pyvuetify as v

v.Timeline(
    align="start",
    children=[
        v.TimelineItem(
            # JS expression, needs manual conversion
            key="i",
            # JS expression, needs manual conversion
            dot_color="item.color",
            # JS expression, needs manual conversion
            icon="item.icon",
            fill_dot=True,
            children=[
                v.Card(
                    children=[
                        v.CardTitle(
                            # JS expression, needs manual conversion
                            class_="text-title-large",
                            children=["Lorem Ipsum Dolor"],
                        ),
                        v.CardText(
                            class_="bg-white text--primary",
                            children=[
                                v.Html(
                                    tag="p",
                                    children=[
                                        (
                                            "Lorem ipsum dolor sit amet, no nam oblique veritus. "
                                            "Commune scaevola imperdiet nec ut, sed euismod "
                                            "convenire principes at. Est et nobis iisque percipit, "
                                            "an vim zril disputando voluptatibus, vix an salutandi "
                                            "sententiae."
                                        ),
                                    ],
                                ),
                                v.Btn(
                                    # JS expression, needs manual conversion
                                    color="item.color",
                                    variant="outlined",
                                    children=["Button"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
