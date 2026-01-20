import ipyvuetify as v

colors = [
    ["#FF0000", "#AA0000", "#550000"],
    ["#FFFF00", "#AAAA00", "#555500"],
    ["#00FF00", "#00AA00", "#005500"],
    ["#00FFFF", "#00AAAA", "#005555"],
]

v.Container(
    children=[
        v.Row(
            justify="space-around",
            children=[
                v.ColorPicker(
                    class_="ma-2",
                    show_swatches=True,
                ),
                v.ColorPicker(
                    class_="ma-2",
                    swatches=colors,
                    show_swatches=True,
                ),
                v.ColorPicker(
                    class_="ma-2",
                    show_swatches=True,
                    swatches_max_height=300,
                ),
            ],
        ),
    ],
    class_="my-2",
)
