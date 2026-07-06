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
                            children=["min:10/max:20"],
                        ),
                        v.NumberInput(
                            max=20,
                            min=10,
                            model_value=15,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
