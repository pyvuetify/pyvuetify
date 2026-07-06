import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center align-center ga-2 mt-2",
    children=[
        v.Label(
            style_="width: 100px",
            children=["compact"],
        ),
        v.Chip(
            density="compact",
            size="x-small",
            children=["x-small"],
        ),
        v.Chip(
            density="compact",
            size="small",
            children=["small"],
        ),
        v.Chip(
            density="compact",
            children=["default"],
        ),
        v.Chip(
            density="compact",
            size="large",
            children=["large"],
        ),
        v.Chip(
            density="compact",
            size="x-large",
            children=["x-large"],
        ),
    ],
)
