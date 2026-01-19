import ipyvuetify as v

tiles = [
    {"img": "keep.png", "title": "Keep"},
    {"img": "inbox.png", "title": "Inbox"},
    {"img": "hangouts.png", "title": "Hangouts"},
    {"img": "messenger.png", "title": "Messenger"},
    {"img": "google.png", "title": "Google+"},
]

bottom_sheet = v.BottomSheet(
    v_model=False,
    v_slots=[
        {
            "name": "activator",
            "variable": "x",
            "children": v.Btn(color="purple", dark=True, children=["Open In"]),
        }
    ],
    children=[v.List(children=[v.Subheader(children=["Open in"])])],
)

list_items = []
for tile in tiles:
    item = v.ListItem(
        children=[
            v.ListItemAvatar(
                children=[
                    v.Avatar(
                        size=32,
                        tile=True,
                        children=[
                            v.Img(
                                src=f"https://cdn.vuetifyjs.com/images/bottom-sheets/{tile['img']}",
                                alt=tile["title"],
                            )
                        ],
                    )
                ]
            ),
            v.ListItemTitle(children=[tile["title"]]),
        ]
    )

    item.on_event("click", lambda *args: setattr(bottom_sheet, "v_model", False))
    list_items.append(item)

bottom_sheet.children[0].children.extend(list_items)
v.Container(class_="text-center", children=[bottom_sheet])
