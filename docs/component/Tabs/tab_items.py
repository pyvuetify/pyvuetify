from ipywidgets import jslink

import ipyvuetify as v

items = [
    {"tab": "One", "content": "Tab 1 Content"},
    {"tab": "Two", "content": "Tab 2 Content"},
    {"tab": "Three", "content": "Tab 3 Content"},
    {"tab": "Four", "content": "Tab 4 Content"},
    {"tab": "Five", "content": "Tab 5 Content"},
    {"tab": "Six", "content": "Tab 6 Content"},
    {"tab": "Seven", "content": "Tab 7 Content"},
    {"tab": "Eight", "content": "Tab 8 Content"},
    {"tab": "Nine", "content": "Tab 9 Content"},
    {"tab": "Ten", "content": "Tab 10 Content"},
]

tabs = v.Tabs(
    v_model=0,
    background_color="primary",
    dark=True,
    children=[v.Tab(key=i, children=[item["tab"]]) for i, item in enumerate(items)],
)

tab_items = v.TabsItems(
    v_model=0,
    children=[
        v.TabItem(
            key=idx, children=[v.Card(flat=True, children=[v.CardText(children=[item["content"]])])]
        )
        for idx, item in enumerate(items)
    ],
)

jslink((tabs, "v_model"), (tab_items, "v_model"))

v.Card(class_="my-2 mx-auto", children=[tabs, tab_items])
