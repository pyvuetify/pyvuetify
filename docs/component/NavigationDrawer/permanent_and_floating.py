import pyvuetify as v

v.Card(
    children=[
        v.Layout(
            children=[
                v.NavigationDrawer(
                    floating=True,
                    permanent=True,
                    children=[
                        v.List(
                            density="compact",
                            nav=True,
                            children=[
                                v.ListItem(
                                    prepend_icon="mdi-view-dashboard",
                                    title="Home",
                                    value="home",
                                ),
                                v.ListItem(
                                    prepend_icon="mdi-forum",
                                    title="About",
                                    value="about",
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
