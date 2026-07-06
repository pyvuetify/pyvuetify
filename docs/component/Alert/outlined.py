import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Alert(
            color="purple",
            variant="outlined",
            children=[
                v.Html(
                    tag="template",
                    children=["Outlined Alert"],
                ),
            ],
        ),
    ],
)
