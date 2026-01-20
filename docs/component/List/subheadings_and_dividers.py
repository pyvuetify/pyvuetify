import ipyvuetify as v

items = [
    {"title": "Notifications", "subtitle": "Allow notifications"},
    {"title": "Sound", "subtitle": "Hangouts message"},
    {"title": "Video sounds", "subtitle": "Hangouts video call"},
    {"title": "Invites", "subtitle": "Notify when receiving invites"},
]

v.Card(
    width=475,
    class_="mx-auto my-2",
    children=[
        v.Toolbar(
            color="teal",
            dark=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Settings"]),
            ],
        ),
        v.List(
            two_line=True,
            subheader=True,
            children=[
                v.Subheader(children=["General"]),
                v.ListItem(
                    children=[
                        v.ListItemContent(
                            children=[
                                v.ListItemTitle(children=["Profile photo"]),
                                v.ListItemSubtitle(children=["Change your Google+ profile photo"]),
                            ]
                        ),
                    ]
                ),
                v.ListItem(
                    children=[
                        v.ListItemContent(
                            children=[
                                v.ListItemTitle(children=["Show your status"]),
                                v.ListItemSubtitle(children=["Your status is visible to everyone"]),
                            ]
                        ),
                    ]
                ),
                v.Divider(),
                v.Subheader(children=["Hangout notifications"]),
                v.ListItemGroup(
                    multiple=True,
                    children=[
                        v.ListItem(
                            v_slots=[
                                {
                                    "name": "default",
                                    "variables": "default",
                                    "children": [
                                        v.ListItemAction(
                                            children=[v.Checkbox(v_model="default.active")]
                                        ),
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(children=[item["title"]]),
                                                v.ListItemSubtitle(children=[item["subtitle"]]),
                                            ]
                                        ),
                                    ],
                                }
                            ]
                        )
                        for item in items
                    ],
                ),
            ],
        ),
    ],
)
