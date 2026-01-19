import ipyvuetify as v

items = [
    {"title": "Home", "icon": "mdi-view-dashboard"},
    {"title": "About", "icon": "mdi-forum"},
]

v.Card(
    class_="pa-12",
    color="indigo darken-2",
    flat=True,
    children=[
        v.Card(
            elevation="12",
            width=256,
            children=[
                v.NavigationDrawer(
                    floating=True,
                    permanent=True,
                    children=[
                        v.List(
                            dense=True,
                            rounded=True,
                            children=[
                                v.ListItem(
                                    link=True,
                                    children=[
                                        v.ListItemIcon(
                                            children=[v.Icon(children=[item["icon"]])],
                                        ),
                                        v.ListItemContent(
                                            children=[v.ListItemTitle(children=[item["title"]])],
                                        ),
                                    ],
                                )
                                for item in items
                            ],
                        )
                    ],
                )
            ],
        )
    ],
)
