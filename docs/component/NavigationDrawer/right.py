import pyvuetify as v

v.Card(
    children=[
        v.Layout(
            children=[
                v.NavigationDrawer(
                    location="right",
                    permanent=True,
                    children=[
                        v.Html(
                            tag="template",
                            children=[
                                v.ListItem(
                                    lines="two",
                                    prepend_avatar="https://randomuser.me/api/portraits/women/81.jpg",
                                    subtitle="Logged in",
                                    title="Jane Smith",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
