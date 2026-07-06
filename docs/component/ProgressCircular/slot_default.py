import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.ProgressCircular(
            # JS expression, needs manual conversion
            model_value="value",
            rotate=360,
            size=100,
            width=15,
            color="teal",
            children=[
                v.Html(
                    tag="template",
                    children=["{{ value }} %"],
                ),
            ],
        ),
    ],
)
