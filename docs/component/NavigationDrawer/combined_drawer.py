import ipyvuetify as v

items = [
    {"title": "Home", "icon": "mdi-view-dashboard"},
    {"title": "About", "icon": "mdi-forum"},
]

links = ["Home", "Contacts", "Settings"]

v.Card(
    class_="mx-auto my-2",
    height=400,
    width=400,
    children=[
        v.NavigationDrawer(
            permanent=True,
            children=[
                v.Layout(
                    class_="fill-height",
                    children=[
                        v.NavigationDrawer(
                            dark=True,
                            mini_variant=True,
                            mini_variant_width="56",
                            permanent=True,
                            children=[
                                v.ListItem(
                                    class_="px-2",
                                    children=[
                                        v.ListItemAvatar(
                                            children=[
                                                v.Img(
                                                    src="https://randomuser.me/api/portraits/women/75.jpg",
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
                                                    children=[
                                                        v.ListItemTitle(children=[item["title"]])
                                                    ],
                                                ),
                                            ],
                                        )
                                        for item in items
                                    ],
                                ),
                            ],
                        ),
                        v.List(
                            class_="grow",
                            children=[
                                v.ListItem(
                                    link=True,
                                    children=[v.ListItemTitle(children=[link])],
                                )
                                for link in links
                            ],
                        ),
                    ],
                )
            ],
        )
    ],
)
