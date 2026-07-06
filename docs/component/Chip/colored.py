import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center ga-2 mt-2",
    children=[
        v.Chip(
            variant="flat",
            children=["Default flat"],
        ),
        v.Chip(
            color="primary",
            variant="flat",
            children=["Primary flat"],
        ),
        v.Chip(
            color="secondary",
            variant="flat",
            children=["Secondary flat"],
        ),
        v.Chip(
            color="red",
            variant="flat",
            children=["Red flat"],
        ),
        v.Chip(
            color="green",
            variant="flat",
            children=["Green flat"],
        ),
    ],
)
