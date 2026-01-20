import ipyvuetify as v

colors = [
    ("pink lighten-1", "pink lighten-3"),
    ("lime", "blue-grey"),
    ("error", "success"),
]

v.Col(
    children=[
        v.ProgressLinear(
            class_="my-3 mx-1",
            background_color=bg,
            color=c,
            v_model=(i + 1) * 15,
        )
        for i, (c, bg) in enumerate(colors)
    ]
)
