import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="500",
    border=True,
    flat=True,
    children=[
        v.ListItem(
            class_="px-6",
            height="88",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Avatar(
                            color="surface-light",
                            size="32",
                            children=["🎯"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
