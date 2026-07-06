import pyvuetify as v

v.Card(
    children=[
        v.Toolbar(
            color="deep-purple-accent-4",
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Page title"]),
                v.Btn(icon="mdi-magnify"),
                v.Btn(icon="mdi-dots-vertical"),
                v.Html(
                    tag="template",
                    children=[
                        v.Tabs(
                            v_model="currentItem",
                            fixed_tabs=True,
                            children=[
                                v.Tab(
                                    # JS expression, needs manual conversion
                                    key="item",
                                    # JS expression, needs manual conversion
                                    text="item",
                                    # JS expression, needs manual conversion
                                    value="'tab-' + item",
                                ),
                                v.Menu(
                                    children=[
                                        v.Html(
                                            tag="template",
                                            children=[
                                                v.Btn(
                                                    class_="align-self-center me-4",
                                                    height="100%",
                                                    rounded="0",
                                                    variant="plain",
                                                    children=[
                                                        "more",
                                                        v.Icon(
                                                            icon="mdi-menu-down",
                                                            end=True,
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
        ),
    ],
)
