import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.ProgressLinear(
            bg_color="pink-lighten-3",
            color="pink-lighten-1",
            model_value="15",
        ),
        v.ProgressLinear(
            bg_color="blue-grey",
            color="lime",
            model_value="30",
        ),
        v.ProgressLinear(
            bg_color="success",
            color="error",
            model_value="45",
        ),
    ],
)
