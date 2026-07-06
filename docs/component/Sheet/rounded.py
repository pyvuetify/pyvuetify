import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="justify-space-around",
            children=[
                v.Col(
                    # JS expression, needs manual conversion
                    key="String(rounded)",
                    cols="12",
                    md="4",
                    children=[
                        v.Sheet(
                            class_="pa-12",
                            color="grey-lighten-3",
                            children=[
                                v.Html(tag="div"),
                                v.Sheet(
                                    # JS expression, needs manual conversion
                                    rounded="rounded",
                                    class_="mx-auto",
                                    height="100",
                                    width="100",
                                ),
                                v.Html(tag="div"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
