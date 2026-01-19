import ipyvuetify as v

colors = [
    "red",
    "red darken-3",
    "indigo",
    "indigo darken-3",
    "orange",
    "orange darken-3",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "error",
]

v.Container(
    class_="mx-auto my-2",
    fluid=True,
    children=[
        v.Row(
            children=[
                v.Col(
                    cols=12,
                    sm=4,
                    md=4,
                    children=[
                        v.Switch(
                            v_model=True,
                            label=color,
                            color=color,
                        )
                        for color in colors[n : n + 2]
                    ],
                )
                for n in range(0, len(colors), 2)
            ]
        )
    ],
)
