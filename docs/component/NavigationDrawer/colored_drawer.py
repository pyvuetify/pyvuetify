import ipyvuetify as v

items = [
    {"title": "Dashboard", "icon": "mdi-view-dashboard"},
    {"title": "Account", "icon": "mdi-account-box"},
    {"title": "Admin", "icon": "mdi-gavel"},
]

v.Card(
    class_="mx-auto my-2",
    height=400,
    width=256,
    children=[
        v.NavigationDrawer(
            class_="deep-purple accent-4",
            dark=True,
            permanent=True,
            children=[
                v.List(
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
                ),
            ],
            v_slots=[
                {
                    "name": "append",
                    "children": v.Html(
                        tag="div", class_="pa-2", children=[v.Btn(block=True, children=["Logout"])]
                    ),
                }
            ],
        )
    ],
)
