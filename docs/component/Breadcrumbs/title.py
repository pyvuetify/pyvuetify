import pyvuetify as v

v.Breadcrumbs(
    # JS expression, needs manual conversion
    items="items",
    children=[
        v.Html(
            tag="template",
            children=["{{ item.title.toUpperCase() }}"],
        ),
    ],
)
