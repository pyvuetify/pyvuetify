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
                                    v_model="password",
                                    append_icon="mdi-eye",
                                    type_="password",
                                    name="input-10-1",
                                    label="Normal with hint text",
                                    hint="At least 8 characters",
                                    counter=True,
                                )
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    append_icon="mdi-eye",
                                    type_="text",
                                    name="input-10-2",
                                    label="Visible",
                                    hint="At least 8 characters",
                                    value="wqfasds",
                                    class_="input-group--focused",
                                )
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    append_icon="mdi-eye-off",
                                    type_="password",
                                    name="input-10-2",
                                    label="Not visible",
                                    hint="At least 8 characters",
                                    value="wqfasds",
                                    class_="input-group--focused",
                                )
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    append_icon="mdi-eye-off",
                                    type_="password",
                                    name="input-10-2",
                                    label="Error",
                                    hint="At least 8 characters",
                                    value="Pa",
                                    error=True,
                                    click_append="show4 = not show4",
                                )
                            ],
                        ),
                    ]
                )
            ]
        )
    ],
)
