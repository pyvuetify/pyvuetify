from ipywidgets import jslink

import ipyvuetify as v

color_picker1 = v.ColorPicker(
    class_="ma-2",
    hide_inputs=True,
)
color_picker2 = v.ColorPicker(
    class_="ma-2",
    hide_mode_switch=True,
)
color_picker3 = v.ColorPicker(
    class_="ma-2",
    mode="hsla",
)
color_picker4 = v.ColorPicker(
    class_="ma-2",
    mode="hexa",
)

jslink((color_picker1, "v_model"), (color_picker2, "v_model"))
jslink((color_picker1, "v_model"), (color_picker3, "v_model"))
jslink((color_picker1, "v_model"), (color_picker4, "v_model"))

v.Container(
    children=[
        v.Row(
            justify="space-around",
            children=[
                color_picker1,
                color_picker2,
                color_picker3,
                color_picker4,
            ],
        ),
    ],
    class_="my-2",
)
