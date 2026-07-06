import pyvuetify as v

v.Sheet(
    class_="pt-8 pb-12 px-6 ma-4 mx-auto",
    max_width="350",
    width="100%",
    border=True,
    children=[
        v.Html(
            tag="h3",
            class_="text-title-large mt-0 mb-1",
            children=["Mobile phone verification"],
        ),
        v.Html(
            tag="div",
            class_="text-body-medium font-weight-light",
            children=[
                "Enter the code we just sent to your mobile phone",
                v.Html(
                    tag="span",
                    class_="font-weight-black text-primary",
                    children=["+1 408 555 1212"],
                ),
            ],
        ),
        v.OtpInput(
            v_model="otp",
            class_="mt-3 ms-n2",
            length="4",
            placeholder="0",
            variant="underlined",
        ),
        v.Divider(class_="mt-3 mb-6"),
        v.Html(
            tag="div",
            class_="mb-3 text-body-medium",
            children=[
                "Need another",
                v.Html(
                    tag="strong",
                    children=["code"],
                ),
                "?",
            ],
        ),
        v.Btn(
            color="primary",
            size="small",
            text="Re-send Email",
            variant="tonal",
        ),
    ],
)
