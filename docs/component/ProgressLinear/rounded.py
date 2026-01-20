import ipyvuetify as v

colors = ["red darken-2", "indigo", "teal", "cyan darken-2"]

v.Col(
    children=[
        v.ProgressLinear(
            class_="my-3 mx-1",
            rounded=True,
            value=100,
            color=c,
        )
        for c in colors
    ]
)
