from ipywidgets import jslink

import ipyvuetify as v

text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

tabs = v.Tabs(
    icons_and_text=True,
    background_color="deep-purple accent-4",
    dark=True,
    centered=True,
    v_model=0,
    children=[
        v.Tab(children=[v.Icon(children=["mdi-phone"]), "Recents"]),
        v.Tab(children=[v.Icon(children=["mdi-heart"]), "Favorites"]),
        v.Tab(children=[v.Icon(children=["mdi-account-box"]), "Nearby"]),
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

v.Card(children=[tabs, tab_items])
