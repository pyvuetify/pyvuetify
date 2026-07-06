import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Textarea(
            # JS expression, needs manual conversion
            model_value="value",
            label="Text",
            rows="1",
            no_resize=True,
        ),
    ],
)
