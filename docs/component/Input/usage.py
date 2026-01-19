import ipyvuetify as v

v.Container(
    id="input-usage",
    fluid=True,
    children=[
        v.Row(
            children=[
                v.Col(
                    cols=12,
                    children=[
                        v.Input(
                            messages=["Messages"],
                            append_icon="mdi-close",
                            prepend_icon="mdi-phone",
                            children=["Default Slot"],
                        )
                    ],
                )
            ]
        )
    ],
)
