import ipyvuetify as v

items = [
    {"text": "My Files", "icon": "mdi-folder"},
    {"text": "Shared with me", "icon": "mdi-account-multiple"},
    {"text": "Starred", "icon": "mdi-star"},
    {"text": "Recent", "icon": "mdi-history"},
    {"text": "Offline", "icon": "mdi-check-circle"},
    {"text": "Uploads", "icon": "mdi-upload"},
    {"text": "Backups", "icon": "mdi-cloud-upload"},
]

v.Card(
    class_="mx-auto my-2",
    max_width=256,
    tile=True,
    children=[
        v.NavigationDrawer(
            permanent=True,
            children=[
                v.SystemBar(),
                v.List(
                    nav=True,
                    dense=True,
                    children=[
                        v.ListItem(
                            children=[
                                v.ListItemAvatar(
                                    children=[
                                        v.Img(src="https://cdn.vuetifyjs.com/images/john.png")
                                    ]
                                )
                            ]
                        ),
                        v.ListItem(
                            link=True,
                            children=[
                                v.ListItemContent(
                                    children=[
                                        v.ListItemTitle(class_="text-h6", children=["John Leider"]),
                                        v.ListItemSubtitle(children=["john@vuetifyjs.com"]),
                                    ]
                                ),
                                v.ListItemAction(children=[v.Icon(children=["mdi-menu-down"])]),
                            ],
                        ),
                    ],
                ),
                v.Divider(),
                v.List(
                    nav=True,
                    dense=True,
                    children=[
                        v.ListItemGroup(
                            v_model=2,
                            color="success",
                            children=[
                                v.ListItem(
                                    key=i,
                                    children=[
                                        v.ListItemIcon(children=[v.Icon(children=[e["icon"]])]),
                                        v.ListItemContent(
                                            children=[v.ListItemTitle(children=[e["text"]])]
                                        ),
                                    ],
                                )
                                for i, e in enumerate(items)
                            ],
                        )
                    ],
                ),
            ],
        )
    ],
)
