import pyvuetify as v

v.Card(
    children=[
        v.Layout(
            children=[
                v.NavigationDrawer(
                    expand_on_hover=True,
                    permanent=True,
                    rail=True,
                    children=[
                        v.List(
                            children=[
                                v.ListItem(
                                    prepend_avatar="https://randomuser.me/api/portraits/women/85.jpg",
                                    subtitle="sandra_a88@gmailcom",
                                    title="Sandra Adams",
                                ),
                            ],
                        ),
                        v.Divider(),
                        v.List(
                            density="compact",
                            nav=True,
                            children=[
                                v.ListItem(
                                    prepend_icon="mdi-folder",
                                    title="My Files",
                                    value="myfiles",
                                ),
                                v.ListItem(
                                    prepend_icon="mdi-account-multiple",
                                    title="Shared with me",
                                    value="shared",
                                ),
                                v.ListItem(
                                    prepend_icon="mdi-star",
                                    title="Starred",
                                    value="starred",
                                ),
                            ],
                        ),
                    ],
                ),
                v.Main(style_="height: 250px"),
            ],
        ),
    ],
)
