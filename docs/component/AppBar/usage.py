import ipyvuetify as v

v.Container(
    children=[
        v.AppBar(
            color="primary",
            dark=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["My Application"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
            ],
        )
    ]
)
