import pyvuetify as v

v.Card(
    children=[
        v.Toolbar(
            # JS expression, needs manual conversion
            collapse="collapse",
            # JS expression, needs manual conversion
            collapse_position="collapsePosition",
            title="Toolbar",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex ga-1",
                            children=[
                                v.Btn(icon="mdi-magnify"),
                                v.Btn(icon="mdi-dots-vertical"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
