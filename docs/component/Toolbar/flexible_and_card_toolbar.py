import ipyvuetify as v

v.Card(
    class_="my-4",
    flat=True,
    children=[
        v.Toolbar(
            color="primary",
            dark=True,
            extended=True,
            flat=True,
            children=[
                v.AppBarNavIcon(),
            ],
        ),
        v.Card(
            class_="mx-auto",
            width="700",
            style_="margin-top: -64px;",
            children=[
                v.Toolbar(
                    flat=True,
                    children=[
                        v.ToolbarTitle(children=["Title"], class_="grey--text"),
                        v.Spacer(),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-apps"])]),
                        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
                    ],
                ),
                v.Divider(),
                v.CardText(style_="height: 200px;"),
            ],
        ),
    ],
)
