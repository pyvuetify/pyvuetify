from ipywidgets import jslink

import ipyvuetify as v

card = v.Card(
    class_="mx-auto my-2",
    width=344,
    children=[
        v.SystemBar(
            children=[
                v.Spacer(),
                v.Icon(children=["mdi-square"]),
                v.Icon(children=["mdi-circle"]),
                v.Icon(children=["mdi-triangle"]),
            ]
        ),
        v.Toolbar(
            children=[
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-arrow-left"])],
                ),
                v.ToolbarTitle(children=["My Recipes"]),
                (
                    progress := v.ProgressLinear(
                        active=False,
                        indeterminate=True,
                        absolute=True,
                        bottom=True,
                        color="deep-purple accent-4",
                    )
                ),
                v.Spacer(),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-magnify"])],
                ),
                v.Btn(
                    icon=True,
                    children=[v.Icon(children=["mdi-dots-vertical"])],
                ),
            ]
        ),
        v.Container(
            style_="height: 282px;",
            children=[
                v.Row(
                    class_="fill-height",
                    align="center",
                    justify="center",
                    children=[
                        v.ScaleTransition(
                            children=[
                                v.Html(
                                    tag="div",
                                    class_="text-center",
                                    children=[
                                        (switch := v.Switch(v_model=False, label="Start Loading")),
                                    ],
                                )
                            ]
                        )
                    ],
                )
            ],
        ),
    ],
)

jslink((switch, "v_model"), (progress, "active"))

card
