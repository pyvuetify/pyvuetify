import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.ProgressLinear(
            v_model="valueDeterminate",
            color="deep-purple-accent-4",
        ),
        v.ProgressLinear(
            v_model="valueDeterminate",
            color="pink",
        ),
        v.ProgressLinear(
            v_model="valueDeterminate",
            color="indigo-darken-2",
        ),
        v.ProgressLinear(
            v_model="valueDeterminate",
            color="amber",
        ),
    ],
)
