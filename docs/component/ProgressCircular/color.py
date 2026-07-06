import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.ProgressCircular(
            color="blue-grey",
            model_value="100",
        ),
        v.ProgressCircular(
            color="deep-orange-lighten-2",
            model_value="80",
        ),
        v.ProgressCircular(
            color="brown",
            model_value="60",
        ),
        v.ProgressCircular(
            color="lime",
            model_value="40",
        ),
        v.ProgressCircular(
            color="indigo-darken-2",
            model_value="20",
        ),
    ],
)
