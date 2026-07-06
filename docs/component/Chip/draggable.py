import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Chip(
            draggable=True,
            children=["Default"],
        ),
    ],
)
