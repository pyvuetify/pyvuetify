import ipyvuetify as v

colors = ["primary", "purple", "red lighten-2", "black"]

items = [
    {"value": 40, "buffer": 70, "color": "primary"},
    {"value": 20, "buffer": 70, "color": "purple"},
    {"value": 40, "buffer": 70, "color": "red lighten-2"},
    {"value": 40, "buffer": 70, "color": "black"},
]

v.Col(
    children=[
        v.ProgressLinear(
            class_="my-3 mx-1",
            v_model=(i + 1) * 5,
            buffer_value=(i + 1) * 10,
            color=c,
        )
        for i, c in enumerate(colors)
    ]
)
