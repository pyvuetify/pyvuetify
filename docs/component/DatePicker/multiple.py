from ipywidgets import jslink

import ipyvuetify as v

date_picker = v.DatePicker(
    v_model=["2019-10-13", "2019-10-16"],
    multiple=True,
)

select = v.Combobox(
    v_model=["2019-10-13", "2019-10-16"],
    label="Select dates",
    multiple=True,
    chips=True,
    small_chips=True,
    prepend_inner_icon="mdi-calendar",
    readonly=True,
)

jslink((date_picker, "v_model"), (select, "v_model"))

v.Container(
    class_="my-2",
    children=[date_picker, select],
)
