from ipywidgets import jslink

import ipyvuetify as v

switch = v.Switch(
    class_="ml-3",
    v_model=False,
    label="X offset",
)

menu = v.Menu(
    top=True,
    offset_x=switch.v_model,
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

jslink((switch, "v_model"), (menu, "offset_x"))

v.Layout(class_="d-flex flex-row", children=[switch, menu])
