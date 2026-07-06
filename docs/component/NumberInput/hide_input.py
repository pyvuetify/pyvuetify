import pyvuetify as v

v.Container(
    children=[
        v.Row(
            class_="justify-center",
            children=[
                v.Col(
                    cols="auto",
                    children=[
                        v.NumberInput(
                            variant="outlined",
                            hide_details=True,
                            hide_input=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
