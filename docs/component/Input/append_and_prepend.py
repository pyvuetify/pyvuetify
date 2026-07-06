import pyvuetify as v

v.TextField(
    children=[
        v.Html(
            tag="template",
            children=[
                v.Icon(
                    color="red",
                    children=["mdi-plus"],
                ),
            ],
        ),
    ],
)
