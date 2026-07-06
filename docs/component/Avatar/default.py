import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex align-center justify-space-around",
    children=[
        v.Avatar(
            color="info",
            children=[
                v.Icon(icon="mdi-account-circle"),
            ],
        ),
        v.Avatar(
            children=[
                v.Img(
                    alt="John",
                    src="https://cdn.vuetifyjs.com/images/john.jpg",
                ),
            ],
        ),
        v.Avatar(
            color="red",
            children=[
                v.Html(
                    tag="span",
                    class_="text-headline-small",
                    children=["CJ"],
                ),
            ],
        ),
    ],
)
