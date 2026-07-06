import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Rating(
            v_model="rating",
            item_aria_label="custom icon label text {0} of {1}",
        ),
    ],
)
