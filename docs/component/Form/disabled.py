import pyvuetify as v

v.Sheet(
    class_="mx-auto",
    width="300",
    children=[
        v.Checkbox(
            v_model="isEnabled",
            label="Form is enabled",
        ),
        v.Form(
            # JS expression, needs manual conversion
            disabled="!isEnabled",
            children=[
                v.TextField(
                    v_model="firstName",
                    label="First name",
                ),
                v.TextField(
                    v_model="lastName",
                    label="Last name",
                ),
                v.Checkbox(
                    v_model="isAdmin",
                    label="User is admin",
                ),
                v.Select(
                    v_model="role",
                    # JS expression, needs manual conversion
                    disabled="isAdmin || undefined",
                    items=["VIEWER", "EDITOR"],
                    hint="I'm enabled only if the user is not an admin",
                    persistent_hint=True,
                ),
            ],
        ),
    ],
)
