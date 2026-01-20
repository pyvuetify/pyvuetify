import ipyvuetify as v

v.Container(
    children=[
        v.Btn(text=True, children=["Normal"]),
        v.Btn(text=True, color="primary", children=["Primary"]),
        v.Btn(text=True, color="error", children=["Error"]),
        v.Btn(text=True, disabled=True, children=["Disabled"]),
    ]
)
