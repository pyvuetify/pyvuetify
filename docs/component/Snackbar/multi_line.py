from ipywidgets import jslink

import ipyvuetify as v

switch = v.Switch(label="Open Snackbar", v_model=False)
switch_close = v.Switch(v_model=False)
snackbar = v.Snackbar(
    v_model=False,
    multi_line=True,
    children=[
        "This is a multi-line snackbar. You can add more text "
        "here to demonstrate the increased height.",
        switch_close,
    ],
)

jslink((switch, "v_model"), (snackbar, "v_model"))
jslink((switch_close, "v_model"), (snackbar, "v_model"))

v.Container(class_="text-center ma-2", children=[switch, snackbar])
