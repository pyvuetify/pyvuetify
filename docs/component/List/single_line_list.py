import ipyvuetify as v

recent = [
    {
        "active": True,
        "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        "title": "Jason Oner",
    },
    {
        "active": True,
        "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        "title": "Mike Carlson",
    },
    {
        "active": False,
        "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        "title": "Cindy Baker",
    },
    {
        "active": False,
        "avatar": "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        "title": "Ali Connors",
    },
]

previous = [
    {
        "title": "Travis Howard",
        "avatar": "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    }
]

v.Card(
    class_="mx-auto my-2",
    width=500,
    children=[
        v.Toolbar(
            color="deep-purple accent-4",
            dark=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["New Chat"]),
                v.Spacer(),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-magnify"])],
                ),
            ],
        ),
        v.List(
            subheader=True,
            children=[
                v.Subheader(children=["Recent chat"]),
                *[
                    v.ListItem(
                        children=[
                            v.ListItemAvatar(
                                children=[
                                    v.Img(
                                        alt=f"{chat['title']} avatar",
                                        src=chat["avatar"],
                                    ),
                                ]
                            ),
                            v.ListItemContent(
                                children=[
                                    v.ListItemTitle(children=[chat["title"]]),
                                ]
                            ),
                            v.ListItemIcon(
                                children=[
                                    v.Icon(
                                        color="deep-purple accent-4" if chat["active"] else "grey",
                                        children=["mdi-message-outline"],
                                    ),
                                ]
                            ),
                        ]
                    )
                    for chat in recent
                ],
                v.Divider(),
                v.Subheader(children=["Previous chats"]),
                *[
                    v.ListItem(
                        children=[
                            v.ListItemAvatar(
                                children=[
                                    v.Img(
                                        alt=f"{chat['title']} avatar",
                                        src=chat["avatar"],
                                    ),
                                ]
                            ),
                            v.ListItemContent(
                                children=[
                                    v.ListItemTitle(children=[chat["title"]]),
                                ]
                            ),
                        ]
                    )
                    for chat in previous
                ],
            ],
        ),
    ],
)
