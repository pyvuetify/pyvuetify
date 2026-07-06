import pyvuetify as v

v.Card(
    children=[
        v.CardText(
            children=[
                v.RangeSlider(
                    v_model="value",
                    strict=True,
                ),
            ],
        ),
    ],
)
