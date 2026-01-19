from ipywidgets import jslink

import ipyvuetify as v

message = v.Select(
    v_model=[],
    items=["message"],
    label="Message",
    multiple=True,
    clearable=True,
)
input_field = v.Input(hint="I am hint", persistent_hint=True, messages=[], children=["Input"])

jslink((message, "v_model"), (input_field, "messages"))

v.Container(children=[message, input_field])
