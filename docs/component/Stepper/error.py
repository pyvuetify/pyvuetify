import pyvuetify as v

v.Stepper(
    model_value="3",
    children=[
        v.StepperHeader(
            children=[
                v.StepperItem(
                    title="Job Search",
                    value="1",
                    complete=True,
                ),
                v.Divider(),
                v.StepperItem(
                    # JS expression, needs manual conversion
                    rules="[() => false]",
                    subtitle="Missing Details",
                    title="Submit Application",
                    value="2",
                ),
                v.Divider(),
                v.StepperItem(
                    title="Interview Process",
                    value="3",
                ),
                v.Divider(),
                v.StepperItem(
                    title="Hiring Decision",
                    value="4",
                ),
            ],
        ),
    ],
)
