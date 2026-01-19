import ipyvuetify as v

v.Card(
    class_="mx-auto my-2",
    width=400,
    children=[
        v.Toolbar(
            color="purple",
            dark=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Settings"]),
                v.Spacer(),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-magnify"])],
                ),
            ],
        ),
        v.List(
            subheader=True,
            three_line=True,
            children=[
                v.Subheader(children=["User Controls"]),
                v.ListItem(
                    children=[
                        v.ListItemContent(
                            children=[
                                v.ListItemTitle(children=["Content filtering"]),
                                v.ListItemSubtitle(
                                    children=[
                                        "Set the content filtering level to restrict appts that can be downloaded"
                                    ]
                                ),
                            ]
                        )
                    ]
                ),
                v.ListItem(
                    children=[
                        v.ListItemContent(
                            children=[
                                v.ListItemTitle(children=["Password"]),
                                v.ListItemSubtitle(
                                    children=[
                                        "Require password for purchase or use password to restrict purchase"
                                    ]
                                ),
                            ]
                        )
                    ]
                ),
                v.Divider(),
                v.Subheader(children=["General"]),
                v.ListItemGroup(
                    multiple=True,
                    active_class="",
                    children=[
                        v.ListItem(
                            children=[
                                v.ListItemAction(children=[v.Checkbox()]),
                                v.ListItemContent(
                                    children=[
                                        v.ListItemTitle(children=["Notifications"]),
                                        v.ListItemSubtitle(
                                            children=[
                                                "Notify me about updates to apps or games that I downloaded"
                                            ]
                                        ),
                                    ]
                                ),
                            ]
                        ),
                        v.ListItem(
                            children=[
                                v.ListItemAction(children=[v.Checkbox()]),
                                v.ListItemContent(
                                    children=[
                                        v.ListItemTitle(children=["Sound"]),
                                        v.ListItemSubtitle(
                                            children=[
                                                "Auto-update apps at any time. Data charges may apply"
                                            ]
                                        ),
                                    ]
                                ),
                            ]
                        ),
                        v.ListItem(
                            children=[
                                v.ListItemAction(children=[v.Checkbox()]),
                                v.ListItemContent(
                                    children=[
                                        v.ListItemTitle(children=["Auto-add widgets"]),
                                        v.ListItemSubtitle(
                                            children=[
                                                "Automatically add home screen widgets when downloads complete"
                                            ]
                                        ),
                                    ]
                                ),
                            ]
                        ),
                    ],
                ),
            ],
        ),
    ],
)
