import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Row(
            children=[
                v.Col(
                    cols="12",
                    children=[
                        v.RangeSlider(
                            v_model="value",
                            label="Disabled",
                            disabled=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
