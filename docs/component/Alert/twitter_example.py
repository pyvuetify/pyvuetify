import ipyvuetify as v

v.Container(
    children=[
        v.Alert(
            color="#26c6da",
            border="left",
            elevation=2,
            colored_border=True,
            icon="mdi-twitter",
            children=["You've got 5 new updates on your timeline!"],
        ),
    ]
)
