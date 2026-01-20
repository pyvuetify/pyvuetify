import ipyvuetify as v

items = [
    {
        "avatar": "https://picsum.photos/250/300?image=660",
        "title": "Meeting @ Noon",
        "subtitle": "Spike Lee - I'll be in your neighborhood",
    },
    {
        "avatar": "https://picsum.photos/250/300?image=821",
        "title": "Summer BBQ",
        "subtitle": "to Operations support - Wish I could come.",
    },
    {
        "avatar": "https://picsum.photos/250/300?image=783",
        "title": "Yes yes",
        "subtitle": "Bella - Do you have Paris recommendations",
    },
    {
        "avatar": "https://picsum.photos/250/300?image=1006",
        "title": "Dinner tonight?",
        "subtitle": "LaToya - Do you want to hang out?",
    },
    {
        "avatar": "https://picsum.photos/250/300?image=146",
        "title": "So long",
        "subtitle": "Nancy - Do you see what time it is?",
    },
    {
        "avatar": "https://picsum.photos/250/300?image=1008",
        "title": "Breakfast?",
        "subtitle": "LaToya - Do you want to hang out?",
    },
    {
        "avatar": "https://picsum.photos/250/300?image=839",
        "title": "Winter Porridge",
        "subtitle": "cc: Daniel - Tell me more...",
    },
    {
        "avatar": "https://picsum.photos/250/300?image=145",
        "title": "Oui oui",
        "subtitle": "Nancy - Do you see what time it is?",
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
            max_width="600",
            children=[
                v.Toolbar(
                    color="orange lighten-1",
                    dark=True,
                    children=[
                        v.AppBarNavIcon(),
                        v.ToolbarTitle(children=["Message Board"]),
                        v.Spacer(),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                    ],
                ),
                v.List(
                    two_line=True,
                    children=[
                        v.Subheader(inset=True, children=["Today"]),
                        v.Divider(inset=True, class_="mt-0"),
                        *list_items[:3],
                        v.Subheader(inset=True, children=["Yesterday"]),
                        v.Divider(inset=True, class_="mt-0"),
                        *list_items[3:6],
                        v.Subheader(inset=True, children=["Last Week"]),
                        v.Divider(inset=True, class_="mt-0"),
                        *list_items[6:],
                    ],
                ),
            ],
        )
    ]
)
