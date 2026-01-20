import ipyvuetify as v

v.Col(
    class_="mx-1 mt-2",
    children=[
        v.Slider(
            class_="mt-4",
            step=10,
            thumb_label="always",
        ),
    ],
)
