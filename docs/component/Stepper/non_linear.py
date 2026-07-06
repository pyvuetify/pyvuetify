import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Stepper(
            non_linear=True,
            children=[
                v.StepperHeader(
                    children=[
                        v.StepperItem(
                            value="1",
                            editable=True,
                            children=["Select campaign settings"],
                        ),
                        v.Divider(),
                        v.StepperItem(
                            value="2",
                            editable=True,
                            children=["Create an ad group"],
                        ),
                        v.Divider(),
                        v.StepperItem(
                            value="3",
                            editable=True,
                            children=["Create an ad"],
                        ),
                    ],
                ),
            ],
        ),
        v.Stepper(
            class_="mt-12",
            non_linear=True,
            children=[
                v.StepperHeader(
                    children=[
                        v.StepperItem(
                            value="1",
                            complete=True,
                            editable=True,
                            children=["Select campaign settings"],
                        ),
                        v.Divider(),
                        v.StepperItem(
                            value="2",
                            editable=True,
                            children=["Create an ad group"],
                        ),
                        v.Divider(),
                        v.StepperItem(
                            value="3",
                            complete=True,
                            editable=True,
                            children=["Create an ad"],
                        ),
                    ],
                ),
            ],
        ),
        v.Stepper(
            class_="mt-12",
            value="3",
            non_linear=True,
            children=[
                v.StepperHeader(
                    children=[
                        v.StepperItem(
                            value="1",
                            complete=True,
                            editable=True,
                            children=["Select campaign settings"],
                        ),
                        v.Divider(),
                        v.StepperItem(
                            value="2",
                            complete=True,
                            editable=True,
                            children=["Create an ad group"],
                        ),
                        v.Divider(),
                        v.StepperItem(
                            value="3",
                            complete=True,
                            editable=True,
                            children=["Create an ad"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
