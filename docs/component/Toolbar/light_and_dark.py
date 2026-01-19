import ipyvuetify as v

v.Card(
    flat=True,
    children=[
        v.Container(
            fluid=True,
            class_="child-flex",
            children=[
                v.Toolbar(
                    children=[
                        v.Btn(
                            icon=True,
                            class_="hidden-xs-only",
                            children=[v.Icon(children=["mdi-arrow-left"])],
                        ),
                        v.ToolbarTitle(children=["Title"]),
                        v.Spacer(),
                        v.Btn(
                            icon=True,
                            class_="hidden-xs-only",
                            children=[v.Icon(children=["mdi-magnify"])],
                        ),
                    ],
                ),
                v.Toolbar(
                    dark=True,
                    children=[
                        v.Spacer(),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-reply"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                    ],
                ),
            ],
        ),
    ],
)
