import ipyvuetify as v

items = [
    ("red lighten-2", 0, 0),
    ("teal", 20, 0),
    ("cyan", 50, 0),
    ("orange", 40, 60),
]

v.Col(
    children=[
        v.ProgressLinear(
            class_="my-3 mx-1",
            buffer_value=buffer,
            v_model=value,
            stream=True,
            color=color,
        )
        for color, value, buffer in items
    ]
)
