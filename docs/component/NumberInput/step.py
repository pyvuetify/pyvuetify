import pyvuetify as v

v.Container(
    children=[
        v.Row(
            children=[
                v.Col(
                    children=[
                        v.Html(
                            tag="h5",
                            class_="my-0",
                            children=["step 2; min:10; max:20"],
                        ),
                        v.NumberInput(
                            max=20,
                            min=10,
                            model_value=15,
                            step=2,
                        ),
                    ],
                ),
                v.Col(
                    children=[
                        v.Html(
                            tag="h5",
                            class_="my-0",
                            children=["step {{ step }}, rounding on blur"],
                        ),
                        v.NumberInput(
                            v_model="roundedValue",
                            # JS expression, needs manual conversion
                            step="step",
                        ),
                    ],
                ),
            ],
        ),
    ],
)
