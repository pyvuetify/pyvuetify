import ipyvuetify as v

v.Menu(
    close_on_content_click=False,
    nudge_width=200,
    offset_x=True,
    v_slots=[
        {
            "name": "activator",
            "variable": "props",
            "children": v.Btn(
                class_="mx-auto my-2",
                children=["Menu as Popover"],
                color="indigo",
                dark=True,
                v_bind="props.attrs",
                v_on="props.on",
            ),
        }
    ],
    children=[
        v.Card(
            children=[
                v.List(
                    children=[
                        v.ListItem(
                            children=[
                                v.ListItemAvatar(
                                    children=[
                                        v.Img(
                                            src="https://cdn.vuetifyjs.com/images/john.jpg",
                                            alt="John",
                                        )
                                    ]
                                ),
                                v.ListItemContent(
                                    children=[
                                        v.ListItemTitle(children=["John Leider"]),
                                        v.ListItemSubtitle(children=["Founder of Vuetify"]),
                                    ]
                                ),
                                v.ListItemAction(
                                    children=[
                                        v.Btn(
                                            class_="red--text",
                                            icon=True,
                                            children=[v.Icon(children=["mdi-heart"])],
                                        )
                                    ]
                                ),
                            ]
                        ),
                    ]
                ),
                v.Divider(),
                v.List(
                    children=[
                        v.ListItem(
                            children=[
                                v.ListItemAction(children=[v.Switch(v_model=True, color="purple")]),
                                v.ListItemTitle(children=["Enable messages"]),
                            ]
                        ),
                        v.ListItem(
                            children=[
                                v.ListItemAction(
                                    children=[v.Switch(v_model=False, color="purple")]
                                ),
                                v.ListItemTitle(children=["Enable hints"]),
                            ]
                        ),
                    ]
                ),
            ]
        ),
    ],
)
