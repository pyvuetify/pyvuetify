import ipyvuetify as v

v.Container(
    children=[
        v.TextField(
            label="Main input",
            hide_details="auto",
        ),
        v.TextField(
            label="Another input",
        ),
    ]
)
