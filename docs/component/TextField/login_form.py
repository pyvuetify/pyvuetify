import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Img(
            class_="mx-auto my-6",
            max_width="228",
            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg",
        ),
        v.Card(
            class_="mx-auto pa-12 pb-8",
            elevation="3",
            max_width="448",
            rounded="lg",
            children=[
                v.Html(
                    tag="div",
                    class_="text-body-large text-medium-emphasis",
                    children=["Account"],
                ),
                v.TextField(
                    density="compact",
                    placeholder="Email address",
                    prepend_inner_icon="mdi-email-outline",
                    variant="outlined",
                ),
                v.Html(
                    tag="div",
                    class_=("text-body-large text-medium-emphasis d-flex align-center justify-space-between"),
                    children=[
                        "Password",
                        v.Html(
                            tag="a",
                            class_="text-body-small text-decoration-none text-blue",
                            href="#",
                            rel="noopener noreferrer",
                            target="_blank",
                            children=["Forgot login password?"],
                        ),
                    ],
                ),
                v.TextField(
                    # JS expression, needs manual conversion
                    append_inner_icon='visible ? "mdi-eye-off" : "mdi-eye"',
                    # JS expression, needs manual conversion
                    type='visible ? "text" : "password"',
                    density="compact",
                    placeholder="Enter your password",
                    prepend_inner_icon="mdi-lock-outline",
                    variant="outlined",
                ),
                v.Card(
                    class_="mb-12",
                    color="surface-variant",
                    variant="tonal",
                    children=[
                        v.CardText(
                            class_="text-medium-emphasis text-body-small",
                            children=[
                                (
                                    "Warning: After 3 consecutive failed login attempts, you "
                                    "account will be temporarily locked for three hours. If you "
                                    'must login now, you can also click "Forgot login password?" '
                                    "below to reset the login password."
                                ),
                            ],
                        ),
                    ],
                ),
                v.Btn(
                    class_="mb-8",
                    color="blue",
                    size="large",
                    variant="tonal",
                    block=True,
                    children=["Log In"],
                ),
                v.CardText(
                    class_="text-center",
                    children=[
                        v.Html(
                            tag="a",
                            class_="text-blue text-decoration-none",
                            href="#",
                            rel="noopener noreferrer",
                            target="_blank",
                            children=[
                                "Sign up now",
                                v.Icon(icon="mdi-chevron-right"),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
