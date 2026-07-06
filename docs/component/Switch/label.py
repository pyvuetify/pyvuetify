import pyvuetify as v

v.Switch(
    v_model="switchMe",
    children=[
        v.Html(
            tag="template",
            children=[
                "Turn on the progress:",
                v.ProgressCircular(
                    # JS expression, needs manual conversion
                    indeterminate="switchMe",
                    class_="ms-2",
                    size="24",
                ),
            ],
        ),
    ],
)
