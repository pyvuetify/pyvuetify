import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="500",
    children=[
        v.Toolbar(
            color="transparent",
            flat=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Photo Info"]),
                v.Btn(icon="mdi-magnify"),
            ],
        ),
        v.Container(
            children=[
                v.Row(
                    class_="align-center justify-start",
                    gap="8",
                    children=[
                        v.Col(
                            # JS expression, needs manual conversion
                            key="selection.text",
                            cols="auto",
                            children=[
                                v.Chip(
                                    # JS expression, needs manual conversion
                                    disabled="loading",
                                    closable=True,
                                    children=[
                                        v.Icon(
                                            # JS expression, needs manual conversion
                                            icon="selection.icon",
                                            start=True,
                                        ),
                                        "{{ selection.text }}",
                                    ],
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            children=[
                                v.TextField(
                                    ref="searchField",
                                    v_model="search",
                                    label="Search",
                                    hide_details=True,
                                    single_line=True,
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.Divider(),
        v.List(
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.ListItem(
                            # JS expression, needs manual conversion
                            key="item.text",
                            # JS expression, needs manual conversion
                            disabled="loading",
                            children=[
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Icon(
                                            # JS expression, needs manual conversion
                                            disabled="loading",
                                            # JS expression, needs manual conversion
                                            icon="item.icon",
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
