import ipyvuetify as v

v.Html(
    tag="div",
    children=[
        v.TextField(
            label="Main input",
            hide_details="auto",
        ),
        v.TextField(label="Another input"),
    ],
)
