import ipyvuetify as v

v.Container(
    children=[
        v.Btn(depressed=True, children=["Normal"], class_="mx-2"),
        v.Btn(depressed=True, color="primary", children=["Primary"], class_="mx-2"),
        v.Btn(depressed=True, color="error", children=["Error"], class_="mx-2"),
        v.Btn(depressed=True, disabled=True, children=["Disabled"], class_="mx-2"),
    ]
)
