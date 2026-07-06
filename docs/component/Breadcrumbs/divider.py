import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Breadcrumbs(
            # JS expression, needs manual conversion
            items="items",
            divider="-",
        ),
        v.Breadcrumbs(
            # JS expression, needs manual conversion
            items="items",
            divider=".",
        ),
    ],
)
