import pyvuetify as v

v.Card(
    children=[
        v.Toolbar(
            color="primary",
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Your Dashboard"]),
                v.Btn(icon="mdi-magnify"),
                v.Btn(icon="mdi-dots-vertical"),
                v.Html(
                    tag="template",
                    children=[
                        v.Tabs(
                            v_model="tab",
                            align_tabs="title",
                            children=[
                                v.Tab(
                                    # JS expression, needs manual conversion
                                    key="item",
                                    # JS expression, needs manual conversion
                                    text="item",
                                    # JS expression, needs manual conversion
                                    value="item",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
