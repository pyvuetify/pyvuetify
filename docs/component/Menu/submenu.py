import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Btn(
            color="primary",
            children=[
                "Open menu",
                v.Menu(
                    activator="parent",
                    children=[
                        v.List(
                            children=[
                                v.ListItem(
                                    # JS expression, needs manual conversion
                                    key="i",
                                    link=True,
                                    children=[
                                        v.ListItemTitle(children=["Item {{ i }}"]),
                                        v.Html(
                                            tag="template",
                                            children=[
                                                v.Icon(
                                                    icon="mdi-menu-right",
                                                    size="x-small",
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
