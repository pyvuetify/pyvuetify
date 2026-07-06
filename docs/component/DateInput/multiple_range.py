import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center",
    children=[
        v.DateInput(
            v_model="model",
            label="Select range",
            max_width="368",
            multiple="range",
        ),
    ],
)
