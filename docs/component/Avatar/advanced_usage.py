import ipyvuetify as v

messages = [
    {
        "avatar": "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        "name": "John Leider",
        "title": "Welcome to Vuetify!",
        "excerpt": "Thank you for joining our community...",
        "new": None,
        "total": None,
        "color": None,
        "icon": None,
    },
    {
        "color": "red",
        "icon": "mdi-account-multiple",
        "name": "Social",
        "new": 1,
        "total": 3,
        "title": "Twitter",
        "excerpt": None,
        "avatar": None,
    },
    {
        "color": "teal",
        "icon": "mdi-tag",
        "name": "Promos",
        "new": 2,
        "total": 4,
        "title": "Shop your way",
        "excerpt": "New deals available, Join Today",
        "avatar": None,
    },
]

lorem = (
    "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico "
    "iuvaret debitis mel an, et cum zril menandri."
)

panels = []
for i, message in enumerate(messages):
    avatar_content = []
    if message["avatar"]:
        avatar_content.append(v.Img(alt="Avatar", src=message["avatar"]))
    else:
        avatar_content.append(v.Icon(color=message["color"], children=[message["icon"]]))

    header_cols = [
        v.Col(cols=4, sm=2, md=1, children=[v.Avatar(size=36, children=avatar_content)]),
        v.Col(
            class_="hidden-xs-only",
            sm=5,
            md=3,
            children=[
                v.Html(tag="strong", children=[message["name"]]),
                v.Html(
                    tag="span",
                    class_="grey--text",
                    children=[f" ({message['total']})" if "total" in message else ""],
                ),
            ],
        ),
        v.Col(
            class_="text-no-wrap",
            cols=5,
            sm=3,
            children=[
                v.Chip(
                    color=f"{message['color']} lighten-4",
                    class_="ml-0 mr-2 black--text",
                    label=True,
                    small=True,
                    children=[f"{message['new'] if 'new' in message else ''} new"],
                ),
                v.Html(tag="strong", children=[message["title"]]),
            ],
        ),
    ]

    if message["excerpt"]:
        header_cols.append(
            v.Col(
                class_="grey--text text-truncate hidden-sm-and-down",
                children=[f"— {message['excerpt']}"],
            )
        )

    panels.append(
        v.ExpansionPanel(
            hide_actions=True,
            children=[
                v.ExpansionPanelHeader(
                    children=[
                        v.Row(
                            align="center", class_="spacer", no_gutters=True, children=header_cols
                        )
                    ]
                ),
                v.ExpansionPanelContent(children=[v.Divider(), v.CardText(children=[lorem])]),
            ],
        )
    )

v.Container(
    fluid=True,
    children=[
        v.Row(
            justify="center",
            children=[
                v.Subheader(children=["Today"]),
                v.ExpansionPanels(popout=True, children=panels),
            ],
        )
    ],
)
