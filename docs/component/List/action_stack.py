import ipyvuetify as v

items = [
    {
        "action": "15 min",
        "headline": "Brunch this weekend?",
        "subtitle": "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        "title": "Ali Connors",
    },
    {
        "action": "2 hr",
        "headline": "Summer BBQ",
        "subtitle": "Wish I could come, but I'm out of town this weekend.",
        "title": "me, Scrott, Jennifer",
    },
    {
        "action": "6 hr",
        "headline": "Oui oui",
        "subtitle": "Do you have Paris recommendations? Have you ever been?",
        "title": "Sandra Adams",
    },
    {
        "action": "12 hr",
        "headline": "Birthday gift",
        "subtitle": "Have any ideas about what we should get Heidi for her birthday?",
        "title": "Trevor Hansen",
    },
    {
        "action": "18hr",
        "headline": "Recipe to try",
        "subtitle": "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        "title": "Britta Holt",
    },
]

v.Card(
    class_="mx-auto my-2",
    width=500,
    children=[
        v.Toolbar(
            color="pink",
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
                    children=[v.Icon(children=["mdi-checkbox-marked-circle"])],
                ),
            ],
        ),
        v.List(
            two_line=True,
            children=[
                v.ListItemGroup(
                    multiple=True,
                    active_class="pink--text",
                    children=[
                        v.ListItem(
                            key=item["title"],
                            children=[
                                v.ListItemContent(
                                    children=[
                                        v.ListItemTitle(children=[item["title"]]),
                                        v.ListItemSubtitle(
                                            class_="text--primary",
                                            children=[item["headline"]],
                                        ),
                                        v.ListItemSubtitle(children=[item["subtitle"]]),
                                    ]
                                ),
                                v.ListItemAction(
                                    children=[
                                        v.ListItemActionText(children=[item["action"]]),
                                        v.Icon(
                                            color="grey lighten-1",
                                            children=["mdi-star-outline"],
                                        ),
                                    ]
                                ),
                            ],
                        )
                        for item in items
                    ],
                )
            ],
        ),
    ],
)
