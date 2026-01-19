import ipyvuetify as v

v.Container(
    class_="mx-auto my-2",
    fluid=True,
    children=[
        v.Switch(flat=True, v_model=True, label="Flat Switch"),
        v.Switch(flat=True, v_model=False, label="Flat Switch"),
    ],
)
