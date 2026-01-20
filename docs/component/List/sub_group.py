import ipyvuetify as v

admins = [
    {"text": "Management", "icon": "mdi-account-multiple-outline"},
    {"text": "Settings", "icon": "mdi-cogs"},
]

cruds = [
    {"text": "Create", "icon": "mdi-plus-outline"},
    {"text": "Read", "icon": "mdi-file-outline"},
    {"text": "Update", "icon": "mdi-update"},
    {"text": "Delete", "icon": "mdi-delete"},
]

v.Card(
    class_="mx-auto my-2",
    width=300,
    children=[
        v.List(
            children=[
                v.ListItem(
                    children=[
                        v.ListItemIcon(children=[v.Icon(children=["mdi-home"])]),
                        v.ListItemTitle(children=["Home"]),
                    ]
                ),
                v.ListGroup(
                    value=True,
                    prepend_icon="mdi-account-circle",
                    v_slots=[
                        {"name": "activator", "children": [v.ListItemTitle(children=["Users"])]}
                    ],
                    children=[
                        v.ListGroup(
                            value=True,
                            no_action=True,
                            sub_group=True,
                            v_slots=[
                                {
                                    "name": "activator",
                                    "children": [
                                        v.ListItemContent(
                                            children=[v.ListItemTitle(children=["Admin"])]
                                        )
                                    ],
                                }
                            ],
                            children=[
                                v.ListItem(
                                    link=True,
                                    children=[
                                        v.ListItemTitle(children=[e["text"]]),
                                        v.ListItemIcon(children=[v.Icon(children=[e["icon"]])]),
                                    ],
                                )
                                for e in admins
                            ],
                        ),
                        v.ListGroup(
                            no_action=True,
                            sub_group=True,
                            v_slots=[
                                {
                                    "name": "activator",
                                    "children": [
                                        v.ListItemContent(
                                            children=[v.ListItemTitle(children=["Actions"])]
                                        )
                                    ],
                                }
                            ],
                            children=[
                                v.ListItem(
                                    link=True,
                                    children=[
                                        v.ListItemTitle(children=[e["text"]]),
                                        v.ListItemIcon(children=[v.Icon(children=[e["icon"]])]),
                                    ],
                                )
                                for e in cruds
                            ],
                        ),
                    ],
                ),
            ]
        )
    ],
)
