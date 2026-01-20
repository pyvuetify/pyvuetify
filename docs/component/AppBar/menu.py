import ipyvuetify as v

menu = v.Menu(
    bottom=True,
    left=True,
    v_slots=[
        {
            "name": "activator",
            "variable": "menuProps",
            "children": v.Btn(
                icon=True,
                color="yellow",
                v_on="menuProps.on",
                children=[v.Icon(children=["mdi-dots-vertical"])],
            ),
        }
    ],
    children=[
        v.List(
            children=[
                v.ListItem(children=[v.ListItemTitle(children=["Click Me 1"])]),
                v.ListItem(children=[v.ListItemTitle(children=["Click Me 2"])]),
                v.ListItem(children=[v.ListItemTitle(children=["Click Me 3"])]),
            ]
        )
    ],
)

v.Card(
    class_="overflow-hidden",
    children=[
        v.AppBar(
            absolute=True,
            color="#6A76AB",
            dark=True,
            shrink_on_scroll=True,
            prominent=True,
            src="https://picsum.photos/1920/1080?random",
            fade_img_on_scroll=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Title"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-heart"])]),
                menu,
            ],
        ),
        v.Sheet(
            class_="overflow-y-auto",
            max_height=400,
            children=[v.Container(style_="height: 1000px;")],
        ),
    ],
)
