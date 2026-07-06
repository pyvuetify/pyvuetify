import pyvuetify as v

v.Container(
    class_="d-flex justify-center",
    children=[
        v.AvatarGroup(
            # JS expression, needs manual conversion
            items="items",
            border="md surface opacity-100",
        ),
    ],
)
