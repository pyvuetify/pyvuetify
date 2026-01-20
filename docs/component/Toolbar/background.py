import ipyvuetify as v

v.Toolbar(
    dark=True,
    prominent=True,
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
    children=[
        v.AppBarNavIcon(),
        v.ToolbarTitle(children=["Vuetify"]),
        v.Spacer(),
        v.Btn(icon=True, children=[v.Icon(children=["mdi-export"])]),
    ],
)
