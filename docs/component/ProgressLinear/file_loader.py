import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    max_width=344,
    children=[
        v.Toolbar(
            color="deep-purple accent-4",
            dark=True,
            prominent=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["My Files"]),
                v.Btn(
                    absolute=True,
                    bottom=True,
                    color="white",
                    fab=True,
                    left=True,
                    light=True,
                    children=[v.Icon(children=["mdi-plus"])],
                ),
                v.Spacer(),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-share-variant"])],
                ),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-magnify"])],
                ),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-dots-vertical"])],
                ),
            ],
        ),
        v.Container(
            style_="height: 400px;",
            children=[
                v.Row(
                    class_="fill-height",
                    align_content="center",
                    justify="center",
                    children=[
                        v.Col(
                            class_="text-subtitle-1 text-center",
                            cols=12,
                            children=["Getting your files"],
                        ),
                        v.Col(
                            cols=6,
                            children=[
                                v.ProgressLinear(
                                    color="deep-purple accent-4",
                                    indeterminate=True,
                                    rounded=True,
                                    height=6,
                                )
                            ],
                        ),
                    ],
                )
            ],
        ),
    ],
)
