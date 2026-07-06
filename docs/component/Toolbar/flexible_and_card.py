import pyvuetify as v

v.Card(
    rounded="lg",
    border=True,
    flat=True,
    children=[
        v.Toolbar(
            color="primary",
            extended=True,
            flat=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(icon="mdi-menu"),
                    ],
                ),
            ],
        ),
    ],
)
