import pyvuetify as v

v.Card(
    class_="py-12 px-8 text-center mx-auto ma-4",
    max_width="420",
    width="100%",
    children=[
        v.Html(
            tag="h3",
            class_="text-title-large mt-0 mb-2",
            children=["Please enter the one time password to verify your account"],
        ),
        v.Html(
            tag="div",
            children=["A code has been sent to *****2489"],
        ),
        v.OtpInput(
            v_model="otp",
            # JS expression, needs manual conversion
            disabled="validating",
            color="primary",
            variant="plain",
        ),
        v.Btn(
            # JS expression, needs manual conversion
            loading="validating",
            class_="mt-6 text-none bg-surface-variant",
            height="40",
            text="Validate",
            variant="plain",
            width="135",
            border=True,
            rounded=True,
        ),
    ],
)
