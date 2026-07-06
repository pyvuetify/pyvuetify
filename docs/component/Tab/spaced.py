import pyvuetify as v

v.Container(
    max_width="800",
    children=[
        v.Row(
            class_="justify-space-around",
            children=[
                v.Col(
                    cols="12",
                    sm="auto",
                    children=[
                        v.Tabs(
                            # JS expression, needs manual conversion
                            items="example1",
                            direction="vertical",
                            slider_color="purple",
                            spaced="end",
                        ),
                    ],
                ),
                v.Col(
                    cols="12",
                    sm="auto",
                    children=[
                        v.Tabs(
                            direction="vertical",
                            slider_color="primary",
                            spaced="start",
                            children=[
                                v.Tab(
                                    # JS expression, needs manual conversion
                                    key="tab",
                                    # JS expression, needs manual conversion
                                    prepend_icon="`mdi-numeric-${i + 1}-box`",
                                    # JS expression, needs manual conversion
                                    text="tab",
                                    spaced="start",
                                    width="200",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
