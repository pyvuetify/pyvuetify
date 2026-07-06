import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.FileInput(
            label="File input w/ chips",
            chips=True,
            multiple=True,
        ),
    ],
)
