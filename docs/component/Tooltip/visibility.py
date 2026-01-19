from ipywidgets import jslink

import ipyvuetify as v

switch = v.Switch(label="Show tooltip", v_model=False)

tooltip = v.Tooltip(
    v_model=switch.v_model,
    top=True,
    v_slots=[
        {
            "name": "activator",
            "variable": "props",
            "children": v.Btn(
                icon=True,
                large=True,
                v_bind="props.attrs",
                v_on="props.on",
                children=[
                    v.Icon(color="grey lighten-1", children=["mdi-cart"]),
                ],
            ),
        }
    ],
    children=[
        "Programmatic tooltip",
    ],
)

jslink((switch, "v_model"), (tooltip, "v_model"))

v.Container(
    class_="d-flex flex-row justify-space-around align-center",
    children=[switch, tooltip],
)
