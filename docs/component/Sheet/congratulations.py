import pyvuetify as v

v.Sheet(
    class_="d-flex align-center justify-center flex-wrap text-center mx-auto px-4",
    elevation="2",
    height="250",
    max_width="800",
    width="100%",
    rounded=True,
    children=[
        v.Html(
            tag="div",
            children=[
                v.Html(
                    tag="h2",
                    class_="text-headline-large font-weight-black text-orange my-0",
                    children=["Congratulations!"],
                ),
                v.Html(
                    tag="div",
                    class_="text-headline-small font-weight-medium mb-2",
                    children=["You are officially a part of the Vuetify Community!"],
                ),
                v.Html(
                    tag="p",
                    class_="text-body-medium mb-4",
                    children=[
                        ("Please head over to your inbox/spam or others folder to find our verification email."),
                    ],
                ),
                v.Btn(
                    color="orange",
                    variant="text",
                    children=["Go to Login"],
                ),
            ],
        ),
    ],
)
