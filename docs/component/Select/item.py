import pyvuetify as v

v.Select(
    # JS expression, needs manual conversion
    items="items",
    item_title="name",
    label="User",
    children=[
        v.Html(
            tag="template",
            children=[
                v.ListItem(
                    # JS expression, needs manual conversion
                    subtitle="item.department",
                ),
            ],
        ),
    ],
)
