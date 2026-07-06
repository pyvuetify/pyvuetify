import pyvuetify as v

v.Card(
    class_="mx-auto pa-2",
    max_width="300",
    children=[
        v.List(
            children=[
                v.ListSubheader(children=["REPORTS"]),
                v.ListItem(
                    # JS expression, needs manual conversion
                    key="i",
                    # JS expression, needs manual conversion
                    value="item",
                    color="primary",
                    rounded="xl",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                # JS expression, needs manual conversion
                                v.Icon(icon="item.icon"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
