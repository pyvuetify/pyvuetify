import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="500",
    children=[
        v.Toolbar(
            # JS expression, needs manual conversion
            color="selection.length ? 'surface-variant' : 'deep-purple accent-4'",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.FadeTransition(
                            hide_on_leave=True,
                            children=[
                                v.Btn(
                                    # JS expression, needs manual conversion
                                    key="selection.length > 0",
                                    # JS expression, needs manual conversion
                                    icon="selection.length ? 'mdi-close' : 'mdi-menu'",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
