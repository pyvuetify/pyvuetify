import ipyvuetify as v

items = [
    (50, 5, "primary"),
    (100, 10, "red"),
    (70, 7, "purple"),
    (120, 12, "green"),
    (80, 8, "amber"),
]

v.Layout(
    class_="d-flex flex-row justify-space-evenly my-2",
    children=[
        v.Html(
            tag="div",
            class_="d-flex flex-grow-1 justify-center",
            children=[
                v.ProgressCircular(
                    size=size,
                    width=width,
                    color=color,
                    value=70,
                )
            ],
        )
        for size, width, color in items
    ],
)
