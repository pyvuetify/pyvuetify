import pyvuetify as v

v.Row(
    children=[
        v.Col(
            cols="12",
            sm="6",
            children=[
                v.Hover(
                    open_delay="200",
                    children=[
                        v.Card(
                            # JS expression, needs manual conversion
                            class_="{ 'on-hover': isHovering }",
                            # JS expression, needs manual conversion
                            elevation="isHovering ? 4 : 1",
                            # class_="mx-auto",
                            height="350",
                            max_width="350",
                            children=[
                                v.CardText(
                                    class_="font-weight-medium mt-12 text-center text-body-large",
                                    children=["Open Delay (Mouse enter)"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.Col(
            cols="12",
            sm="6",
            children=[
                v.Hover(
                    close_delay="200",
                    children=[
                        v.Card(
                            # JS expression, needs manual conversion
                            class_="{ 'on-hover': isHovering }",
                            # JS expression, needs manual conversion
                            elevation="isHovering ? 4 : 1",
                            # class_="mx-auto",
                            height="350",
                            max_width="350",
                            children=[
                                v.CardText(
                                    class_="font-weight-medium mt-12 text-center text-body-large",
                                    children=["Close Delay (Mouse leave)"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
