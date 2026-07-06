import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="344",
    title="User Registration",
    children=[
        v.Container(
            children=[
                v.TextField(
                    v_model="first",
                    color="primary",
                    label="First name",
                    variant="underlined",
                ),
                v.TextField(
                    v_model="last",
                    color="primary",
                    label="Last name",
                    variant="underlined",
                ),
                v.TextField(
                    v_model="email",
                    color="primary",
                    label="Email",
                    variant="underlined",
                ),
                v.TextField(
                    v_model="password",
                    color="primary",
                    label="Password",
                    placeholder="Enter your password",
                    variant="underlined",
                ),
                v.Checkbox(
                    v_model="terms",
                    color="secondary",
                    label="I agree to site terms and conditions",
                ),
            ],
        ),
        v.Divider(),
        v.CardActions(
            children=[
                v.Spacer(),
                v.Btn(
                    color="success",
                    children=[
                        "Complete Registration",
                        v.Icon(
                            icon="mdi-chevron-right",
                            end=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
