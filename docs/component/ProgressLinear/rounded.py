import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.ProgressLinear(
            color="red-darken-2",
            model_value="100",
            rounded=True,
        ),
        v.ProgressLinear(
            color="indigo",
            model_value="100",
            rounded=True,
        ),
        v.ProgressLinear(
            color="teal",
            model_value="100",
            rounded=True,
        ),
        v.ProgressLinear(
            color="cyan-darken-2",
            model_value="100",
            rounded=True,
        ),
    ],
)
