import pyvuetify as v

v.Form(
    children=[
        v.Container(
            children=[
                v.Row(
                    children=[
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    v_model="title",
                                    # JS expression, needs manual conversion
                                    rules="[rules.required, rules.counter]",
                                    label="Title",
                                    maxlength="20",
                                    counter=True,
                                ),
                            ],
                        ),
                        v.Col(
                            cols="12",
                            sm="6",
                            children=[
                                v.TextField(
                                    v_model="email",
                                    # JS expression, needs manual conversion
                                    rules="[rules.required, rules.email]",
                                    label="E-mail",
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
