import pyvuetify as v

v.ItemGroup(
    mandatory=True,
    children=[
        v.Container(
            children=[
                v.Row(
                    children=[
                        v.Col(
                            # JS expression, needs manual conversion
                            key="n",
                            cols="12",
                            md="4",
                            children=[
                                v.Item(
                                    children=[
                                        v.Card(
                                            # JS expression, needs manual conversion
                                            color="isSelected ? 'primary' : ''",
                                            class_="d-flex align-center",
                                            height="200",
                                            dark=True,
                                            children=[
                                                v.ScrollYTransition(
                                                    children=[
                                                        v.Html(
                                                            tag="div",
                                                            class_=("text-display-medium flex-grow-1 text-center"),
                                                            children=[
                                                                ("{{ isSelected ? 'Selected' : 'Click Me!' }}"),
                                                            ],
                                                        ),
                                                    ],
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
