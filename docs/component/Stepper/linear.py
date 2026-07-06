import pyvuetify as v

v.Stepper(
    model_value="3",
    children=[
        v.StepperHeader(
            children=[
                v.StepperItem(
                    title="Select campaign settings",
                    value="1",
                    complete=True,
                ),
                v.Divider(),
                v.StepperItem(
                    title="Create an ad group",
                    value="2",
                    complete=True,
                ),
                v.Divider(),
                v.StepperItem(
                    title="Create an ad",
                    value="3",
                ),
            ],
        ),
    ],
)
