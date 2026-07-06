import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="300",
    children=[
        v.List(
            children=[
                v.ListSubheader(children=["Plain Variant"]),
                v.ListItem(
                    # JS expression, needs manual conversion
                    key="i",
                    # JS expression, needs manual conversion
                    value="item",
                    color="primary",
                    variant="plain",
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
