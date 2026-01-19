import ipyvuetify as v

btns = [
    {"title": "Removed", "radius": "0", "color": "deep-purple accent-4"},
    {"title": "Large", "radius": "lg", "color": "error"},
    {"title": "Custom", "radius": "b-xl", "color": "teal darken-1"},
]

v.Layout(
    class_="d-flex flex-row justify-space-around",
    children=[
        v.Menu(
            rounded=btn["radius"],
            offset_y=True,
            v_slots=[
                {
                    "name": "activator",
                    "variable": "props",
                    "children": v.Btn(
                        class_="white--text ma-5",
                        children=[f'{btn["title"]} Radius'],
                        color=btn["color"],
                        v_bind="props.attrs",
                        v_on="props.on",
                    ),
                }
            ],
            children=[
                v.List(
                    children=[
                        v.ListItem(children=[v.ListItemTitle(children=[item])])
                        for item in ["Profile", "Settings", "Logout"]
                    ]
                )
            ],
        )
        for btn in btns
    ],
)
