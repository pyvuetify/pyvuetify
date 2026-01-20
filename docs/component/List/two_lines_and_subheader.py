import ipyvuetify as v

files = [
    {
        "color": "blue",
        "icon": "mdi-clipboard-text",
        "subtitle": "Jan 20, 2014",
        "title": "Vacation itinerary",
    },
    {
        "color": "amber",
        "icon": "mdi-gesture-tap-button",
        "subtitle": "Jan 10, 2014",
        "title": "Kitchen remodel",
    },
]

folders = [
    {
        "subtitle": "Jan 9, 2014",
        "title": "Photos",
    },
    {
        "subtitle": "Jan 17, 2014",
        "title": "Recipes",
    },
    {
        "subtitle": "Jan 28, 2014",
        "title": "Work",
    },
]

v.Card(
    class_="mx-auto my-2",
    width=600,
    children=[
        v.Toolbar(
            color="light-blue",
            dark=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["My files"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-view-module"])]),
            ],
        ),
        v.List(
            subheader=True,
            two_line=True,
            children=[
                v.Subheader(inset=True, children=["Folders"]),
                *[
                    v.ListItem(
                        key=i,
                        children=[
                            v.ListItemAvatar(
                                children=[
                                    v.Icon(
                                        class_="grey lighten-1", dark=True, children=["mdi-folder"]
                                    )
                                ]
                            ),
                            v.ListItemContent(
                                children=[
                                    v.ListItemTitle(children=[e["title"]]),
                                    v.ListItemSubtitle(children=[e["subtitle"]]),
                                ]
                            ),
                            v.ListItemAction(
                                children=[
                                    v.Btn(
                                        icon=True,
                                        children=[
                                            v.Icon(
                                                color="grey lighten-1", children=["mdi-information"]
                                            )
                                        ],
                                    )
                                ]
                            ),
                        ],
                    )
                    for i, e in enumerate(folders)
                ],
                v.Divider(inset=True),
                v.Subheader(inset=True, children=["Files"]),
                *[
                    v.ListItem(
                        key=i,
                        children=[
                            v.ListItemAvatar(
                                children=[
                                    v.Icon(class_=e["color"], dark=True, children=[e["icon"]])
                                ]
                            ),
                            v.ListItemContent(
                                children=[
                                    v.ListItemTitle(children=[e["title"]]),
                                    v.ListItemSubtitle(children=[e["subtitle"]]),
                                ]
                            ),
                            v.ListItemAction(
                                children=[
                                    v.Btn(
                                        icon=True,
                                        children=[
                                            v.Icon(
                                                color="grey lighten-1", children=["mdi-information"]
                                            )
                                        ],
                                    )
                                ]
                            ),
                        ],
                    )
                    for i, e in enumerate(files)
                ],
            ],
        ),
    ],
)
