from ipywidgets import jslink

import ipyvuetify as v

chip1 = v.Chip(class_="ma-2", input_value=True, filter=True, children=["I'm v-chip"])
chip2 = v.Chip(
    class_="ma-2", input_value=True, filter=True, filter_icon="mdi-plus", children=["I'm v-chip"]
)
chip3 = v.Chip(
    class_="ma-2", input_value=True, filter=True, filter_icon="mdi-minus", children=["I'm v-chip"]
)

switch = v.Switch(v_model=True, label="Active")

jslink((switch, "v_model"), (chip1, "input_value"))
jslink((switch, "v_model"), (chip2, "input_value"))
jslink((switch, "v_model"), (chip3, "input_value"))

v.Container(children=[chip1, chip2, chip3, switch])
