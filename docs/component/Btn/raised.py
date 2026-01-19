import ipyvuetify as v

v.Container(
    children=[
        v.Btn(raised=True, children=["Normal"], class_="mx-2"),
        v.Btn(raised=True, color="primary", children=["Primary"], class_="mx-2"),
        v.Btn(raised=True, color="error", children=["Error"], class_="mx-2"),
        v.Btn(raised=True, disabled=True, children=["Disabled"], class_="mx-2"),
    ]
)
