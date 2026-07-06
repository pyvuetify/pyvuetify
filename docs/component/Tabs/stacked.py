import pyvuetify as v

v.Card(
    children=[
        v.Tabs(
            v_model="tab",
            align_tabs="center",
            bg_color="deep-purple-accent-4",
            stacked=True,
            children=[
                v.Tab(
                    value="tab-1",
                    children=[
                        v.Icon(icon="mdi-phone"),
                        "Recents",
                    ],
                ),
                v.Tab(
                    value="tab-2",
                    children=[
                        v.Icon(icon="mdi-heart"),
                        "Favorites",
                    ],
                ),
                v.Tab(
                    value="tab-3",
                    children=[
                        v.Icon(icon="mdi-account-box"),
                        "Nearby",
                    ],
                ),
            ],
        ),
        v.TabsWindow(
            v_model="tab",
            children=[
                v.TabsWindowItem(
                    # JS expression, needs manual conversion
                    key="i",
                    # JS expression, needs manual conversion
                    value="'tab-' + i'",
                    children=[
                        v.Card(
                            children=[
                                v.CardText(children=["{{ text }}"]),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
