import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="450",
    children=[
        v.Toolbar(
            color="primary",
            height="88",
            flat=True,
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(icon="mdi-arrow-left"),
                    ],
                ),
            ],
        ),
    ],
)
