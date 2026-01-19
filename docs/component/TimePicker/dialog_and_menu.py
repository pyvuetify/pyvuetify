from ipywidgets import jslink

import ipyvuetify as v

input_menu = v.TextField(
    v_model="12:00",
    label="Picker in menu",
    prepend_icon="mdi-clock-time-four-outline",
    readonly=True,
    v_bind="props.attrs",
    v_on="props.on",
)

tp_menu = v.TimePicker(
    v_model="12:00",
    full_width=True,
)

jslink((input_menu, "v_model"), (tp_menu, "v_model"))

menu = v.Menu(
    v_model=False,
    close_on_content_click=False,
    nudge_right=40,
    transition="scale-transition",
    offset_y=True,
    max_width="290px",
    min_width="290px",
    v_slots=[
        {
            "name": "activator",
            "variable": "props",
            "children": [input_menu],
        }
    ],
    children=[tp_menu],
)

input_dialog = v.TextField(
    v_model="12:00",
    label="Picker in dialog",
    prepend_icon="mdi-clock-time-four-outline",
    readonly=True,
    v_bind="props.attrs",
    v_on="props.on",
)

tp_dialog = v.TimePicker(
    close_on_content_click=False,
    v_model="12:00",
    full_width=True,
)

jslink((input_dialog, "v_model"), (tp_dialog, "v_model"))

dialog = v.Dialog(
    v_model=False,
    persistent=False,
    width="290px",
    v_slots=[
        {
            "name": "activator",
            "variable": "props",
            "children": [input_dialog],
        }
    ],
    children=[tp_dialog],
)

v.Container(
    class_="d-flex flex-row justify-space-around",
    children=[menu, dialog],
)
