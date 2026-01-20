import ipyvuetify as v

v.Container(
    class_="mx-auto my-2",
    fluid=True,
    children=[
        v.Row(
            children=[
                v.Col(cols=6, children=[v.Switch(label="On", color="primary", v_model=True)]),
                v.Col(cols=6, children=[v.Switch(label="Off", color="primary", v_model=False)]),
            ]
        ),
        v.Row(
            children=[
                v.Col(
                    cols=6,
                    children=[
                        v.Switch(label="On disabled", color="primary", v_model=True, disabled=True)
                    ],
                ),
                v.Col(
                    cols=6,
                    children=[
                        v.Switch(
                            label="Off disabled", color="primary", v_model=False, disabled=True
                        )
                    ],
                ),
            ]
        ),
        v.Row(
            children=[
                v.Col(
                    cols=6, children=[v.Switch(label="On loading", loading="warning", v_model=True)]
                ),
                v.Col(
                    cols=6,
                    children=[v.Switch(label="Off loading", loading="warning", v_model=False)],
                ),
            ]
        ),
    ],
)
