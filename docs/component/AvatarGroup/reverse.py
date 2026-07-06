import pyvuetify as v

v.Container(
    class_="d-flex justify-center ga-12",
    children=[
        v.AvatarGroup(
            # JS expression, needs manual conversion
            items="items",
            reverse=True,
        ),
        v.AvatarGroup(
            reverse=True,
            children=[
                # JS expression, needs manual conversion
                v.Avatar(key="i"),
            ],
        ),
    ],
)
