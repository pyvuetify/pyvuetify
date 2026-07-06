import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="justify-space-around",
            children=[
                v.Col(
                    # JS expression, needs manual conversion
                    key="elevation",
                    cols="12",
                    md="4",
                    children=[
                        v.Sheet(
                            class_="pa-12",
                            color="grey-lighten-3",
                            children=[
                                v.Sheet(
                                    # JS expression, needs manual conversion
                                    elevation="elevation",
                                    class_="mx-auto",
                                    height="100",
                                    width="100",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
