from ipywidgets import jslink

import ipyvuetify as v

tabs = v.Tabs(
    vertical=True,
    v_model=0,
    children=[
        v.Tab(children=[v.Icon(left=True, children=["mdi-account"]), "Option 1"]),
        v.Tab(children=[v.Icon(left=True, children=["mdi-lock"]), "Option 2"]),
        v.Tab(children=[v.Icon(left=True, children=["mdi-access-point"]), "Option 3"]),
    ],
)

tab_items = v.TabsItems(
    v_model=0,
    children=[
        v.TabItem(
            key=0,
            children=[
                v.Card(
                    flat=True,
                    children=[
                        v.CardText(
                            children=[
                                "Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.",
                                v.Html(tag="br"),
                                "Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.",
                                v.Html(tag="br"),
                                "Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.",
                            ]
                        )
                    ],
                )
            ],
        ),
        v.TabItem(
            key=1,
            children=[
                v.Card(
                    flat=True,
                    children=[
                        v.CardText(
                            children=[
                                "Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.",
                                v.Html(tag="br"),
                                "Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.",
                                v.Html(tag="br"),
                                "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.",
                            ]
                        )
                    ],
                )
            ],
        ),
        v.TabItem(
            key=2,
            children=[
                v.Card(
                    flat=True,
                    children=[
                        v.CardText(
                            children=[
                                "Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.",
                                v.Html(tag="br"),
                                "Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.",
                            ]
                        )
                    ],
                )
            ],
        ),
    ],
)

jslink((tabs, "v_model"), (tab_items, "v_model"))

v.Card(
    children=[
        v.Toolbar(
            flat=True,
            color="primary",
            dark=True,
            children=[v.ToolbarTitle(children=["User Profile"])],
        ),
        v.Row(
            no_gutters=True,
            children=[v.Col(cols=3, children=[tabs]), v.Col(cols=9, children=[tab_items])],
        ),
    ]
)
