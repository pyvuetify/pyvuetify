from ipywidgets import jslink

import ipyvuetify as v

color_picker1 = v.ColorPicker(
    mode="hexa",
    v_model="#FF5733",
    class_="ma-2",
)

color_picker2 = v.ColorPicker(
    v_model={"r": 255, "g": 87, "b": 51, "a": 1},
    class_="ma-2",
)

jslink((color_picker1, "v_model"), (color_picker2, "v_model"))

v.Container(
    children=[
        v.Row(
            justify="space-around",
            children=[color_picker1, color_picker2],
        ),
    ],
    class_="my-2",
)
