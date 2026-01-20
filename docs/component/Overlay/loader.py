from ipywidgets import jslink

import ipyvuetify as v

switch = v.Switch(label="Show Overlay", v_model=False, class_="mx-auto my-2")
switch2 = v.Switch(label="Show Overlay", v_model=False, class_="mx-auto my-2")
progress = v.ProgressCircular(indeterminate=True, size=64)
overlay = v.Overlay(v_model=False, children=[switch2, progress])
jslink((switch, "v_model"), (overlay, "v_model"))
jslink((switch2, "v_model"), (overlay, "v_model"))

v.Layout(children=[switch, overlay])
