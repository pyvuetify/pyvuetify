import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Chip(
            class_="ma-2",
            closable=True,
            children=["Closable"],
        ),
        v.Btn(
            color="primary",
            children=["Reset Chip"],
        ),
    ],
)
