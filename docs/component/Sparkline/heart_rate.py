import pyvuetify as v

v.Card(
    class_="mx-auto",
    color="surface-light",
    max_width="600",
    children=[
        v.Html(
            tag="template",
            children=[
                v.Icon(
                    # JS expression, needs manual conversion
                    color="checking ? 'red lighten-2' : 'indigo-lighten-2'",
                    class_="me-8",
                    icon="mdi-heart-pulse",
                    size="64",
                ),
            ],
        ),
    ],
)
