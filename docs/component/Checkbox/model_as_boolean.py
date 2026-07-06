import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Checkbox(
            v_model="checkbox1",
            # JS expression, needs manual conversion
            label="`Checkbox 1: ${checkbox1.toString()}`",
        ),
        v.Checkbox(
            v_model="checkbox2",
            # JS expression, needs manual conversion
            label="`Checkbox 2: ${checkbox2.toString()}`",
        ),
    ],
)
