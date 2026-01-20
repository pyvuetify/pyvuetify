import ipyvuetify as v

v.Layout(
    class_="d-flex flex-row justify-space-evenly my-2",
    children=[
        v.Html(
            tag="div",
            class_="d-flex flex-grow-1 justify-center",
            children=[v.ProgressCircular(value=i)],
        )
        for i in range(0, 101, 20)
    ],
)
