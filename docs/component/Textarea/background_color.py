import ipyvuetify as v

colors = [
    ("light-blue", "black"),
    ("grey lighten-2", "cyan"),
    ("amber lighten-4", "orange orange-darken-4"),
]

v.Container(
    children=[
        v.Textarea(
            background_color=bg,
            color=fg,
            label="Label",
        )
        for bg, fg in colors
    ],
)
