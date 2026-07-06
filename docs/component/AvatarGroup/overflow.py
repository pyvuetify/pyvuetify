import pyvuetify as v

v.Container(
    class_="d-flex justify-center",
    children=[
        v.AvatarGroup(
            # JS expression, needs manual conversion
            items="items",
            limit=3,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Avatar(
                            color="grey-lighten-1",
                            children=[
                                v.Icon(icon="mdi-dots-horizontal"),
                                v.Tooltip(
                                    activator="parent",
                                    location="bottom",
                                    children=["{{ overflow }} more users"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
