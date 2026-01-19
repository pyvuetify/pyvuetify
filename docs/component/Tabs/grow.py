from ipywidgets import jslink

import ipyvuetify as v

items = ["Appetizers", "Entrees", "Deserts", "Cocktails"]
text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

tabs = v.Tabs(
    v_model=0,
    grow=True,
    background_color="transparent",
    color="#356859",
    children=[v.Tab(children=[item]) for item in items],
)

tab_items = v.TabsItems(
    v_model=0,
    children=[
        v.TabItem(
            key=n,
            children=[v.Card(color="#FFFBE6", flat=True, children=[v.CardText(children=[text])])],
        )
        for n in range(len(items))
    ],
)

jslink((tabs, "v_model"), (tab_items, "v_model"))

v.Card(
    color="#FFFBE6",
    children=[
        v.CardTitle(
            class_="text-center justify-center py-6",
            children=[
                v.Html(
                    tag="h1",
                    class_="font-weight-bold text-h2",
                    children=["BASiL"],
                    style_="color: #356859;",
                )
            ],
        ),
        tabs,
        tab_items,
    ],
)
