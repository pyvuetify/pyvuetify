import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center",
    children=[
        v.DateInput(
            v_model="model",
            input_format="yyyy-mm-dd",
            max_width="368",
            prefix="ISO Date:",
        ),
    ],
)
