import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.OtpInput(
            v_model="otp",
            # JS expression, needs manual conversion
            loading="loading",
            length="5",
            variant="underlined",
        ),
        v.Btn(
            # JS expression, needs manual conversion
            disabled="otp.length < 5 || loading",
            class_="my-5",
            color="surface-variant",
            text="Submit",
            variant="tonal",
        ),
    ],
)
