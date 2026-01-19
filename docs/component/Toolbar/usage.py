import ipyvuetify as v

v.Toolbar(
    color="success",
    children=[
        v.ToolbarTitle(children=["My Application"]),
        v.Spacer(),
        v.ToolbarItems(
            children=[
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
            ]
        ),
    ],
)
