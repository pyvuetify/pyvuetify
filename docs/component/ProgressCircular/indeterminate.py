import ipyvuetify as v

colors = ["primary", "red", "purple", "green", "amber"]

v.Layout(
    class_="d-flex flex-row justify-space-evenly my-2",
    children=[
        v.Html(
            tag="div",
            class_="d-flex flex-grow-1 justify-center",
            children=[
                v.ProgressCircular(
                    indeterminate=True,
                    color=color,
                )
            ],
        )
        for color in colors
    ],
)
