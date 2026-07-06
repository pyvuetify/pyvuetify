import pyvuetify as v

v.Container(
    children=[
        v.ExpansionPanels(
            rounded=[20, 8],
            gap="8",
            variant="accordion",
            static=True,
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
