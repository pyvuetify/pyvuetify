import pyvuetify as v

v.Stepper(
    mobile=True,
    children=[
        v.StepperHeader(
            children=[
                v.Html(
                    tag="template",
                    # JS expression, needs manual conversion
                    key="i",
                    children=[
                        v.Divider(),
                        v.StepperItem(),
                    ],
                ),
            ],
        ),
    ],
)
