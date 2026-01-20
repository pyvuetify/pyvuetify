from ipywidgets import jslink

import ipyvuetify as v

progress = v.ProgressCircular(indeterminate=False, size=24, class_="ml-2")

switch = v.Switch(
    v_model=False,
    v_slots=[
        {
            "name": "label",
            "children": v.Html(tag="span", children=["Turn on the progress: ", progress]),
        }
    ],
)

jslink((switch, "v_model"), (progress, "indeterminate"))

v.Container(class_="mx-auto my-2", fluid=True, children=[switch])
