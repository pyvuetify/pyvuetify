import ipyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.RadioGroup(
            v_model="radio-1",
            column=True,
            children=[
                v.Radio(
                    label="Option 1",
                    value="radio-1",
                ),
                v.Radio(
                    label="Option 2",
                    value="radio-2",
                ),
            ],
        ),
        v.Divider(),
        v.RadioGroup(
            v_model="radio-1",
            row=True,
            children=[
                v.Radio(
                    label="Option 1",
                    value="radio-1",
                ),
                v.Radio(
                    label="Option 2",
                    value="radio-2",
                ),
            ],
        ),
    ],
)
