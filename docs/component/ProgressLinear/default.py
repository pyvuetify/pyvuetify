import ipyvuetify as v

items = [
    ("amber", 80),
    ("blue-grey", 20),
    ("primary", 33),
]

v.Col(
    children=[
        v.ProgressLinear(
            class_="my-3 mx-1",
            v_model=value,
            color=color,
            height=25,
            children=[v.Html(tag="strong", children=[f"{int(value)}%"])],
        )
        for color, value in items
    ]
)
