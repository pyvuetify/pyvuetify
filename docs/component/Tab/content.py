import pyvuetify as v

v.Card(
    children=[
        v.Toolbar(
            color="primary",
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Page title"]),
                v.Btn(icon="mdi-magnify"),
                v.Btn(icon="mdi-dots-vertical"),
                v.Html(
                    tag="template",
                    children=[
                        v.Tabs(
                            v_model="model",
                            align_tabs="center",
                            children=[
                                v.Tab(
                                    # JS expression, needs manual conversion
                                    key="i",
                                    # JS expression, needs manual conversion
                                    text="`Item ${i}`",
                                    # JS expression, needs manual conversion
                                    value="i",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
