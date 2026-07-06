import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Html(
            tag="div",
            class_="d-flex ga-4 mb-4 align-center",
            children=[
                v.Switch(
                    v_model="openAll",
                    label="Open all groups",
                    hide_details=True,
                ),
                v.Btn(
                    # JS expression, needs manual conversion
                    disabled="openAll",
                    size="small",
                    variant="tonal",
                    children=["Close all"],
                ),
            ],
        ),
        v.DataIterator(
            v_model_opened="opened",
            # JS expression, needs manual conversion
            group_by="[{ key: 'category' }]",
            # JS expression, needs manual conversion
            group_key="({ value }) => value",
            # JS expression, needs manual conversion
            items="items",
            items_per_page=-1,
            # JS expression, needs manual conversion
            open_all="openAll",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Row(
                            children=[
                                v.Html(
                                    tag="template",
                                    key=(
                                        "groupOrItem.type === 'group' ? groupOrItem.id : groupOrItem.raw.name"
                                        # JS expression, needs manual conversion
                                    ),
                                    children=[
                                        v.Col(
                                            cols="12",
                                            children=[
                                                v.Card(
                                                    variant="tonal",
                                                    children=[
                                                        v.CardTitle(
                                                            class_="d-flex align-center",
                                                            children=[
                                                                v.Icon(
                                                                    # JS expression, needs manual conversion
                                                                    icon=(
                                                                        "isGroupOpen(groupOrItem) ? "
                                                                        "'mdi-chevron-down' : "
                                                                        "'mdi-chevron-right'"
                                                                    ),
                                                                    class_="me-2",
                                                                ),
                                                                "{{ groupOrItem.value }}",
                                                                v.Chip(
                                                                    class_="ms-2",
                                                                    size="small",
                                                                    variant="outlined",
                                                                    children=["{{ groupOrItem.items.length }}"],
                                                                ),
                                                            ],
                                                        ),
                                                    ],
                                                ),
                                            ],
                                        ),
                                        v.Col(
                                            cols="12",
                                            md="4",
                                            sm="6",
                                            children=[
                                                v.Card(
                                                    children=[
                                                        v.CardTitle(children=["{{ groupOrItem.raw.name }}"]),
                                                        v.CardSubtitle(children=["{{ groupOrItem.raw.origin }}"]),
                                                        v.CardText(children=["{{ groupOrItem.raw.calories }} cal"]),
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
        ),
    ],
)
