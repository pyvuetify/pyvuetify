import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex flex-column align-center",
    children=[
        v.Rating(
            model_value="3",
            size="x-small",
        ),
        v.Rating(
            model_value="3",
            size="small",
        ),
        v.Rating(model_value="3"),
        v.Rating(
            model_value="3",
            size="large",
        ),
        v.Rating(
            model_value="3",
            size="x-large",
        ),
        v.Rating(
            model_value="3",
            size="72",
        ),
    ],
)
