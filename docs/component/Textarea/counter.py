import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Textarea(
            # JS expression, needs manual conversion
            model_value="value",
            # JS expression, needs manual conversion
            rules="rules",
            label="Text",
            counter=True,
        ),
    ],
)
