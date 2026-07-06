import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Html(
            tag="h5",
            class_="my-2",
            children=["(accepting only digits)"],
        ),
        v.OtpInput(
            v_model="otp",
            type="number",
            masked=True,
        ),
        v.Html(
            tag="div",
            class_="mt-2",
            children=[
                "Value:",
                v.Code(children=["{{ otp }}"]),
            ],
        ),
    ],
)
