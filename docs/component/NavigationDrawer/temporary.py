import pyvuetify as v

v.Card(
    children=[
        v.Layout(
            children=[
                v.NavigationDrawer(
                    v_model="drawer",
                    temporary=True,
                    children=[
                        v.ListItem(
                            prepend_avatar="https://randomuser.me/api/portraits/men/78.jpg",
                            title="John Leider",
                        ),
                        v.Divider(),
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
                v.Main(
                    style_="height: 250px",
                    children=[
                        v.Html(
                            tag="div",
                            class_="d-flex justify-center align-center h-100",
                            children=[
                                v.Btn(
                                    color="primary",
                                    children=["Toggle"],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
