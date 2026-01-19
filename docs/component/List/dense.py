import ipyvuetify as v

items = [
    {"text": "Real-Time", "icon": "mdi-clock"},
    {"text": "Audience", "icon": "mdi-account"},
    {"text": "Conversions", "icon": "mdi-flag"},
]

v.Card(
    class_="my-2 mx-auto",
    width=400,
    tile=True,
    children=[
        v.List(
            dense=True,
            children=[
                v.Subheader(children=["REPORTS"]),
                v.ListItemGroup(
                    v_model=1,
                    color="primary",
                    children=[
                        v.ListItem(
                            key=i,
                            children=[
                                v.ListItemIcon(children=[v.Icon(children=[e["icon"]])]),
                                v.ListItemContent(children=[v.ListItemTitle(children=[e["text"]])]),
                            ],
                        )
                        for i, e in enumerate(items)
                    ],
                ),
            ],
        )
    ],
)
