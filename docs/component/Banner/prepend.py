import pyvuetify as v

v.Banner(
    color="deep-purple-accent-4",
    lines="two",
    children=[
        v.Html(
            tag="template",
            children=[
                v.Avatar(
                    color="deep-purple-accent-4",
                    icon="mdi-account-filter",
                ),
            ],
        ),
    ],
)
