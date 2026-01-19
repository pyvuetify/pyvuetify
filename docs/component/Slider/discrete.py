import ipyvuetify as v

v.Col(
    class_="mx-1 my-2",
    children=[
        v.Slider(
            class_="mt-4 mx-2",
            step=10,
            thumb_label="on",
        ),
    ],
)
