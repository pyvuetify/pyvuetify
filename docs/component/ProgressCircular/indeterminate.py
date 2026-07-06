import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.ProgressCircular(
            color="primary",
            indeterminate=True,
        ),
        v.ProgressCircular(
            color="red",
            indeterminate=True,
        ),
        v.ProgressCircular(
            color="purple",
            indeterminate=True,
        ),
        v.ProgressCircular(
            color="green",
            indeterminate=True,
        ),
        v.ProgressCircular(
            color="amber",
            indeterminate=True,
        ),
    ],
)
