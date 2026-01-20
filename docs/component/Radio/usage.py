import ipyvuetify as v

v.Container(
    class_="px-0",
    fluid=True,
    children=[
        v.RadioGroup(
            v_model=1,
            children=[
                v.Radio(
                    label=f"Radio {n+1}",
                    value=n,
                )
                for n in range(0, 3)
            ],
        )
    ],
)
