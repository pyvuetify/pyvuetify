import ipyvuetify as v

items = [
    {"icon": True, "title": "Jason Oner", "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg"},
    {
        "icon": False,
        "title": "Travis Howard",
        "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    },
    {
        "icon": False,
        "title": "Ali Connors",
        "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    },
    {
        "icon": False,
        "title": "Cindy Baker",
        "avatar": "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    },
]

v.Card(
    width=500,
    class_="mx-auto my-2",
    children=[
        v.Toolbar(
            color="indigo",
            dark=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Inbox"]),
                v.Spacer(),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-magnify"])],
                ),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-dots-vertical"])],
                ),
            ],
        ),
        v.List(
            children=[
                v.ListItem(
                    children=[
                        v.ListItemIcon(
                            children=[
                                v.Icon(color="pink", children=["mdi-star"]),
                            ]
                        )
                        if item["icon"]
                        else v.ListItemIcon(),
                        v.ListItemContent(
                            children=[
                                v.ListItemTitle(children=[item["title"]]),
                            ]
                        ),
                        v.ListItemAvatar(
                            children=[
                                v.Img(src=item["avatar"]),
                            ]
                        ),
                    ]
                )
                for item in items
            ]
        ),
    ],
)
