import ipyvuetify as v

items = [
    {
        "action": "mdi-ticket",
        "items": [{"title": "List Item"}],
        "title": "Attractions",
    },
    {
        "action": "mdi-silverware-fork-knife",
        "active": True,
        "items": [
            {"title": "Breakfast & brunch"},
            {"title": "New American"},
            {"title": "Sushi"},
        ],
        "title": "Dining",
    },
    {
        "action": "mdi-school",
        "active": False,
        "items": [{"title": "List Item"}],
        "title": "Education",
    },
    {
        "action": "mdi-home",
        "active": False,
        "items": [{"title": "List Item"}],
        "title": "Family",
    },
    {
        "action": "mdi-bottle-tonic-plus",
        "active": False,
        "items": [{"title": "List Item"}],
        "title": "Health",
    },
    {
        "action": "mdi-briefcase",
        "active": False,
        "items": [{"title": "List Item"}],
        "title": "Office",
    },
    {
        "action": "mdi-tag",
        "active": False,
        "items": [{"title": "List Item"}],
        "title": "Promotions",
    },
]

v.Card(
    class_="mx-auto my-2",
    width=600,
    children=[
        v.Toolbar(
            color="teal",
            dark=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Topics"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
            ],
        ),
        v.List(
            children=[
                v.ListGroup(
                    key=item["title"],
                    bind="item",
                    no_action=True,
                    prepend_icon=item["action"],
                    v_slots=[
                        {
                            "name": "activator",
                            "children": [
                                v.ListItemContent(
                                    children=[v.ListItemTitle(children=[item["title"]])]
                                )
                            ],
                        }
                    ],
                    children=[
                        v.ListItem(
                            key=child["title"],
                            children=[
                                v.ListItemContent(
                                    children=[v.ListItemTitle(children=[child["title"]])]
                                )
                            ],
                        )
                        for child in item["items"]
                    ],
                )
                for item in items
            ]
        ),
    ],
)
