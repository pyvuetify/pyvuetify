from ipywidgets import jslink

import ipyvuetify as v

start_picker = v.TimePicker(
    v_model="10:00",
    max="12:00",
)
end_picker = v.TimePicker(
    v_model="11:00",
    min="10:00",
)

jslink((start_picker, "v_model"), (end_picker, "min"))
jslink((end_picker, "v_model"), (start_picker, "max"))

v.Container(
    class_="d-flex flex-row justify-space-around",
    children=[start_picker, end_picker],
)
