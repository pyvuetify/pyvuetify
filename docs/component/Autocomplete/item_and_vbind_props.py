import pyvuetify as v

v.Container(
    children=[
        v.Autocomplete(
            # JS expression, needs manual conversion
            items="items",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.ListItem(),
                    ],
                ),
            ],
        ),
    ],
)
