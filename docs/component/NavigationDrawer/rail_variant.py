import pyvuetify as v

v.Card(
    children=[
        v.Layout(
            children=[
                v.NavigationDrawer(
                    v_model="drawer",
                    # JS expression, needs manual conversion
                    rail="rail",
                    # JS expression, needs manual conversion
                    rail_width="wider ? 80 : undefined",
                    color="indigo",
                    permanent=True,
                    children=[
                        v.List(
                            children=[
                                v.ListItem(
                                    prepend_avatar="https://randomuser.me/api/portraits/men/85.jpg",
                                    title="John Leider",
                                    children=[
                                        v.Html(
                                            tag="template",
                                            children=[
                                                v.Avatar(
                                                    # JS expression, needs manual conversion
                                                    class_="{ 'mx-1': wider }",
                                                    # JS expression, needs manual conversion
                                                    size="(wider && rail) ? 40 : undefined",
                                                ),
                                            ],
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
