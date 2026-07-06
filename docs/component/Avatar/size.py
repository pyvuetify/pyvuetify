import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex align-center justify-space-around",
    children=[
        v.Avatar(
            color="primary",
            size="x-small",
            children=["32"],
        ),
        v.Avatar(
            color="secondary",
            children=["48"],
        ),
        v.Avatar(
            color="info",
            size="x-large",
            children=["64"],
        ),
    ],
)
