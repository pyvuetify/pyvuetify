import ipyvuetify as v

list_icons = [
    {"icon": "mdi-chevron-up", "color": "primary"},
    {"icon": "mdi-check", "color": "teal"},
    {"icon": "mdi-alert-circle", "color": "error"},
]

v.Card(
    elevation=15,
    class_="pa-2",
    children=[
        v.ExpansionPanels(
            children=[
                v.ExpansionPanel(
                    children=[
                        v.ExpansionPanelHeader(
                            disable_icon_rotate=i != 0,
                            children=["Item"],
                            v_slots=[
                                {
                                    "name": "actions",
                                    "children": v.Icon(
                                        color=list_icons[i]["color"],
                                        children=[list_icons[i]["icon"]],
                                    ),
                                }
                            ],
                        ),
                        v.ExpansionPanelContent(
                            children=[
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            ]
                        ),
                    ]
                )
                for i in range(3)
            ]
        )
    ],
)
