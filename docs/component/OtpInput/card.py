import pyvuetify as v

v.Card(
    class_="py-8 px-6 text-center mx-auto ma-4",
    elevation="4",
    max_width="400",
    width="100%",
    children=[
        v.Html(
            tag="h3",
            class_="text-title-large mt-0 mb-4",
            children=["Verify Your Account"],
        ),
        v.Html(
            tag="div",
            class_="text-body-medium",
            children=[
                "We sent a verification code to john..@gmail.com",
                "Please check your email and paste the code below.",
            ],
        ),
        v.Sheet(
            color="surface",
            children=[
                v.OtpInput(
                    v_model="otp",
                    type="password",
                    variant="solo",
                ),
            ],
        ),
        v.Btn(
            class_="my-4",
            color="purple",
            height="40",
            text="Verify",
            variant="flat",
            width="70%",
        ),
        v.Html(
            tag="div",
            class_="text-body-small",
            children=[
                "Didn't receive the code?",
                v.Html(
                    tag="a",
                    href="#",
                    children=["Resend"],
                ),
            ],
        ),
    ],
)
