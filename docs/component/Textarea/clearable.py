import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Textarea(
            clear_icon="mdi-close-circle",
            label="Text",
            model_value="This is clearable text.",
            clearable=True,
        ),
    ],
)
