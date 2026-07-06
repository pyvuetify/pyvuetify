import pyvuetify as v

v.Card(
    children=[
        v.Tabs(
            v_model="tab",
            align_tabs="center",
            color="deep-purple-accent-4",
            children=[
                v.Tab(
                    value=1,
                    children=["Landscape"],
                ),
                v.Tab(
                    value=2,
                    children=["City"],
                ),
                v.Tab(
                    value=3,
                    children=["Abstract"],
                ),
            ],
        ),
        v.TabsWindow(
            v_model="tab",
            children=[
                v.TabsWindowItem(
                    # JS expression, needs manual conversion
                    key="n",
                    # JS expression, needs manual conversion
                    value="n",
                    children=[
                        v.Container(
                            fluid=True,
                            children=[
                                v.Row(
                                    children=[
                                        v.Col(
                                            # JS expression, needs manual conversion
                                            key="i",
                                            cols="12",
                                            md="4",
                                            children=[
                                                v.Img(
                                                    lazy_src=(
                                                        "`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                                                        # JS expression, needs manual conversion
                                                    ),
                                                    # JS expression, needs manual conversion
                                                    src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`",
                                                    height="205",
                                                    cover=True,
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
        ),
    ],
)
