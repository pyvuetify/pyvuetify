import pyvuetify as v

v.Card(
    class_="mx-auto text-white",
    color="#26c6da",
    max_width="400",
    prepend_icon="mdi-twitter",
    title="Twitter",
    children=[
        v.Html(
            tag="template",
            children=[
                v.Icon(size="x-large"),
            ],
        ),
    ],
)
