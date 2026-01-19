from ipywidgets import jslink

import ipyvuetify as v

colors = ["red", "blue", "green", "yellow", "purple", "orange"]

select = v.Select(
    items=colors,
    label="Select an option",
    v_model="red",
)

toolbar = v.Toolbar(
    color="red",
    children=[
        v.ToolbarTitle(children=["Photos"]),
        v.Spacer(),
        v.Btn(icon=True, children=[v.Icon(children=["mdi-dots-vertical"])]),
    ],
)

jslink((select, "v_model"), (toolbar, "color"))

v.Card(
    width="500",
    class_="mx-auto my-2",
    children=[
        toolbar,
        v.CardText(children=[select]),
    ],
)
