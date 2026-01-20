import ipyvuetify as v

transitions = [
    "scale-transition",
    "slide-x-transition",
    "slide-y-transition",
]

v.Layout(
    class_="d-flex flex-row justify-space-around",
    children=[
        v.Menu(
            bottom=True,
            origin="center center",
            transition=transition,
            v_slots=[
                {
                    "name": "activator",
                    "variable": "props",
                    "children": v.Btn(
                        class_="mx-2",
                        children=[transition.replace("-", " ").title()],
                        color="primary",
                        dark=True,
                        v_bind="props.attrs",
                        v_on="props.on",
                    ),
                }
            ],
            children=[
                v.List(
                    children=[
                        v.ListItem(children=[v.ListItemTitle(children=[f"Item {i}"])])
                        for i in range(4)
                    ]
                )
            ],
        )
        for transition in transitions
    ],
)
