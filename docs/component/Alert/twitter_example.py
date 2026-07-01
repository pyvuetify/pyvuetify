import pyvuetify as v

v.Container(
    children=[
        v.Alert(
            klass="ma-1",
            color="#26c6da",
            border="start",
            elevation=2,
            colored_border=True,
            icon="mdi-twitter",
            children=["You've got 5 new updates on your timeline!"],
        ),
    ]
)
