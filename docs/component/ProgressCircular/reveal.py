import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Container(
            class_="d-flex flex-wrap ga-4 px-0 justify-center",
            children=[
                v.Card(
                    # JS expression, needs manual conversion
                    key="i",
                    elevation="6",
                    mode="out-in",
                    rounded="pill",
                    width="330",
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex align-center pa-3 justify-space-between",
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="mt-n2",
                                    children=[
                                        v.CardTitle(),
                                        v.CardSubtitle(class_="mt-n1"),
                                    ],
                                ),
                                v.ProgressCircular(
                                    # JS expression, needs manual conversion
                                    key="{updateTrigger}_{i}",
                                    # JS expression, needs manual conversion
                                    model_value="c.value",
                                    size=100,
                                    width=12,
                                    bg_color="surface-light",
                                    class_="ma-3",
                                    color="orange-accent-2",
                                    reveal=True,
                                    rounded=True,
                                    children=[
                                        v.Avatar(
                                            color="surface-light",
                                            size="70",
                                            children=["{{ c.value }}%"],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="d-flex justify-center",
            children=[
                v.Btn(
                    color="primary",
                    text="Reload",
                ),
            ],
        ),
    ],
)
