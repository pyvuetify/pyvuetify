import pyvuetify as v

v.Container(
    children=[
        v.Combobox(
            # JS expression, needs manual conversion
            items="fruits",
            label="Fruits",
            placeholder="Ex: Apple, Grape",
            multiple=True,
            persistent_placeholder=True,
        ),
    ],
)
