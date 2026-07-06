import pyvuetify as v

v.Card(
    height="200",
    children=[
        v.Toolbar(
            extended=True,
            children=[
                v.ToolbarTitle(text="Toolbar"),
                v.Html(
                    tag="template",
                    children=[
                        v.Btn(icon="mdi-magnify"),
                        v.Btn(icon="mdi-heart"),
                        v.Btn(icon="mdi-dots-vertical"),
                    ],
                ),
            ],
        ),
    ],
)
