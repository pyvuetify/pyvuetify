import ipyvuetify as v

v.Menu(
    offset_y=True,
    v_slots=[
        {
            "name": "activator",
            "variable": "props",
            "children": v.Btn(
                class_="mx-auto my-2",
                children=["Dropdown"],
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
                v.ListItem(children=[v.ListItemTitle(children=[f"Item {i}"])]) for i in range(4)
            ]
        )
    ],
)
