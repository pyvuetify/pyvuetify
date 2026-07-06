import pyvuetify as v

v.Stepper(
    alt_labels=True,
    children=[
        v.StepperHeader(
            children=[
                v.StepperItem(
                    value="1",
                    complete=True,
                    children=[
                        v.Html(
                            tag="template",
                            children=["Ad type"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
