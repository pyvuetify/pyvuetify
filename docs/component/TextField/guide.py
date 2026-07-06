import pyvuetify as v

v.Sheet(
    class_="bg-deep-purple pa-12",
    rounded=True,
    children=[
        v.Card(
            class_="mx-auto px-6 py-8",
            max_width="344",
            children=[
                v.Form(
                    v_model="form",
                    children=[
                        v.TextField(
                            v_model="email",
                            # JS expression, needs manual conversion
                            readonly="loading",
                            # JS expression, needs manual conversion
                            rules="[required]",
                            class_="mb-2",
                            label="Email",
                            clearable=True,
                        ),
                        v.TextField(
                            v_model="password",
                            # JS expression, needs manual conversion
                            readonly="loading",
                            # JS expression, needs manual conversion
                            rules="[required]",
                            label="Password",
                            placeholder="Enter your password",
                            clearable=True,
                        ),
                        v.Btn(
                            # JS expression, needs manual conversion
                            disabled="!form",
                            # JS expression, needs manual conversion
                            loading="loading",
                            color="success",
                            size="large",
                            type="submit",
                            variant="elevated",
                            block=True,
                            children=["Sign In"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
