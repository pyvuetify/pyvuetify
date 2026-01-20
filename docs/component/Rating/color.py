import ipyvuetify as v

colors = ["purple", "pink", "orange", "green", "red", "indigo"]

v.Col(
    class_="text-center",
    children=[
        v.Rating(
            v_model=3,
            background_color=f"{color} lighten-3",
            color=color,
        )
        for color in colors
    ],
)
