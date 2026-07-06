import pyvuetify as v

v.Banner(
    color="pink-darken-1",
    icon="mdi-account-box",
    lines="two",
    children=[
        v.Html(
            tag="template",
            children=[
                v.Avatar(),
            ],
        ),
    ],
)
