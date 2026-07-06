import pyvuetify as v

v.Html(
    tag="div",
    class_="text-center",
    children=[
        v.Rating(
            v_model="rating",
            active_color="blue",
            color="orange-lighten-1",
        ),
    ],
)
