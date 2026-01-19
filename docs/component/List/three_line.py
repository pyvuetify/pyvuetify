import ipyvuetify as v

items = [
    {
        "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        "title": "Brunch this weekend?",
        "subtitle": "Ali Connors - I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
    {
        "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        "title": "Summer BBQ 4",
        "subtitle": "to Alex, Scott, Jennifer - Wish I could come, but I'm out of town this weekend.",
    },
    {
        "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        "title": "Oui oui",
        "subtitle": "Sandra Adams - Do you have Paris recommendations? Have you ever been?",
    },
    {
        "avatar": "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        "title": "Birthday gift",
        "subtitle": "Trevor Hansen - Have any ideas about what we should get Heidi for her birthday?",
    },
    {
        "avatar": "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        "title": "Recipe to try",
        "subtitle": "Britta Holt - We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
    },
]

v.Card(
    class_="mx-auto my-2",
    max_width=450,
    children=[
        v.Toolbar(
            color="cyan",
            dark=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Inbox"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
            ],
        ),
        v.Html(tag="h3", children=["Today"], class_="ml-3"),
        v.List(
            three_line=True,
            children=[
                v.ListItem(
                    key=i,
                    children=[
                        v.ListItemAvatar(children=[v.Img(src=e["avatar"])]),
                        v.ListItemContent(
                            children=[
                                v.ListItemTitle(
                                    children=[v.Html(tag="span", children=[e["title"]])]
                                ),
                                v.ListItemSubtitle(
                                    children=[v.Html(tag="span", children=[e["subtitle"]])]
                                ),
                                v.Divider(),
                            ]
                        ),
                    ],
                )
                for i, e in enumerate(items)
            ],
        ),
    ],
)
