import ipyvuetify as v

v.Container(
    children=[
        v.Btn(tile=True, children=["Normal"], class_="mx-2"),
        v.Btn(tile=True, color="primary", children=["Primary"], class_="mx-2"),
        v.Btn(tile=True, color="error", children=["Error"], class_="mx-2"),
        v.Btn(tile=True, disabled=True, children=["Disabled"], class_="mx-2"),
    ]
)
