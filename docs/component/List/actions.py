import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="400",
    children=[
        v.Toolbar(
            color="purple",
            children=[
                v.Btn(icon="mdi-menu"),
                v.ToolbarTitle(children=["Settings"]),
                v.Btn(icon="mdi-magnify"),
            ],
        ),
        v.List(
            lines="three",
            children=[
                v.ListSubheader(children=["User Controls"]),
                v.ListItem(
                    # JS expression, needs manual conversion
                    key="item.value",
                    # JS expression, needs manual conversion
                    subtitle="item.subtitle",
                    # JS expression, needs manual conversion
                    title="item.title",
                ),
            ],
        ),
        v.Divider(),
        v.List(
            v_model_selected="settingsSelection",
            lines="three",
            select_strategy="leaf",
            children=[
                v.ListSubheader(children=["General"]),
                v.ListItem(
                    # JS expression, needs manual conversion
                    key="item.value",
                    # JS expression, needs manual conversion
                    subtitle="item.subtitle",
                    # JS expression, needs manual conversion
                    title="item.title",
                    # JS expression, needs manual conversion
                    value="item.value",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.ListItemAction(
                                    start=True,
                                    children=[
                                        v.CheckboxBtn(
                                            # JS expression, needs manual conversion
                                            model_value="isSelected",
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
