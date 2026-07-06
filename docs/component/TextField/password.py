import pyvuetify as v

v.Form(
    children=[
        v.Container(
            fluid=True,
            children=[
                v.Row(
                    children=[
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    v_model="password",
                                    # JS expression, needs manual conversion
                                    append_icon="show1 ? 'mdi-eye' : 'mdi-eye-off'",
                                    # JS expression, needs manual conversion
                                    rules="[rules.required, rules.min]",
                                    # JS expression, needs manual conversion
                                    type="show1 ? 'text' : 'password'",
                                    hint="At least 8 characters",
                                    label="Normal with hint text",
                                    name="input-10-1",
                                    counter=True,
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    # JS expression, needs manual conversion
                                    append_icon="show2 ? 'mdi-eye' : 'mdi-eye-off'",
                                    # JS expression, needs manual conversion
                                    rules="[rules.required, rules.min]",
                                    # JS expression, needs manual conversion
                                    type="show2 ? 'text' : 'password'",
                                    class_="input-group--focused",
                                    hint="At least 8 characters",
                                    label="Visible",
                                    name="input-10-2",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
