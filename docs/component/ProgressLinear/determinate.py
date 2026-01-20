import ipyvuetify as v

items = [
    ("deep-purple accent-4", 70),
    ("pink", 50),
    ("indigo darken-2", 30),
    ("amber", 90),
]

v.Col(
    children=[
        v.ProgressLinear(
            class_="my-3 mx-1",
            v_model=value,
            color=color,
        )
        for color, value in items
    ]
)
