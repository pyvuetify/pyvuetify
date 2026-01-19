from ipywidgets import jslink

import ipyvuetify as v

switch = v.Switch(label="Open Snackbar", v_model=False)
switch_close = v.Switch(v_model=False)
snackbar = v.Snackbar(
    v_model=False,
    timeout=2000,
    children=["This snackbar will disappear after 2 seconds", switch_close],
)

jslink((switch, "v_model"), (snackbar, "v_model"))
jslink((switch_close, "v_model"), (snackbar, "v_model"))

v.Container(class_="text-center ma-2", children=[switch, snackbar])
