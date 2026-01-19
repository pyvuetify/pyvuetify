from ipywidgets import jslink

import ipyvuetify as v

gradient = ["#f72047", "#ffd200", "#1feaea"]
values = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]

switch = v.Switch(label="Fill", v_model=True)

sparkline = v.Sparkline(
    class_="mx-auto my-2",
    line_width=2,
    smooth=10,
    padding=8,
    line_cap="round",
    gradient=gradient,
    value=values,
    gradient_direction="top",
    fill=True,
    type="trend",
    auto_line_width=False,
    auto_draw=True,
)

jslink((switch, "v_model"), (sparkline, "fill"))

v.Col(children=[switch, sparkline])
