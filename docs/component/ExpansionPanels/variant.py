import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Html(
            tag="div",
            class_="text-title-small mb-2",
            children=["Default"],
        ),
        v.ExpansionPanels(
            children=[
                v.ExpansionPanel(
                    # JS expression, needs manual conversion
                    key="i",
                    text=(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
                        "commodo consequat."
                    ),
                    title="Item",
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="text-title-small mt-4 mb-2",
            children=["Accordion"],
        ),
        v.ExpansionPanels(
            variant="accordion",
            children=[
                v.ExpansionPanel(
                    # JS expression, needs manual conversion
                    key="i",
                    text=(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
                        "commodo consequat."
                    ),
                    title="Item",
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="text-title-small mt-4 mb-2",
            children=["Inset"],
        ),
        v.ExpansionPanels(
            class_="my-4",
            variant="inset",
            children=[
                v.ExpansionPanel(
                    # JS expression, needs manual conversion
                    key="i",
                    text=(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
                        "commodo consequat."
                    ),
                    title="Item",
                ),
            ],
        ),
        v.Html(
            tag="div",
            class_="text-title-small mt-4 mb-2",
            children=["Popout"],
        ),
        v.ExpansionPanels(
            class_="my-4",
            variant="popout",
            children=[
                v.ExpansionPanel(
                    # JS expression, needs manual conversion
                    key="i",
                    text=(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                        "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
                        "commodo consequat."
                    ),
                    title="Item",
                ),
            ],
        ),
    ],
)
