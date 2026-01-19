import ipyvuetify as v

items = [
    ("light-blue", 10),
    ("light-green darken-4", 20),
    ("lime", 45),
    ("deep-orange", 60),
]

v.Col(
    children=[
        v.ProgressLinear(
            class_="my-3 mx-1",
            color=color,
            v_model=value,
            height=10,
            striped=True,
        )
        for color, value in items
    ]
)
