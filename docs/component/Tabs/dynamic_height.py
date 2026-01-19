from ipywidgets import jslink

import ipyvuetify as v

text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

tabs = v.Tabs(
    v_model=0, centered=True, children=[v.Tab(children=[f"Item {i}"]) for i in range(1, 4)]
)

tab_items = v.TabsItems(
    v_model=0,
    children=[
        v.TabItem(
            key=0, children=[v.Card(flat=True, children=[v.CardText(children=[text] * (i + 1))])]
        )
        for i in range(3)
    ],
)

jslink((tabs, "v_model"), (tab_items, "v_model"))

v.Card(
    class_="mx-auto my-2",
    max_width=700,
    children=[
        v.Toolbar(
            color="purple",
            dark=True,
            flat=True,
            tabs=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Dynamic Height Tabs"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
            ],
            v_slots=[{"name": "extension", "children": [tabs]}],
        ),
        tab_items,
    ],
)
