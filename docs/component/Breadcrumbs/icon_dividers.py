import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Breadcrumbs(
            # JS expression, needs manual conversion
            items="items",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Icon(icon="mdi-forward"),
                    ],
                ),
            ],
        ),
    ],
)
