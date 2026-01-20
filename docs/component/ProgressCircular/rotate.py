import ipyvuetify as v

items = [
    (360, "teal"),
    (-90, "primary"),
    (90, "red"),
    (180, "pink"),
]

v.Layout(
    class_="d-flex flex-row justify-space-evenly my-2",
    children=[
        v.Html(
            tag="div",
            class_="d-flex flex-grow-1 justify-center",
            children=[
                v.ProgressCircular(
                    rotate=angle,
                    size=100,
                    width=15,
                    value=60,
                    color=color,
                    children=["60"],
                )
            ],
        )
        for angle, color in items
    ],
)
