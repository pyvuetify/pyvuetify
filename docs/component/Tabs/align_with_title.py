from ipywidgets import jslink

import ipyvuetify as v

items = ["web", "shopping", "videos", "images", "news"]
text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

tabs = v.Tabs(align_with_title=True, v_model=0, children=[v.Tab(children=[item]) for item in items])

tab_items = v.TabsItems(
    v_model=0,
    children=[
        v.TabItem(key=n, children=[v.Card(flat=True, children=[v.CardText(children=[text])])])
        for n in range(len(items))
    ],
)

jslink((tabs, "v_model"), (tab_items, "v_model"))

v.Card(
    children=[
        v.Toolbar(
            color="cyan",
            dark=True,
            flat=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Your Dashboard"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
            ],
            v_slots=[{"name": "extension", "children": tabs}],
        ),
        tab_items,
    ]
)
