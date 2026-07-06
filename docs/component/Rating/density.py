import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex flex-column align-center justify-center",
    children=[
        v.Rating(
            v_model="rating",
            class_="ma-2",
            density="default",
        ),
        v.Rating(
            v_model="rating",
            class_="ma-2",
            density="comfortable",
        ),
        v.Rating(
            v_model="rating",
            class_="ma-2",
            density="compact",
        ),
    ],
)
