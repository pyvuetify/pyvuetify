import ipyvuetify as v

items = [
    {"icon": "mdi-email", "title": "Inbox"},
    {"icon": "mdi-account-supervisor-circle", "title": "Supervisors"},
    {"icon": "mdi-clock-start", "title": "Clock-in"},
]

v.Card(
    class_="mx-auto my-2",
    height=400,
    width=400,
    children=[
        v.NavigationDrawer(
            absolute=True,
            dark=True,
            src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",
            width=400,
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
                    ]
                )
            ],
        )
    ],
)
