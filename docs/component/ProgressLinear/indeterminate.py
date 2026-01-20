import ipyvuetify as v

colors = ["yellow darken-2", "green", "teal", "cyan"]

v.Col(
    children=[
        v.ProgressLinear(
            class_="my-3 mx-1",
            indeterminate=True,
            color=c,
        )
        for c in colors
    ]
)
