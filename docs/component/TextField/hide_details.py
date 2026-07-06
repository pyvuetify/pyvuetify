import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.TextField(
            # JS expression, needs manual conversion
            rules="rules",
            hide_details="auto",
            label="Main input",
        ),
        v.TextField(label="Another input"),
    ],
)
