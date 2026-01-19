from ipywidgets import jslink

import ipyvuetify as v

text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

tabs = v.Tabs(
    # background_color="indigo",
    fixed_tabs=True,
    flat=True,
    v_model=0,
    children=[
        v.Tab(children=[v.Icon(children=["mdi-phone"])]),
        v.Tab(children=[v.Icon(children=["mdi-heart"])]),
        v.Tab(children=[v.Icon(children=["mdi-account-box"])]),
    ],
)

tab_items = v.TabsItems(
    v_model=0,
    children=[
        v.TabItem(key=n, children=[v.Card(flat=True, children=[v.CardText(children=[text])])])
        for n in range(3)
    ],
)

jslink((tabs, "v_model"), (tab_items, "v_model"))

v.Card(
    class_="mx-auto my-2",
    max_width=700,
    children=[
        v.Toolbar(
            flat=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Contact Database"]),
                v.Spacer(),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-magnify"])]),
                v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
            ],
            v_slots=[{"name": "extension", "children": [tabs]}],
        ),
        tab_items,
    ],
)
