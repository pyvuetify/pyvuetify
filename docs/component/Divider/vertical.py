import pyvuetify as v

v.Toolbar(
    color="purple",
    children=[
        v.Html(
            tag="template",
            children=[
                v.Html(
                    tag="div",
                    class_="text-headline-small px-3",
                    children=["Title"],
                ),
            ],
        ),
    ],
)
