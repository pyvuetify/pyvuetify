import pyvuetify as v

v.Card(
    children=[
        v.Layout(
            children=[
                v.AppBar(
                    color="primary",
                    children=[
                        v.AppBarNavIcon(variant="text"),
                        v.ToolbarTitle(children=["My files"]),
                        v.Html(
                            tag="template",
                            children=[
                                v.Btn(
                                    icon="mdi-magnify",
                                    variant="text",
                                ),
                                v.Btn(
                                    icon="mdi-filter",
                                    variant="text",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
