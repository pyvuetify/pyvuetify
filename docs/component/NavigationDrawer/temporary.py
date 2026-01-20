from ipywidgets import jslink

import ipyvuetify as v

switch = v.Switch(label="Toggle Drawer", v_model=False)

drawer = v.NavigationDrawer(
    v_model=False,
    absolute=True,
    children=[
        v.List(
            children=[
                v.ListItem(
                    class_="px-2",
                    children=[
                        v.ListItemAvatar(
                            children=[
                                v.Img(
                                    src="https://randomuser.me/api/portraits/women/85.jpg",
                                ),
                            ],
                        ),
                    ],
                ),
                v.ListItem(
                    link=True,
                    children=[
                        v.ListItemContent(
                            children=[
                                v.ListItemTitle(
                                    class_="text-h6",
                                    children=["Sandra Adams"],
                                ),
                                v.ListItemSubtitle(
                                    children=["sandra.adams@example.com"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
        v.Divider(),
        v.List(
            nav=True,
            dense=True,
            children=[
                v.ListItem(
                    link=True,
                    children=[
                        v.ListItemIcon(
                            children=[v.Icon(children=["mdi-folder"])],
                        ),
                        v.ListItemTitle(children=["My Files"]),
                    ],
                ),
                v.ListItem(
                    link=True,
                    children=[
                        v.ListItemIcon(
                            children=[v.Icon(children=["mdi-account-multiple"])],
                        ),
                        v.ListItemTitle(children=["Shared with me"]),
                    ],
                ),
                v.ListItem(
                    link=True,
                    children=[
                        v.ListItemIcon(
                            children=[v.Icon(children=["mdi-star"])],
                        ),
                        v.ListItemTitle(children=["Starred"]),
                    ],
                ),
            ],
        ),
    ],
)

jslink((switch, "v_model"), (drawer, "v_model"))

v.Card(
    class_="mx-auto my-2",
    height=400,
    width=800,
    children=[v.Layout(align_content_center=True, justify_center=True, children=[switch]), drawer],
)
