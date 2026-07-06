import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.ProgressLinear(
            color="yellow-darken-2",
            indeterminate=True,
        ),
        v.ProgressLinear(
            color="green",
            indeterminate=True,
        ),
        v.ProgressLinear(
            color="teal",
            indeterminate=True,
        ),
        v.ProgressLinear(
            color="cyan",
            indeterminate=True,
        ),
    ],
)
