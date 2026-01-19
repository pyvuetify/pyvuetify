from ipywidgets import jslink

import ipyvuetify as v

time_picker = v.TimePicker(
    v_model="10:10",
    color="green lighten-1",
    header_color="primary",
)
time_picker2 = v.TimePicker(
    v_model="10:10",
    color="green lighten-1",
)

jslink((time_picker, "v_model"), (time_picker2, "v_model"))

v.Container(
    class_="d-flex flex-row justify-space-around",
    children=[time_picker, time_picker2],
)
