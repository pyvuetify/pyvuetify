import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="500",
    children=[
        v.Toolbar(
            color="pink",
            children=[
                v.Btn(icon="mdi-menu"),
                v.ToolbarTitle(children=["Inbox"]),
                v.Btn(icon="mdi-magnify"),
                v.Btn(icon="mdi-checkbox-marked-circle"),
            ],
        ),
        v.List(
            v_model_selected="selected",
            select_strategy="leaf",
            children=[
                v.ListItem(
                    # JS expression, needs manual conversion
                    key="item.id",
                    # JS expression, needs manual conversion
                    value="item.id",
                    active_class="text-pink",
                    class_="py-3",
                    children=[
                        v.ListItemTitle(children=["{{ item.title }}"]),
                        v.ListItemSubtitle(
                            class_="mb-1 text-high-emphasis opacity-100",
                            children=["{{ item.headline }}"],
                        ),
                        v.ListItemSubtitle(
                            class_="text-high-emphasis",
                            children=["{{ item.subtitle }}"],
                        ),
                        v.Html(
                            tag="template",
                            children=[
                                v.ListItemAction(
                                    class_="flex-column align-end",
                                    children=[
                                        v.Html(
                                            tag="small",
                                            class_="mb-4 text-high-emphasis opacity-60",
                                            children=["{{ item.action }}"],
                                        ),
                                        v.Spacer(),
                                        v.Icon(
                                            color="yellow-darken-3",
                                            children=["mdi-star"],
                                        ),
                                        v.Icon(
                                            class_="opacity-30",
                                            children=["mdi-star-outline"],
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
