import pyvuetify as v

v.Container(
    children=[
        v.ProgressLinear(
            # JS expression, needs manual conversion
            model_value="power",
            color="amber",
            height="25",
        ),
        v.ProgressLinear(
            # JS expression, needs manual conversion
            model_value="knowledge",
            height="25",
            children=[
                v.Html(
                    tag="strong",
                    children=["{{ knowledge }}%"],
                ),
            ],
        ),
        v.ProgressLinear(
            # JS expression, needs manual conversion
            model_value="skill",
            color="blue-grey",
            height="25",
            children=[
                v.Html(
                    tag="template",
                    children=[
                        v.Html(
                            tag="strong",
                            children=["{{ roundingEnabled ? value.toFixed(1) : value }}%"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
