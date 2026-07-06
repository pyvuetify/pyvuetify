import pyvuetify as v

v.Stepper(
    alt_labels=True,
    children=[
        v.StepperHeader(
            children=[
                v.StepperItem(
                    title="Ad unit details",
                    value="1",
                ),
                v.Divider(),
                v.StepperItem(
                    title="Ad sizes",
                    value="2",
                ),
                v.Divider(),
                v.StepperItem(
                    title="Ad templates",
                    value="3",
                ),
            ],
        ),
    ],
)
