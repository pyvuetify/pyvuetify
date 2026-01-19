from ipywidgets import jslink

import ipyvuetify as v

tabs = v.Tabs(
    right=True,
    color="deep-purple accent-4",
    v_model=1,
    children=[
        v.Tab(children=["Landscape"]),
        v.Tab(children=["City"]),
        v.Tab(children=["Abstract"]),
    ],
)

tab_items = v.TabsItems(
    v_model=1,
    children=[
        v.TabItem(
            key=n,
            children=[
                v.Container(
                    fluid=True,
                    children=[
                        v.Row(
                            children=[
                                v.Col(
                                    key=i,
                                    cols=4,
                                    children=[
                                        v.Img(
                                            src=f"https://picsum.photos/500/300?image={i * n * 5 + 10}",
                                            lazy_src=f"https://picsum.photos/10/6?image={i * n * 5 + 10}",
                                            aspect_ratio=1,
                                        )
                                    ],
                                )
                                for i in range(1, 7)
                            ]
                        )
                    ],
                )
            ],
        )
        for n in range(1, 4)
    ],
)

jslink((tabs, "v_model"), (tab_items, "v_model"))

v.Card(class_="mx-auto my-2", width=700, children=[tabs, tab_items])
