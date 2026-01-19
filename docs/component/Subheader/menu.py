import ipyvuetify as v

items = [
    ("mdi-inbox-arrow-down", "Inbox"),
    ("mdi-send", "Sent"),
    ("mdi-delete", "Trash"),
    ("mdi-alert-octagon", "Spam"),
]

labels = [
    ("mdi-label", "Family"),
    ("mdi-label", "Friends"),
    ("mdi-label", "Work"),
]

v.Row(
    children=[
        v.Col(
            cols=12,
            sm=6,
            offset_sm=3,
            children=[
                v.Card(
                    children=[
                        v.Toolbar(
                            color="teal",
                            dark=True,
                            children=[
                                v.AppBarNavIcon(),
                                v.ToolbarTitle(children=["Manage"]),
                                v.Spacer(),
                                v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                            ],
                        ),
                        v.List(
                            children=[
                                v.ListItem(
                                    children=[
                                        v.ListItemAction(children=[v.Icon(children=[icon])]),
                                        v.ListItemContent(children=[title]),
                                    ]
                                )
                                for icon, title in items
                            ]
                            + [v.Divider(), v.Subheader(children=["Labels"])]
                            + [
                                v.ListItem(
                                    children=[
                                        v.ListItemAction(children=[v.Icon(children=[icon])]),
                                        v.ListItemContent(children=[title]),
                                    ]
                                )
                                for icon, title in labels
                            ]
                        ),
                    ]
                )
            ],
        )
    ]
)
