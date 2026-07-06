import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="400",
    children=[
        v.Toolbar(
            color="orange-lighten-1",
            dark=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Message Board"]),
                v.Btn(
                    icon=True,
                    children=[
                        v.Icon(children=["mdi-magnify"]),
                    ],
                ),
            ],
        ),
        v.List(
            lines="two",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.ListSubheader(
                            # JS expression, needs manual conversion
                            key="item.header",
                            inset=True,
                            children=["{{ item.header }}"],
                        ),
                        v.Divider(
                            # JS expression, needs manual conversion
                            key="index",
                            inset=True,
                        ),
                        v.ListItem(
                            # JS expression, needs manual conversion
                            key="item.title",
                            # JS expression, needs manual conversion
                            prepend_avatar="item.avatar",
                            ripple=True,
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Html(tag="div"),
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
