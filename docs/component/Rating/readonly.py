import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Rating(
            v_model="rating",
            readonly=True,
        ),
    ],
)
