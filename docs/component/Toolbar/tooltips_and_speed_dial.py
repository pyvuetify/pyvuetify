import pyvuetify as v

v.Card(
    children=[
        v.Toolbar(
            # JS expression, needs manual conversion
            collapse="collapse",
            title="Toolbar",
            children=[
                v.Btn(
                    class_="ml-3",
                    icon="mdi-magnify",
                ),
                v.Btn(
                    class_="mr-3",
                    icon="mdi-dots-vertical",
                    size="small",
                    variant="elevated",
                    children=[
                        v.Icon(),
                        v.SpeedDial(
                            # JS expression, needs manual conversion
                            location="dialLocation",
                            activator="parent",
                            open_on_hover=True,
                            children=[
                                v.Btn(
                                    # JS expression, needs manual conversion
                                    key="i",
                                    # JS expression, needs manual conversion
                                    color="item.color",
                                    # JS expression, needs manual conversion
                                    icon="item.icon",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.CardText(
            class_="text-center pa-8",
            children=[
                v.Btn(
                    # JS expression, needs manual conversion
                    text="collapse ? 'Expand' : 'Collapse'",
                    color="surface-variant",
                ),
            ],
        ),
    ],
)
