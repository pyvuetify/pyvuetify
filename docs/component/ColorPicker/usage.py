import ipyvuetify as v

v.Container(
    children=[
        v.ColorPicker(
            class_="mx-auto",
            dot_size=25,
            swatches_max_height=200,
        ),
    ],
    class_="my-2",
)
