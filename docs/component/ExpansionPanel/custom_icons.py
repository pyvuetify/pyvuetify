import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.ExpansionPanels(
            class_="mb-6",
            children=[
                v.ExpansionPanel(
                    # JS expression, needs manual conversion
                    key="i",
                    children=[
                        v.ExpansionPanelTitle(
                            expand_icon="mdi-menu-down",
                            children=["Item"],
                        ),
                        v.ExpansionPanelText(
                            children=[
                                (
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                                    "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                                    "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
                                    "commodo consequat."
                                )
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.ExpansionPanels(
            children=[
                v.ExpansionPanel(
                    children=[
                        v.ExpansionPanelTitle(
                            collapse_icon="mdi-minus",
                            expand_icon="mdi-plus",
                            children=["Item"],
                        ),
                        v.ExpansionPanelText(
                            children=[
                                (
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                                    "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                                    "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
                                    "commodo consequat."
                                )
                            ],
                        ),
                    ],
                ),
                v.ExpansionPanel(
                    children=[
                        v.ExpansionPanelTitle(
                            children=[
                                "Item",
                                v.Html(
                                    tag="template",
                                    children=[
                                        v.Icon(
                                            # JS expression, needs manual conversion
                                            color="!expanded ? 'teal' : ''",
                                            # JS expression, needs manual conversion
                                            icon="expanded ? 'mdi-pencil' : 'mdi-check'",
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
