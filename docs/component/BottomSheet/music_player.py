import ipyvuetify as v

v.Container(
    class_="text-center",
    children=[
        v.BottomSheet(
            inset=True,
            v_slots=[
                {
                    "name": "activator",
                    "variable": "x",
                    "children": v.Btn(color="red", dark=True, children=["Open Player"]),
                }
            ],
            children=[
                v.Card(
                    tile=True,
                    children=[
                        v.ProgressLinear(value=50, class_="my-0", height=3),
                        v.List(
                            children=[
                                v.ListItem(
                                    children=[
                                        v.ListItemContent(
                                            children=[
                                                v.ListItemTitle(children=["The Walker"]),
                                                v.ListItemSubtitle(
                                                    children=["Fitz & The Trantrums"]
                                                ),
                                            ]
                                        ),
                                        v.Spacer(),
                                        v.ListItemIcon(
                                            children=[
                                                v.Btn(
                                                    icon=True,
                                                    children=[v.Icon(children=["mdi-rewind"])],
                                                )
                                            ]
                                        ),
                                        v.ListItemIcon(
                                            children=[
                                                v.Btn(
                                                    icon=True,
                                                    children=[v.Icon(children=["mdi-pause"])],
                                                )
                                            ]
                                        ),
                                        v.ListItemIcon(
                                            class_="ml-0",
                                            children=[
                                                v.Btn(
                                                    icon=True,
                                                    children=[
                                                        v.Icon(children=["mdi-fast-forward"])
                                                    ],
                                                )
                                            ],
                                        ),
                                    ]
                                )
                            ]
                        ),
                    ],
                )
            ],
        )
    ],
)
