import ipyvuetify as v

v.Card(
    elevation=15,
    class_="pa-2",
    children=[
        v.ExpansionPanels(
            inset=True,
            children=[
                v.ExpansionPanel(
                    children=[
                        v.ExpansionPanelHeader(children=["Item"]),
                        v.ExpansionPanelContent(
                            children=[
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            ]
                        ),
                    ]
                )
                for i in range(5)
            ],
        )
    ],
)
