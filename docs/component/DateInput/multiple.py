import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-center",
    children=[
        v.DateInput(
            v_model="model",
            label="Select day(s)",
            max_width="368",
            multiple=True,
        ),
    ],
)
