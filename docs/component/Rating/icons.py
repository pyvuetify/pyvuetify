import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Rating(
            v_model="rating",
            empty_icon="mdi-circle-outline",
            full_icon="mdi-circle",
            half_increments=True,
            hover=True,
        ),
    ],
)
