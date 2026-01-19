import ipyvuetify as v

v.Card(
    class_="overflow-hidden",
    children=[
        v.AppBar(
            absolute=True,
            color="deep-purple accent-4",
            dark=True,
            collapse_on_scroll=True,
            children=[
                v.AppBarNavIcon(),
                v.ToolbarTitle(children=["Collapsing Bar"]),
                v.Spacer(),
            ],
        ),
        v.Sheet(
            class_="overflow-y-auto",
            max_height=400,
            children=[v.Container(style_="height: 1000px;")],
        ),
    ],
)
