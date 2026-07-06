import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="600",
    children=[
        v.Toolbar(
            color="secondary",
            children=[
                v.Btn(
                    icon="mdi-menu",
                    variant="text",
                ),
                v.ToolbarTitle(children=["My files"]),
                v.Btn(
                    icon="mdi-magnify",
                    variant="text",
                ),
                v.Btn(
                    icon="mdi-view-module",
                    variant="text",
                ),
            ],
        ),
        v.List(
            lines="two",
            children=[
                v.ListSubheader(
                    inset=True,
                    children=["Folders"],
                ),
                v.ListItem(
                    # JS expression, needs manual conversion
                    key="folder.title",
                    # JS expression, needs manual conversion
                    subtitle="folder.subtitle",
                    # JS expression, needs manual conversion
                    title="folder.title",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.Avatar(
                                    color="grey-lighten-1",
                                    children=[
                                        v.Icon(
                                            color="white",
                                            children=["mdi-folder"],
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
