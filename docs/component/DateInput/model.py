import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center",
    children=[
        v.DateInput(
            v_model="model",
            label="Select a date",
            max_width="368",
        ),
    ],
)
