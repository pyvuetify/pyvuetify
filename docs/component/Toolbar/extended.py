import ipyvuetify as v

v.Card(
    color="grey lighten-4",
    flat=True,
    height="200px",
    tile=True,
    children=[
        v.Toolbar(
            extended=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Title"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
            ],
        ),
    ],
)
