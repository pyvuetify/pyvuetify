import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="448",
    children=[
        v.Layout(
            children=[
                v.AppBar(
                    color="primary",
                    density="compact",
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.AppBarNavIcon(),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
