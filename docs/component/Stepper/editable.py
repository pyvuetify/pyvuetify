import pyvuetify as v

v.Stepper(
    children=[
        v.StepperHeader(
            children=[
                v.StepperItem(
                    title="Select campaign settings",
                    value="1",
                    complete=True,
                    editable=True,
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
                    editable=True,
                ),
            ],
        ),
    ],
)
