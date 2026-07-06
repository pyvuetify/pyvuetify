import pyvuetify as v

v.Card(
    height="200",
    children=[
        v.Toolbar(
            extended=True,
            children=[
                v.ToolbarTitle(text="Toolbar"),
                v.Html(
                    tag="template",
                    children=[
                        v.Tabs(
                            children=[
                                v.Tab(text="Tab 1"),
                                v.Tab(text="Tab 2"),
                                v.Tab(text="Tab 3"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
