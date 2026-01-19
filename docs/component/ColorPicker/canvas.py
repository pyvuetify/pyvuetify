import ipyvuetify as v

color_picker1 = v.ColorPicker(
    hide_canvas=True,
    class_="mx-auto my-2",
)
color_picker2 = v.ColorPicker(
    canvas_height=300,
    class_="mx-auto my-2",
)
color_picker3 = v.ColorPicker(
    dot_size=30,
    class_="mx-auto my-2",
)

v.Container(
    children=[
        v.Row(
            justify="space-around",
            children=[
                color_picker1,
                color_picker2,
                color_picker3,
            ],
        ),
    ],
    class_="my-2",
)
