import ipyvuetify as v

v.AppBar(
    color="deep-purple accent-4",
    dense=True,
    dark=True,
    children=[
        v.AppBarNavIcon(),
        v.ToolbarTitle(children=["Page title"]),
        v.Spacer(),
        v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
        v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
    ],
)
