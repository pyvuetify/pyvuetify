import ipyvuetify as v

items = [
    {"icon": "mdi-inbox", "text": "Inbox"},
    {"icon": "mdi-star", "text": "Star"},
    {"icon": "mdi-send", "text": "Send"},
    {"icon": "mdi-email-open", "text": "Drafts"},
]

v.Card(
    class_="mx-auto my-2",
    width=400,
    children=[
        v.List(
            children=[
                v.ListItemGroup(
                    v_model=2,
                    color="indigo",
                    children=[
                        v.ListItem(
                            key=i,
                            children=[
                                v.ListItemIcon(children=[v.Icon(children=[item["icon"]])]),
                                v.ListItemContent(
                                    children=[v.ListItemTitle(children=[item["text"]])]
                                ),
                            ],
                        )
                        for i, item in enumerate(items)
                    ],
                )
            ]
        )
    ],
)
