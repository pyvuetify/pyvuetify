import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Chip(
            ripple=False,
            link=True,
            children=["Default"],
        ),
    ],
)
