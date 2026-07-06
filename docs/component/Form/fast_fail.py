import pyvuetify as v

v.Sheet(
    class_="mx-auto",
    width="300",
    children=[
        v.Form(
            fast_fail=True,
            children=[
                v.TextField(
                    v_model="firstName",
                    # JS expression, needs manual conversion
                    rules="firstNameRules",
                    label="First name",
                ),
                v.TextField(
                    v_model="lastName",
                    # JS expression, needs manual conversion
                    rules="lastNameRules",
                    label="Last name",
                ),
                v.Btn(
                    class_="mt-2",
                    type="submit",
                    block=True,
                    children=["Submit"],
                ),
            ],
        ),
    ],
)
