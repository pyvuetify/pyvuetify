from ipywidgets import jslink

import ipyvuetify as v

date_picker = v.DatePicker(v_model=None)

text_field = v.TextField(
    v_model="",
    label="Picker in dialog",
    prepend_icon="mdi-calendar",
    readonly=True,
    v_bind="activator.attrs",
    v_on="activator.on",
)

jslink((date_picker, "v_model"), (text_field, "v_model"))

v.Container(
    class_="my-2",
    children=[
        v.Menu(
            v_model=False,
            close_on_content_click=False,
            nudge_right=40,
            transition="scale-transition",
            offset_y=True,
            min_width="auto",
            children=[date_picker],
            v_slots=[
                {
                    "name": "activator",
                    "variable": "activator",
                    "children": text_field,
                }
            ],
        )
    ],
)
