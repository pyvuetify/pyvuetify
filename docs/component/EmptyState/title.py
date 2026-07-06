import pyvuetify as v

v.EmptyState(
    icon="$success",
    children=[
        v.Html(
            tag="template",
            children=[
                v.Icon(color="surface-variant"),
            ],
        ),
    ],
)
