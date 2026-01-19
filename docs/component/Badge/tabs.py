import ipyvuetify as v

v.Toolbar(
    children=[
        v.Tabs(
            dark=True,
            background_color="primary",
            grow=True,
            children=[
                v.Tab(children=[v.Badge(color="pink", dot=True, children=["Item One"])]),
                v.Tab(children=[v.Badge(color="green", content="6", children=["Item Two"])]),
                v.Tab(
                    children=[
                        v.Badge(
                            color="deep-purple accent-4",
                            icon="mdi-language-python",
                            children=["Item Three"],
                        )
                    ]
                ),
            ],
        )
    ]
)
