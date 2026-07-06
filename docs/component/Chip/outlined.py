import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Chip(
            class_="ma-2",
            color="success",
            variant="outlined",
            children=[
                v.Icon(
                    icon="mdi-server-plus",
                    start=True,
                ),
                "Server Status",
            ],
        ),
        v.Chip(
            class_="ma-2",
            color="primary",
            variant="outlined",
            children=[
                "User Account",
                v.Icon(
                    icon="mdi-account-outline",
                    end=True,
                ),
            ],
        ),
    ],
)
