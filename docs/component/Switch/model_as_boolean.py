import ipyvuetify as v

v.Container(
    class_="mx-auto my-2",
    fluid=True,
    children=[v.Switch(v_model=True, label="Switch 1"), v.Switch(v_model=False, label="Switch 2")],
)
