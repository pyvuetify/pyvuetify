import ipyvuetify as v

items = [
    {
        "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        "title": "Summer BBQ",
        "subtitle": "to Alex, Scott, Jennifer - Wish I could come, but I'm out of town this weekend.",
    },
    {
        "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        "title": "Oui oui",
        "subtitle": "Sandra Adams - Do you have Paris recommendations? Have you ever been?",
    },
    {
        "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        "title": "Brunch this weekend?",
        "subtitle": "Ali Connors - I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
]

list_items = [
    v.ListItem(
        children=[
            v.ListItemAvatar(children=[v.Img(src=item["avatar"])]),
            v.ListItemContent(
                children=[
                    v.ListItemTitle(children=[item["title"]]),
                    v.ListItemSubtitle(children=[item["subtitle"]]),
                ]
            ),
        ]
    )
    for item in items
]

v.Container(
    children=[
        v.Card(
            max_width="400",
            children=[
                v.CardTitle(children=[v.Html(tag="h2", children=["Today"])]),
                v.CardText(
                    children=[
                        v.List(
                            two_line=True,
                            children=[
                                list_items[0],
                                v.Divider(inset=True),
                                list_items[1],
                                v.Divider(inset=True),
                                list_items[2],
                            ],
                        )
                    ]
                ),
            ],
        )
    ],
)
