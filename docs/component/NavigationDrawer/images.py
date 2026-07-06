import pyvuetify as v

v.Card(
    children=[
        v.Layout(
            children=[
                v.NavigationDrawer(
                    image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",
                    theme="dark",
                    permanent=True,
                    children=[
                        v.List(
                            nav=True,
                            children=[
                                v.ListItem(
                                    prepend_icon="mdi-email",
                                    title="Inbox",
                                    value="inbox",
                                ),
                                v.ListItem(
                                    prepend_icon="mdi-account-supervisor-circle",
                                    title="Supervisors",
                                    value="supervisors",
                                ),
                                v.ListItem(
                                    prepend_icon="mdi-clock-start",
                                    title="Clock-in",
                                    value="clockin",
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
