import ipyvuetify as v

items = [
    ("small", "purple"),
    ("default", "pink"),
    ("large", "green"),
    ("x-large", "red"),
    ("64px", "indigo"),
]

v.Col(
    class_="text-center",
    children=[
        v.Rating(
            v_model=3,
            background_color=f"{color} lighten-3",
            color=color,
            **({"size": size} if size.endswith("px") else {size.replace("-", "_"): True}),
        )
        for size, color in items
    ],
)
