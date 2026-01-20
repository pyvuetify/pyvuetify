import ipyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Textarea(
            clearable=True,
            clear_icon="mdi-close-circle",
            label="Text",
            value="This is clearable text.",
        )
    ],
)
