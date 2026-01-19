from ipywidgets import jslink

import ipyvuetify as v

gradient = ["#f72047", "#ffd200", "#1feaea"]
values = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]

slider = v.Slider(
    label="Padding",
    min=0,
    max=20,
    step=0.1,
    v_model=8,
)

sparkline = v.Sparkline(
    class_="mx-auto my-2",
    line_width=2,
    smooth=10,
    padding=8,
    line_cap="round",
    gradient=gradient,
    value=values,
    gradient_direction="top",
    fill=False,
    type="trend",
    auto_line_width=False,
    auto_draw=True,
)

jslink((slider, "v_model"), (sparkline, "padding"))

v.Col(children=[slider, sparkline])
