import ipyvuetify as v

drawer = v.NavigationDrawer(
    v_model=False,
    absolute=True,
    temporary=True,
    children=[
        v.List(
            nav=True,
            dense=True,
            children=[
                v.ListItemGroup(
                    children=[
                        v.ListItem(
                            children=[
                                v.ListItemIcon(children=[v.Icon(children=["mdi-home"])]),
                                v.ListItemTitle(children=["Home"]),
                            ]
                        ),
                        v.ListItem(
                            children=[
                                v.ListItemIcon(children=[v.Icon(children=["mdi-account"])]),
                                v.ListItemTitle(children=["Account"]),
                            ]
                        ),
                    ]
                )
            ],
        )
    ],
)


def toggle_drawer(widget, event, data):
    drawer.v_model = not drawer.v_model


nav_icon = v.AppBarNavIcon()
nav_icon.on_event("click", toggle_drawer)

v.Card(
    class_="mx-auto overflow-hidden",
    max_height=400,
    children=[
        v.AppBar(
            color="deep-purple",
            dark=True,
            children=[
                nav_icon,
                v.ToolbarTitle(children=["Title"]),
            ],
        ),
        drawer,
    ],
)
