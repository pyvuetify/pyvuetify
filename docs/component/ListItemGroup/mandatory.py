import ipyvuetify as v

items = [
    {
        "icon": "mdi-wifi",
        "text": "Wifi",
    },
    {
        "icon": "mdi-bluetooth",
        "text": "Bluetooth",
    },
    {"icon": "mdi-chart-donut", "text": "Data Usage"},
]

v.Card(
    class_="mx-auto my-2",
    width=400,
    children=[
        v.List(
            children=[
                v.ListItemGroup(
                    mandatory=True,
                    v_model=1,
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
