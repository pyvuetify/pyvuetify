import ipyvuetify as v

v.Col(
    children=[
        v.RangeSlider(
            class_="mx-1 mt-10",
            v_model=[25, 75],
            thumb_label=True,
            label="default Range",
        ),
        v.RangeSlider(
            class_="mx-1 mt-10",
            v_model=[-10, 20],
            min=-50,
            max=50,
            label="negative to positive range",
            thumb_label=True,
        ),
    ]
)
