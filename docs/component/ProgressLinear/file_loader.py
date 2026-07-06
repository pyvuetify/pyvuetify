import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="344",
    children=[
        v.Toolbar(
            color="deep-purple-accent-4",
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["My Files"]),
                v.Btn(
                    color="white",
                    location="bottom left",
                    absolute=True,
                    icon=True,
                    children=[
                        v.Icon(children=["mdi-plus"]),
                    ],
                ),
                v.Btn(
                    icon=True,
                    children=[
                        v.Icon(children=["mdi-share-variant"]),
                    ],
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
            style_="height: 400px;",
            children=[
                v.Row(
                    class_="fill-height align-content-center justify-center",
                    children=[
                        v.Col(
                            class_="text-body-large text-center",
                            cols="12",
                            children=["Getting your files"],
                        ),
                        v.Col(
                            cols="6",
                            children=[
                                v.ProgressLinear(
                                    color="deep-purple-accent-4",
                                    height="6",
                                    indeterminate=True,
                                    rounded=True,
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
