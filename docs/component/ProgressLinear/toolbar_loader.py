import pyvuetify as v

v.Card(
    class_="mx-auto mt-6",
    width="344",
    children=[
        v.Toolbar(
            children=[
                v.Btn(
                    icon=True,
                    children=[
                        v.Icon(children=["mdi-arrow-left"]),
                    ],
                ),
                v.ToolbarTitle(children=["My Recipes"]),
                v.ProgressLinear(
                    # JS expression, needs manual conversion
                    active="loading",
                    # JS expression, needs manual conversion
                    indeterminate="loading",
                    color="deep-purple-accent-4",
                    location="bottom",
                    absolute=True,
                ),
                v.Btn(
                    icon=True,
                    children=[
                        v.Icon(children=["mdi-magnify"]),
                    ],
                ),
                v.Btn(
                    icon=True,
                    children=[
                        v.Icon(children=["mdi-dots-vertical"]),
                    ],
                ),
            ],
        ),
        v.Container(
            style_="height: 282px;",
            children=[
                v.Row(
                    class_="fill-height align-center justify-center",
                    children=[
                        v.ScaleTransition(
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="text-center",
                                    children=[
                                        v.Btn(
                                            color="primary",
                                            children=["Start loading"],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
