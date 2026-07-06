import pyvuetify as v

v.Sheet(
    class_="bg-indigo py-6 px-4",
    children=[
        v.AvatarGroup(
            gap=-8,
            # JS expression, needs manual conversion
            item_props="item => ({ image: item.avatarUrl })",
            # JS expression, needs manual conversion
            items="users",
            border="sm opacity-100",
            hoverable=True,
            reverse=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Avatar(rounded="lg"),
                    ],
                ),
            ],
        ),
    ],
)
