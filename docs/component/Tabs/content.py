import ipyvuetify as v

text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

tabs = v.Tabs(
    v_model=2,
    centered=True,
    slider_color="yellow",
    children=[v.Tab(children=[f"Item {i}"]) for i in range(1, 4)],
)

tab_items = v.TabsItems(
    v_model=2,
    children=[
        v.TabItem(key=n, children=[v.Card(flat=True, children=[v.CardText(children=[text])])])
        for n in range(3)
    ],
)

v.Card(
    children=[
        v.Toolbar(
            color="cyan",
            dark=True,
            flat=True,
            tabs=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Page title"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
            ],
            v_slots=[{"name": "extension", "children": [tabs]}],
        ),
        tab_items,
    ]
)
