import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex ga-8 justify-center py-3",
    children=[
        v.AvatarGroup(
            # JS expression, needs manual conversion
            items="items",
            border="md surface-variant opacity-100",
            vertical=True,
        ),
        v.AvatarGroup(
            # JS expression, needs manual conversion
            items="items",
            border="md surface-variant opacity-100",
            reverse=True,
            vertical=True,
        ),
    ],
)
