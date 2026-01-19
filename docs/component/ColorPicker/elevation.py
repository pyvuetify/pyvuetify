import ipyvuetify as v

color_picker1 = v.ColorPicker(
    class_="mx-auto my-2",
    flat=True,
)
color_picker2 = v.ColorPicker(
    class_="mx-auto my-2",
    elevation=15,
)

v.Container(
    children=[
        v.Row(
            justify="space-around",
            children=[
                color_picker1,
                color_picker2,
            ],
        ),
    ],
    class_="my-2",
)
