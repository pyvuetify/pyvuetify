import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Pagination(
            length=3,
            disabled=True,
        ),
    ],
)
