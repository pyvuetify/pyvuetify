import ipyvuetify as v

v.Container(
    class_="mx-auto my-2",
    fluid=True,
    children=[
        v.Switch(inset=True, v_model=True, label="Inset Switch 1"),
        v.Switch(inset=True, v_model=False, label="Inset Switch 2"),
    ],
)
