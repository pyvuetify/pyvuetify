from ipywidgets import jslink

import ipyvuetify as v

switch = v.Switch(
    v_model=True,
    label="Close on content click",
)

menu = v.Menu(
    top=True,
    close_on_content_click=switch.v_model,
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

jslink((switch, "v_model"), (menu, "close_on_content_click"))

v.Layout(class_="d-flex flex-row", children=[switch, menu])
