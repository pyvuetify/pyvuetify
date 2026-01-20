from ipywidgets import jslink

import ipyvuetify as v

switch = v.Switch(label="Show Overlay", v_model=False, class_="mx-auto my-auto")
switch2 = v.Switch(label="Show Overlay", v_model=False, class_="mx-auto my-2")
overlay = v.Overlay(absolute=True, v_model=False, opacity=1, children=[switch2])
jslink((switch, "v_model"), (overlay, "v_model"))
jslink((switch2, "v_model"), (overlay, "v_model"))

v.Card(class_="mx-auto my-2", height=300, width=300, children=[switch, overlay])
