import ipyvuetify as v

items = [
    {"title": "Inbox", "icon": "mdi-inbox"},
    {"title": "Sent", "icon": "mdi-send"},
    {"title": "Trash", "icon": "mdi-delete"},
]

v.Card(
    class_="mx-auto my-2",
    height=400,
    width=256,
    children=[
        v.NavigationDrawer(
            permanent=True,
            children=[
                v.ListItem(
                    children=[
                        v.ListItemContent(
                            children=[
                                v.ListItemTitle(
                                    class_="text-h6",
                                    children=["Application"],
                                ),
                                v.ListItemSubtitle(
                                    children=["subtext"],
                                ),
                            ],
                        ),
                    ],
                ),
                v.Divider(),
                v.List(
                    dense=True,
                    nav=True,
                    children=[
                        v.ListItem(
                            link=True,
                            children=[
                                v.ListItemIcon(
                                    children=[v.Icon(children=[item["icon"]])],
                                ),
                                v.ListItemContent(
                                    children=[v.ListItemTitle(children=["Inbox"])],
                                ),
                            ],
                        )
                        for item in items
                    ],
                ),
            ],
        )
    ],
)
