import ipyvuetify as v

v.Container(
    class_="mx-auto my-2",
    children=[
        v.Form(
            children=[
                v.Row(
                    children=[
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    v_model="First",
                                    label="First Name",
                                    shaped=True,
                                )
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    v_model="Last",
                                    label="Last Name",
                                    filled=True,
                                    shaped=True,
                                )
                            ],
                        ),
                    ]
                )
            ]
        )
    ],
)
