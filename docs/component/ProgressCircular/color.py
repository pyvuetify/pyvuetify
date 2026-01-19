import ipyvuetify as v

items = [
    (100, "blue-grey"),
    (80, "deep-orange lighten-2"),
    (60, "brown"),
    (40, "lime"),
    (20, "indigo darken-2"),
]

v.Layout(
    class_="d-flex flex-row justify-space-evenly my-2",
    children=[
        v.Html(
            tag="div",
            class_="d-flex flex-grow-1 justify-center",
            children=[
                v.ProgressCircular(
                    value=value,
                    color=color,
                )
            ],
        )
        for value, color in items
    ],
)
