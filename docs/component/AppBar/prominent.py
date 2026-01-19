import ipyvuetify as v

v.Card(
    class_="overflow-hidden",
    children=[
        v.AppBar(
            absolute=True,
            color="indigo darken-2",
            dark=True,
            shrink_on_scroll=True,
            prominent=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Title"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
            ],
        ),
        v.Sheet(
            class_="overflow-y-auto",
            max_height=400,
            children=[v.Container(style_="height: 1000px;")],
        ),
    ],
)
